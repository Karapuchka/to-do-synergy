import fs from 'fs';
import getCurrentDate from '../funcSys/currentTime.js';
import getLog from '../funcSys/updateLog.js';

let newTask = {
    'title': '',
    'text': '',
    'date': '',
    'status': '',
};

export default (file, title, text) => {
    newTask.title = title;
    newTask.text = text;
    newTask.date = getCurrentDate();
    newTask.status = "false";
    
    fs.writeFile(`${file}.json`, JSON.stringify(newTask), (err)=>{
        if(err) {
            getLog(`Возникла ошибка при создании задачи \"${title}\" ` + err);
            return console.log("При выполнении запроса возникла ошибка. Проверьте правильность введённых данных.");
        }
        getLog(`Создана задача \"${title}\"`)
    
        console.log('Задача создана!');
    });
};