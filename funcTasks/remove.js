import fs from 'fs';

export default (file)=> fs.unlink(`${file}.json`, (err)=>{if(err) return console.log("При выполнении запроса возникла ошибка: " + err)});