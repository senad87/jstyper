// SEMI-AUTOGENERATED FILE, PLEASE ONLY EDIT INPUTS.
//
// REGENERATE OUTPUTS AND METADATA WITH `npm run update-specs`.

import {TestSpec} from '../../src/testing/test_spec';

export default {
  files: {
    'input.js': `
      var x = 1;
      x.y.z();
      
      function f(x) {
        return x == 2;
      }
      
      class Foo {
        x: string = '';
        constructor(x) {
          x.a();
        }
        foo(x) {
          x.b();
        }
        get y() {
          return 1;
        }
        set y(v) {
          this.x = v == 1 ? 2 : 3;
        }
      }
          
          
    `
  },
  options: {
    declarations: true
  },
  result: {
    files: {
      'input.d.ts': `
declare var x: number | ({readonly y: {z(): void}});


declare function f(x: number): boolean ;

declare class Foo {
  x: string;
  constructor(x: {a(): void}) ;
  foo(x: {b(): void}): void ;
  get y() ;
  set y(v) ;
}


`
    },
    metadata: {
      inferencePasses: 2
    }
  }
} as TestSpec
