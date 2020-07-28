import styles from './styles.js';
import formatPhone from '../../../utils/formatters/phone.js';
import formatDate from '../../../utils/formatters/date.js';
import { getByLabel, getById } from '../../../utils/get-by.js';

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
  const getSkill = getById(data.skills);
  const getSecondarySkill = getById(data.secondarySkills);
  const profile = getSocial('profile');
  const github = getSocial('github');

  const html = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${data.firstName} ${data.lastName} Resume</title>
  <link rel="stylesheet" type="text/css" href="reset.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
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
    <hr />
    <div id="content">
      <div id="sections">
        <section id="summary">
          <h1>Summary</h1>
          <hr />
          <p>${data.profile}</p>
        </section>
        <section id="work">
          <h1>Work</h1>
          <hr />
          ${
            data.workExperiences.map((job) => (`
          <h2><strong>${job.employer}</strong> | ${dateFormat(job.dateFrom)} &mdash; ${dateFormat(job.dateUntil)} | ${job.location}</h2>
          <h3><em>${job.title}</em></h3>

          <p>${job.description}</p>

          <ul class="skills-work">
          ${
            job.skills.primary.map(id => (`
              <li class="skill-item primary">${getSkill(id).skill}</li>
            `)).join('')
          }
          ${
            job.skills.secondary.map(id => (`
              <li class="skill-item secondary">${getSecondarySkill(id).skill}</li>
            `)).join('')
          }
          </ul>
            `))
              .slice(0, data.workExperiences.length - 1)
              .join('')
          }
        </section>
        <section id="education">
          <h1>Education</h1>
          <hr />
          ${
            data.educations.map(education => (`
              <h2><strong>${education.school}</strong> | ${dateFormat(education.dateFrom)} &mdash; ${dateFormat(education.dateUntil)} | ${education.location}</h2>
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
      <aside>
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
      </aside>
    </div>
    </div>
  </main>
</body>
</html>
`;

  return html;
}

export default template;

