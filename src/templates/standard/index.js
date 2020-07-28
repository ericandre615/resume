import styles from './styles.js';
import formatPhone from '../../../utils/formatters/phone.js';
import formatDate from '../../../utils/formatters/date.js';
import getByLabel from '../../../utils/get-by-label.js';

const phoneFormat = formatPhone('.');
const dateFormat = formatDate('M Y');
const skillLevels = {
  novice:      1,
  beginner:    2,
  skillful:    3,
  experienced: 4,
  expert:      5,
};

const drawSkillLevel = (level = 0) => {
  const percent = (level / 5) * 100;
  return `
    <span class="skill-progress ${percent}" style="width:${percent}%;">${level}</span>
  `;
}

const template = data => {
  const getSocial = getByLabel(data.socialProfiles);
  const profile = getSocial('profile');
  const github = getSocial('github');

  const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${data.firstName} ${data.lastName} Resume</title>
  <link rel="stylesheet" type="text/css" href="reset.css" />
  <style>
    ${styles({ size: 'a4' })}
  </style>
</head>
<body>
  <main id="resume">
    <div class="container">
    <header>
      <h1>${data.firstName} ${data.lastName}</h1>
      <h2>${data.position}</h2>
      <nav>
        <ul>
          <li>${phoneFormat(data.phoneNumber)} | </li>
          <li><a href="mailto:${data.email}">${data.email}</a> | </li>
          <li><a href="${profile.url}">${profile.url}</a> | </li>
          <li><a href="${github.url}">${github.url}</a></li>
        </ul>
      </nav>
    </header>
    <section id="summary">
      <h1>Summary</h1>
      ${data.profile}
    </section>
    <section id="work">
      <h1>Work</h1>
      ${
        data.workExperiences.map((job) => (`
      <h2><strong>${job.employer}</strong> | ${dateFormat(job.dateFrom)} &mdash; ${dateFormat(job.dateUntil)} | ${job.location}</h2>
      <h3><em>${job.title}</em></h3>

      <p>${job.description}</p>
        `)).join('')
      }
    </section>
    <section id="skills">
      <h1>Skills</h1>
      <ul id="skills-list">
      ${
        data.skills.map((skill, i) => (
          `<li><span class="skill-name">${skill.skill}</span> <span class="skill-exp">${drawSkillLevel(skillLevels[skill.level])}</span></li>`
        )).join('')
      }
      </ul>
    </section>
    <section id="education">
      <h1>Education</h1>
      ${
        data.educations.map(education => (`
          <h2>${education.school} | ${dateFormat(education.dateFrom)} &mdash; ${dateFormat(education.dateUntil)} | ${education.location}</h2>
          <ul id="courses">
          ${
            education.courses.map(course => (`
              <li class="course">${course}</li>
            `)).join('')
          }
          </ul>
        `)).join('')
      }
    </section>
    </div>
  </main>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
`;

  return html;
}

export default template;

