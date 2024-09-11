import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

export default (taskName, listName)=>{

    try {
        if(fs.readFileSync(`./tasks/${taskName}.json`) && fs.realpathSync(`./listsTasks/${listName}.json`)){
            fs.readFile(fs.realpathSync(`./listsTasks/${listName}.json`), (err, data)=>{
                if(err) {
                    getLog(`При добавлении задачи \"${taskName}\ в список \"${listName}\ возникла ошибка: ` + err);
                    return console.log("При добавлении задачи  в список возникла ошибка! Проверьте корректность введённых данных и повторите снова.");
                };

                data = JSON.parse(data);
                
                let newList = data.listTask.split(',');

                for (let i = 0; i < newList.length; i++) {
                    if(newList[i] == `./tasks/${taskName}.json`){
                        getLog(`Попытка повторно добавить задачу \"${taskName}\ в список \"${listName}\.`);
                        return console.log("Эта задача уже добавлена в этот список.");
                    }                   
                }
                newList.push(`./tasks/${taskName}.json`);
                data.listTask = newList.join();

                fs.writeFile(fs.realpathSync(`./listsTasks/${listName}.json`), JSON.stringify(data), (err)=>{
                    if(err) {
                        getLog(`При добавлении задачи \"${taskName}\ в список \"${listName}\ возникла ошибка: ` + err);
                        return console.log("При добавлении задачи  в список возникла ошибка! Проверьте корректность введённых данных и повторите снова.");
                    }
                    
                    getLog(`Задача \"${taskName}\ добавлена в список  \"${listName}\!`);

                });
                
            });
        };
    } catch (error) {
        console.log("Такой задачи или списка задач не существует!");
    }
};