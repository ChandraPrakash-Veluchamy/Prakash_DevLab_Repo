/* eslint-disable no-console */
/* eslint-env node */
'use strict';

const validator = require('./validator');

let PRValidator = {
  init() {
    const title = process.argv.slice(2)[0].replace('--prTitle=', '');

    console.log(`The git PR title is ${title}`);

    return validator(title);
  }
};

PRValidator.init();
