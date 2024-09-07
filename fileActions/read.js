import fs from 'fs';

export default (file)=> {
    let path = `${fs.realpathSync('.')}/tasks/${file}`;
    
    fs.readFile(path, (err, data)=>{
    if(err) return console.log("При выполнении запроса возникла ошибка: " + err);

    console.log(data);
})};