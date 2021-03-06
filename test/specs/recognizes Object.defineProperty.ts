// SEMI-AUTOGENERATED FILE, PLEASE ONLY EDIT INPUTS.
//
// REGENERATE OUTPUTS AND METADATA WITH `npm run update-specs`.

import {TestSpec} from '../../src/testing/test_spec';

export default {
  files: {
    'returned or assigned.js': `
      function f_ret() {
        return Object.defineProperty({}, 'a', { value: 1 });
      }
      let x_assigned = Object.defineProperty({}, 'a', { value: 1 });
    `,
    'readonlies.js': `
      function f(x) {
        Object.defineProperty(x, 'a', {
          value: 1
        });
        Object.defineProperty(x, 'b', {
          value: 1,
          writable: false
        });
        Object.defineProperty(x, 'c', {
          get: () => ({x: 1}),
        });
      }
    `,
    'writables.js': `
      function g(x) {
        Object.defineProperty(x, 'a', {
          value: '',
          writable: true
        });
        Object.defineProperty(x, 'b', {
          get: () => ({x: 1}),
          set: (v) => {}
        });
      }
    `,
    'properties.js': `
      function h(x) {
        Object.defineProperties(x, {
          'a': {
            value: 1
          },
          b: {
            writable: false
          }
        });
      }
    `
  },
  options: {
    differentiateComputedProperties: true
  },
  result: {
    files: {
      'returned or assigned.js': `
      function f_ret(): {readonly ['a']?: number} {
        return Object.defineProperty({}, 'a', { value: 1 });
      }
      let x_assigned: {readonly ['a']?: number} = Object.defineProperty({}, 'a', { value: 1 });
    `,
      'readonlies.js': `
      function f(x: {readonly ['a']?: number, readonly ['b']?: number, readonly ['c']?: {x: number}}): void {
        Object.defineProperty(x, 'a', {
          value: 1
        });
        Object.defineProperty(x, 'b', {
          value: 1,
          writable: false
        });
        Object.defineProperty(x, 'c', {
          get: () => ({x: 1}),
        });
      }
    `,
      'writables.js': `
      function g(x: {['a']?: string, ['b']?: {x: number}}): void {
        Object.defineProperty(x, 'a', {
          value: '',
          writable: true
        });
        Object.defineProperty(x, 'b', {
          get: () => ({x: 1}),
          set: (v) => {}
        });
      }
    `,
      'properties.js': `
      function h(x: {readonly b: any, readonly ['a']?: number}): void {
        Object.defineProperties(x, {
          'a': {
            value: 1
          },
          b: {
            writable: false
          }
        });
      }
    `
    },
    metadata: {
      inferencePasses: 2
    }
  }
} as TestSpec
