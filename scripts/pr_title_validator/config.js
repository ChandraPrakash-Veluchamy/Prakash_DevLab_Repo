/* eslint-env node */
'use strict';

let REGEX_STRINGS = {
  ISSUE: {
    REGEX: 'FT-[0-9]+:\\s',
    helpString: 'FT-1234: a nice bug',
    IGNORE: 'RELEASE: '
  }
};

module.exports = REGEX_STRINGS;
