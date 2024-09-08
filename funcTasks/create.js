import fs from 'fs';

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
        if(err) return console.log("При выполнении запроса возникла ошибка: " + err);
    
        console.log('Задача создана!');
    });
};

function getCurrentDate(){
    let currentTime = new Date();

    let day = (currentTime.getDate() < 10) ? `0${currentTime.getDate()}` : `${currentTime.getDate()}`;
    let month = (currentTime.getMonth() + 1 < 10) ? `0${currentTime.getMonth() + 1}` : `${currentTime.getMonth() + 1}`;
    
    return `${day}.${month}.${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}