import fs from 'fs';

export default (title)=> {
    
    fs.readFile(`${title}.json`, (err, data)=>{
        if(err) return console.log("При выполнении запроса возникла ошибка: " + err);

        console.log(data);
    });
};