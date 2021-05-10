/* eslint-disable no-console */
/* eslint-env node */
'use strict';

const CONFIGS = require('./config');

module.exports = function(title) {
  try {
    const ISSUE_REGEX = new RegExp(CONFIGS.ISSUE.REGEX);

    if (!ISSUE_REGEX.test(title) && !title.toUpperCase().startsWith(CONFIGS.ISSUE.IGNORE)) {
      throw new Error(`Issue ID is not mentioned in the PR title. Ex: "${CONFIGS.ISSUE.helpString}"`);
    }
  } catch (e) {
    throw e.message;
  }

  return console.log('SUCCESS');
};
