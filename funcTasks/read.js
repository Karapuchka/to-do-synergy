import fs from 'fs';

export default (file)=> {
    
    fs.readFile(`${file}.json`, (err, data)=>{
        if(err) return console.log("При выполнении запроса возникла ошибка: " + err);

        console.log(data);
    });
};