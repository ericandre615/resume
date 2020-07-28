#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import resume from '../data/resume.js';
import templates from '../src/templates.js';

const cli = { path: 'path=', template: 'template=' };
const getArg = (arg, def = '') => (process.argv.find(str => str.includes(arg)) || def).replace(arg, '');
const template = getArg(cli.template, 'default');
const buildPath = getArg(cli.path, './build');
const resumeTemplate = templates[template](resume);

fs.writeFile(path.join(buildPath, `./${template}.html`), resumeTemplate, 'utf8', err => {
  if (err) {
    console.log('Error Generating Resume Template ', err);
    return process.exit(1);
  }

  process.exit(0);
});

