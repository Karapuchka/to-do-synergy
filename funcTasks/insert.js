import fs from 'fs';
import getCurrentDate from '../funcSys/currentTime.js';
import getLog from '../funcSys/updateLog.js';

export default (file, tasksTitle, renameTitle, tasksText) => {
    try {
        if(fs.realpathSync(`./tasks/${tasksTitle}.json`)){
            fs.readFile(`${file}.json`, (err, data)=>{
                if(err){
                    getLog(`При изменении задачи \"${file}\" возникла ошибка ` + err);
                    return console.log(`При изменении задачи \"${file}\" возникла ошибка.`);
                };
                
                data= JSON.parse(data);
                data.title = renameTitle;
                data.text = tasksText;
                data.date = getCurrentDate();
        
                fs.writeFile(`${file}.json`, JSON.stringify(data), (err)=>{
                    if(err) {
                        getLog(`Возникла ошибка при редактировании задачи \"${file}\" ` + err);
                        return console.log("При выполнении запроса возникла ошибка: " + err);
                    };      
                });


                console.log(`${file}.json`);
                
                let newFilePath = fs.realpathSync('./tasks');
                
                fs.rename(`${file}.json`, `${newFilePath}/${renameTitle}.json`, (err)=>{
                    if(err) {
                        getLog(`Возникла ошибка при редактировании задачи \"${file}\" ` + err);
                        return console.log("При выполнении запроса возникла ошибка: " + err);
                    }
                })
                getLog(`Задача изменена \"${file}\"`);
                console.log('Задача уcпешно изменена!');
            });
        }
    } catch (error) {
        getLog('Попытка изменить несуществующую задачу');
        console.log("Такой задачи не существует!");
    }
};