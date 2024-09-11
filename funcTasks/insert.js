import fs from 'fs';
import getCurrentDate from '../funcSys/currentTime.js';
import getLog from '../funcSys/updateLog.js';

export default (title, tasksTitle, tasksText) => {

    fs.readFile(fs.realpathSync(`./tasks/${title}.json`), (err, data)=>{
        if(err){
            getLog(`При изменении задачи \"${title}\" возникла ошибка ` + err);
            return console.log(`При изменении задачи \"${title}\" возникла ошибка.`);
        };

        let newTask = JSON.parse(data);
        data.title = tasksTitle;
        data.text = tasksText;
        data.date = getCurrentDate();

        fs.writeFile(`${title}.json`, JSON.stringify(data), {flag:"a"}, (err)=>{
            if(err) {
                getLog(`Возникла ошибка при редактировании задачи \"${title}\" ` + err);
                return console.log("При выполнении запроса возникла ошибка: " + err);
            };
            
/* 
Доделать изменение задачи


             */
            fs.renameSync(`${fs.realpathSync(`./tasks/${title}.json`)}`, `${fs.realpathSync(`./tasks/${tasksTitle}.json`)}`)
            console.log('Задача уcпешно изменена!');
        })
    });
};