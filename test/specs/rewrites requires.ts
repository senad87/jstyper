// SEMI-AUTOGENERATED FILE, PLEASE ONLY EDIT INPUTS.
//
// REGENERATE OUTPUTS AND METADATA WITH `npm run update-specs`.

import {TestSpec} from '../../src/testing/test_spec';

export default {
  files: {
    'foo.js': `
      var x = require('./bar').x;
      var x1 = require('./bar').x;

      var bar = require('./bar');
      var barx = bar.x;

      var bar2 = require('./bar');
      var bar2x = bar2.x;

      var bar3 = require('./bar'),
          bar3x = bar3.x,
          bar3y = bar3.y;
    `,
    'bar.js': `
      module.exports = { x: 1, y: 2 };
    `
  },
  options: {},
  result: {
    files: {
      'foo.js': `
      var x = require('./bar').x;
      var x1 = require('./bar').x;

      import * as bar from './bar';
      var barx = bar.x;

      import * as bar2 from './bar';
      var bar2x = bar2.x;

      var bar3: {readonly x: any, readonly y: any} = require('./bar'),
          bar3x = bar3.x,
          bar3y = bar3.y;
    `,
      'bar.js': `
      export default { x: 1, y: 2 };
    `
    },
    metadata: {
      inferencePasses: 2
    }
  }
} as TestSpec
