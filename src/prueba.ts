import 'dotenv/config';
import { join, resolve } from 'node:path';
import fs from 'node:fs';

const x: string = 'hola';
console.log(x);

console.log(process.env.NODE_ENV);
console.log(process.env.PASSWORD);

console.log('resolve: ', resolve());

const dataPath = resolve('../data');
const filename = join(dataPath, 'prueba.txt');
fs.writeFile(filename, 'hola mundo'),
    (err) => { if (err){

    }
        console.log('prueba');
    });
    
fs.readFile(filename, { encoding = 'utf-8' }, (error, data) => {
    console.log(data);
});
