import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

let pathDirList; // Путь к директории listTasks
let listTasks; // Список задач текущего листа

export default (title)=>{
    if(title == 'all'){
        pathDirList = fs.readdirSync(`${fs.realpathSync('.')}/listsTasks`);
        
        for (let i = 0; i < pathDirList.length; i++) {
            fs.readFile(`${fs.realpathSync('.')}/listsTasks/${pathDirList[i]}`, (err, data)=>{
                if(err) {
                    getLog(`При чтении списка ${pathDirList[i]} возникла ошибка: ` + err);
                    return console.log("При выполнении запроса возникла ошибка: " + err);
                };

                data = JSON.parse(data);

                pathDirList = fs.readdirSync(`${fs.realpathSync('.')}/listsTasks`);

                listTasks = data.listTask.split(',');

                console.log(`__________\n\nНазвание списка: ${data.title}\nОписание: ${data.description}`);         
            });
        }
    } else {

/* 
        Доделать вывод списка с закрепленныйми за ним задачами
         */
    }
};