import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

export default (title, status)=>{

    fs.readFile(`${fs.realpathSync('.')}/tasks/${title}.json`, (err, data)=>{
        if(err) {
            getLog(`Во время выполнения запроса возникла ошибка: ` + err);
            return console.log(`Во время выполнения запроса возникла ошибка: ` + err);
        }

        data = JSON.parse(data);

        data.status = status;

        fs.writeFile(`${fs.realpathSync('.')}/tasks/${title}.json`, JSON.stringify(data), (errWrite)=>{
            if(errWrite) {
                getLog(`Во время выполнения запроса возникла ошибка: ` + errWrite);
                return console.log(`Во время выполнения запроса возникла ошибка: ` + errWrite);
            }
        });

        getLog(`Был изменён статус задачи ${title}.`);
        console.log(`Был изменён статус задачи ${title}.`);
    });
};