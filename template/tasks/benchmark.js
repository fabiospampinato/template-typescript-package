
/* IMPORT */

import benchmark from 'benchloop';
import {{_ "camelCase" name}} from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100,
  log: 'compact'
});

benchmark ({
  name: '{{name}}',
  fn: () => {
    //TODO
  }
});

benchmark.summary ();
