import fs from 'fs';

export default (title)=> fs.unlink(`${title}.json`, (err)=>{if(err) return console.log("При выполнении запроса возникла ошибка: " + err)});