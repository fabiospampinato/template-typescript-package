
/* IMPORT */

import fs from 'node:fs/promises';
import path from 'node:path';

/* MAIN */

const postinstall = async variables => {

  if ( !variables.benchmarked ) {

    await fs.rm ( path.join ( process.cwd (), 'tasks' ), { recursive: true } );

  }

  if ( !variables.tested ) {

    await fs.rm ( path.join ( process.cwd (), 'test' ), { recursive: true } );

  }

};

/* EXPORT */

export default postinstall;
