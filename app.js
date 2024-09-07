import fileActions from './fileActions/index.js';
import fs from 'fs';

const command = process.argv[0];
const file = process.argv[1];
const data = process.argv[2];
const typeOperataion = process.argv[3];

switch (command) {
    case 'create':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`, data, typeOperataion);
        break;

    case 'update':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`, data);
        break;

    case 'remove':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`);
        break;

    case 'read':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`);
        break;
    default:
        console.log("Указанная некорректная команда! Список доступных комнад:");
        console.log("node app.js create (название файла) (текст задачи)");
        
        break;
}