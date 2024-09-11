import fs from 'fs';
import getCurrentDate from './currentTime.js';

export default function getLog(data){

    let content = `${getCurrentDate()} | ${data}\n`;

    fs.writeFile(`${fs.realpathSync('./logs/log.txt')}`, content, {flag:"a"}, (err)=>{
        if(err) return console.log(err);
    });
};