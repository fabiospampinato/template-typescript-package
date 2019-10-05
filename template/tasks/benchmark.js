
/* IMPORT */

const {default: {{_ "camelCase" name}}} = require ( '../dist' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

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
