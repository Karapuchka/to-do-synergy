import fs from 'fs';

let newList = {
    'title': '',
    'description': '',
    'date': '',
};

export default (file, title, description)=>{

    newList.title = title;
    newList.description = description;
    newList.date = getCurrentDate();

    fs.writeFile(`${file}`, JSON.stringify(newList), (err)=>{
        if(err) return console.log("При выполнении запроса возникла ошибка: " + err);
    });

    console.log("Список задач успешно создан!");
};

function getCurrentDate(){
    let currentTime = new Date();

    let day = (currentTime.getDate() < 10) ? `0${currentTime.getDate()}` : `${currentTime.getDate()}`;
    let month = (currentTime.getMonth() + 1 < 10) ? `0${currentTime.getMonth() + 1}` : `${currentTime.getMonth() + 1}`;
    
    return `${day}.${month}.${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}