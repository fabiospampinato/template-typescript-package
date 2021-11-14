
/* IMPORT */

const {default: {{_ "camelCase" name}} = require ( '../dist' );
const benchmark = require ( 'benchloop' );

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
