
/* IMPORT */

import benchmark from 'benchloop';
import {{_.camelCase ( name )}} from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 100
});

benchmark ({
  name: '{{name}}',
  fn: () => {
    //TODO
  }
});

benchmark.summary ();
