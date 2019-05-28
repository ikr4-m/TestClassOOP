import * as fs from 'fs';
import { Classes } from './@types/Classes';

fs.readdir('test', (err, files) => {
  if (err) throw err;

  let file = files.map(e => e.split('.')[0]);

  file.forEach(subfile => {
    let cl: Classes = new (require(`./test/${subfile}`).default)();
    console.log(`Classes [${subfile}]`);
    // Execute function
    cl.run('reeee');
    // Output help
    console.log(cl.help);
  })
})