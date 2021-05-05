/* eslint-env node */
'use strict';

let REGEX_STRINGS = {
  ISSUE: {
    REGEX: 'FT-[0-9]+([\\s]?[:-]\\s?)?',
    helpString: 'FT-1234: A nice task title',
    IGNORE: 'RELEASE: '
  }
};

module.exports = REGEX_STRINGS;
