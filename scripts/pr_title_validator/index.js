/* eslint-disable no-console */
/* eslint-env node */
'use strict';

// Creating an object for the validator module
const validator = require('./validator');

let PRValidator = {
  init() {
    const title = process.argv.slice(2)[0].replace('--prTitle=', '');

    console.log(`Extracted PR title is ${title}`);

    return validator(title);
  }
};

PRValidator.init();
