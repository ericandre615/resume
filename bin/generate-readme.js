#!/usr/bin/env node

import fs from 'fs';
import resume from '../data/resume.js';
import formatDate from '../utils/formatters/date.js';
import formatPhone from '../utils/formatters/phone.js';

const getByLabel = data => tag => data.find(({ label }) => label.toLowerCase() == tag.toLowerCase());
const phoneFormat = formatPhone('.');
const dateFormat = formatDate('M Y');
const generateMarkdown = data => {
  const skillLevels = {
    "novice":      ":large_blue_circle: :white_circle: :white_circle: :white_circle: :white_circle:",
    "beginner":    ":large_blue_circle: :large_blue_circle: :white_circle: :white_circle: :white_circle:",
    "skillful":    ":large_blue_circle: :large_blue_circle: :large_blue_circle: :white_circle: :white_circle:",
    "experienced": ":large_blue_circle: :large_blue_circle: :large_blue_circle: :large_blue_circle: :white_circle:",
    "expert":      ":large_blue_circle: :large_blue_circle: :large_blue_circle: :large_blue_circle: :large_blue_circle:",
  };
  const getSocial = getByLabel(data.socialProfiles);
  const profile = getSocial('profile');
  const github = getSocial('github');

  const markdown = `

# ${data.firstName} ${data.lastName}
## ${data.position}

:telephone_receiver: ${phoneFormat(data.phoneNumber)} \\| :link: [${profile.url}](${profile.url}) \\| :mailbox: <${data.email}> \\| :octocat: [${github.url}](${github.url})

### :memo: Summary
${data.profile}

### :computer: Work

${
  data.workExperiences.map((job) => (`
**${job.employer}** \\| ${dateFormat(job.dateFrom)} &mdash; ${dateFormat(job.dateUntil)} \\| ${job.location} \
_${job.title}_

${job.description}
  `)).join('')
}

### :hammer: Skills

${
  data.skills.map((skill, i) => (`${skill.skill} ${skillLevels[skill.level]} ${(i + 1) % 3 == 0 ? '  \n' : '' }`)).join('')
}

### :notebook: Education

${
  data.educations.map(education => (`
_${education.school} \\| ${dateFormat(education.dateFrom)} &mdash; ${dateFormat(education.dateUntil)} \\| ${education.location}_

${education.courses.join(' :small_blue_diamond: ')}
  `)).join('')
}
`;

  return markdown;
};

const writeReadme = data => {
  fs.writeFile('./README.md', data, 'utf8', err => {
    if (err) {
      console.log('Error Generating Resume ', err);
      return process.exit(1);
    }

    process.exit(0);
  });
};

writeReadme(generateMarkdown(resume));

