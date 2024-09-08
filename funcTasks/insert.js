import fs from 'fs';

export default (file, tasksTitle, tasksText) => {
    let content = JSON.parse(data);

    fs.writeFile(`${file}.json`, content, {flag:"a"}, (err)=>{
    if(err) return console.log("При выполнении запроса возникла ошибка: " + err);
    
    console.log('Задача уcпешно изменена!');
})};