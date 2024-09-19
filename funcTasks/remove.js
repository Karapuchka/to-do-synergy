import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

let arrList;

export default (title)=>{
    try {
        arrList = fs.readdirSync(`${fs.realpathSync('.')}/listsTasks`);

        for (let i = 0; i < arrList.length; i++) {
            fs.readFile(`${fs.realpathSync('.')}/listsTasks/${arrList[i]}`, (err, data)=>{
                if(err) {
                    getLog(`Во время удаления задачи \"${title}\" произошла ошибка: ` + err);
                    return console.log(`Во время выполнения запроса произошла ошибка: ` + err);
                }

                data = JSON.parse(data);

                let arrTasks = data.listTask.split(',');
                
                for (let j = 0; j < arrTasks.length; j++) {
                    
                    if(arrTasks[j] == title){
                        arrTasks[j] = '';                        
                        break;
                    }                   
                }
                
                data.listTask = arrTasks.join('');
                
                fs.writeFile(`${fs.realpathSync('.')}/listsTasks/${arrList[i]}`, JSON.stringify(data), (err)=>{
                    if(err) {
                        getLog(`Во время удаления задачи \"${title}\" произошла ошибка: ` + err);
                        return console.log(`Во время выполнения запроса произошла ошибка: ` + err);
                    }
                });
            });         
        }
        
        
        fs.unlink(`${fs.realpathSync('.')}/tasks/${title}.json`, (err)=>{
            if(err) {
                getLog(`Во время удаления задачи \"${title}\" произошла ошибка: ` + err);
                return console.log(`Во время удаления задачи \"${title}\" произошла ошибка: ` + err);
            }

            getLog(`Задача \"${title}\" удалёна!`);
            console.log(`Задача \"${title}\" удалёна!`);
        });
    } catch (error) {
        console.log(`Задача \"${title}\" не существует!`);
    }
};