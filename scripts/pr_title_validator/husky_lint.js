/* eslint-env node */

const fs = require('fs');
const validator = require('./validator');

let HuskyValidator = {
  init() {
    const commitFile = process.argv.slice(2)[0].replace('--gitMessage=', '');

    const message = fs.readFileSync(commitFile, 'utf8').trim();

    return validator(message);
  }
}

HuskyValidator.init();
