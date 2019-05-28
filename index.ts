import * as fs from 'fs';
import { Classes } from './@types/Classes';

fs.readdir('test', (err, files) => {
  if (err) throw err;

  let file = files.map(e => e.split('.')[0]);
  let maps = new Map<string, Classes>();

  file.forEach(subfile => {
    let cl: Classes = new (require(`./test/${subfile}`).default)();
    maps.set(subfile, cl);
  })

  console.log(maps);
});