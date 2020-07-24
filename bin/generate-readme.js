#!/usr/bin/env node

const fs = require('fs');
const resume = require('../data/resume.json');

const getByLabel = data => tag => data.find(({ label }) => label.toLowerCase() == tag.toLowerCase());
const formatPhone = phone => phone;
const formatDate = date => date;
const generateMarkdown = data => {
  const skillLevels = {
    "novice":      ":black_circle: :white_circle: :white_circle: :white_circle: :white_circle:",
    "beginner":    ":black_circle: :black_circle: :white_circle: :white_circle: :white_circle:",
    "skillful":    ":black_circle: :black_circle: :black_circle: :white_circle: :white_circle:",
    "experienced": ":black_circle: :black_circle: :black_circle: :black_circle: :white_circle:",
    "expert":      ":black_circle: :black_circle: :black_circle: :black_circle: :black_circle:",
  };
  const getSocial = getByLabel(data.socialProfiles);
  const profile = getSocial('profile');
  const github = getSocial('github');

  const markdown = `

# ${data.firstName} ${data.lastName}
## ${data.position}

:telephone_receiver: ${formatPhone(data.phoneNumber)} \| :link: [${profile.url}](${profile.url}) \| :mailbox: <${data.email}> \| :octocat: [${github.url}](${github.url})

### :memo: Summary
${data.profile}

### :computer: Work

${
  data.workExperiences.map((job) => (`
**${job.employer}** \| ${formatDate(job.dateFrom)} &mdash; ${formatDate(job.dateUntil)} \| ${job.location}

_${job.title}_

${job.description}
  `)).join('')
}

### :hammer: Skills

${
  data.skills.map((skill, i) => (`${skill.skill} - ${skillLevels[skill.level]}${i % 6 == 0 ? '  ' : '' }`)).join('')
}

### :notebook: Education

${
  data.educations.map(education => (`
_${education.school} \| ${formatDate(education.dateFrom)} &mdash; ${formatDate(education.dateUntil)} \| ${education.location}_

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

