import fs from 'fs';

export default (file)=> fs.unlink(`${fs.realpathSync('.')}/tasks/${file}`, (err)=>{if(err) return console.log("При выполнении запроса возникла ошибка: " + err)});