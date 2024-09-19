import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

let pathDirList; // Путь к директории listTasks
let patDirTasks; // Путь к директории tasks

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

            });
        }
    } else {
        pathDirList = fs.readdirSync(`${fs.realpathSync('.')}/listsTasks`);
        patDirTasks = fs.readdirSync(`${fs.realpathSync('.')}/tasks`);        

        fs.readFile(`${title}.json`, (err, data)=>{
            if(err) {
                getLog(`При чтении списка ${title} возникла ошибка: ` + err);
                return console.log("При выполнении запроса возникла ошибка: " + err);
            };

            data = JSON.parse(data);

            console.log(`\n\nНазвание списка: ${data.title}\nОписание: ${data.description}`);

            let listCurrentTasks = data.listTask.split(',');

            for (let j = 0; j < patDirTasks.length; j++) {
                
                fs.readFile(`${fs.realpathSync('.')}/tasks/${patDirTasks[j]}`, (errTask, dataTask)=>{
                    if(err) {
                        getLog(`При задачи ${patDirTask[j]} возникла ошибка: ` + errTask);
                        return console.log("При выполнении запроса возникла ошибка: " + errTask);
                    }

                    dataTask = JSON.parse(dataTask);
                    
                    for (let i = 0; i < listCurrentTasks.length; i++) {
                        
                        if(listCurrentTasks[i] == dataTask.title){
                            console.log(`\n\nНазвание задачи: ${dataTask.title}\nОписание: ${dataTask.text}\nСтатус: ${dataTask.status}`);
                        }
                    }     
                });                    
            }

            getLog(`Вывод списка задач ${title}`);
        });
    }
};