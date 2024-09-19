import fs from 'fs';
import getLog from '../funcSys/updateLog.js';

export default (title)=>{
    try {
        fs.unlink(`${fs.realpathSync('.')}/listsTasks/${title}.json`, (err)=>{
            if(err) {
                getLog(`Во время удаления списка \"${title}\" произошла ошибка: ` + err);
                return console.log(`Во время удаления списка \"${title}\" произошла ошибка: ` + err);
            }

            console.log(`Список \"${title}\" удалён`);
        });
    } catch (error) {
        console.log(`Списка \"${title}\" не существует!`);
    }
};