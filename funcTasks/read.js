import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

let pathDir; // Путь к директории tasks

export default (title)=> {
    if(title == 'all'){

        pathDir = fs.readdirSync(`${fs.realpathSync('.')}/tasks`);

        for (let i = 0; i < pathDir.length; i++) {
            fs.readFile(`${fs.realpathSync('.')}/tasks/${pathDir[i]}`, (err, data)=>{
                if(err) {
                    getLog(`При чтении задачи ${pathDir[i]} возникла ошибка: ` + err);
                    return console.log("При выполнении запроса возникла ошибка: " + err);
                };
                data = JSON.parse(data);
         
                return console.log(`\nНазвание задачи: ${data.title}\nТекст: ${data.text}\nСтатус: ${(Boolean(data.status)) ? 'Выполнено' : 'Не выполнено'} \n`);
            });
        }
    } else {
        fs.readFile(`${title}.json`, (err, data)=>{
            if(err) {
                getLog(`При чтении задачи ${title}.json возникла ошибка: ` + err);
                return console.log("При выполнении запроса возникла ошибка: " + err);
            };
            data = JSON.parse(data);
     
            return console.log(`\nНазвание задачи: ${data.title}\nТекст: ${data.text}\nСтатус: ${(Boolean(data.status)) ? 'Выполнено' : 'Не выполнено'} \n`);
        });
    }
};