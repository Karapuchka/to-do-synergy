import fs from 'fs';
import getCurrentDate from '../funcSys/currentTime.js';
import getLog from '../funcSys/updateLog.js';

let newList = {
    'title': '',
    'description': '',
    'date': '',
    'listTask': '',
};

export default (file, title, description)=>{
    newList.title = title;
    newList.description = description;
    newList.date = getCurrentDate();

    fs.writeFile(`${file}.json`, JSON.stringify(newList), (err)=>{
        if(err) {
            getLog(`Возникла ошибка при создании списка \"${title}\" ` + err);
            return console.log("При выполнении запроса возникла ошибка: " + err);
        }

        getLog(`Создан список задач \"${title}\"`);
        console.log("Список задач успешно создан!");
    });
};