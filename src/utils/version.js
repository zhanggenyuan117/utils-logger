
import fs from 'fs';
import path from 'path';

const v = fs.readFileSync(path.__dirname,'package.json')

console.log(v);