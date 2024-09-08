import fileActions from './funcTasks/index.js';
import fs from 'fs';

const command = process.argv[2];
const file = process.argv[3];
const title = process.argv[4];
const text = process.argv[5];

switch (command) {
    case 'create':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`, title, text);
        break;

    case 'update':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`, title);
        break;

    case 'remove':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`);
        break;

    case 'read':
            fileActions.create(`${fs.realpathSync('.')}/tasks/${file}`);
        break;
    default:
        console.log("Указанная некорректная команда! Список доступных комнад:");
        console.log("1. node app.js create (название файла) (название задачи) (текст задачи)");
        
        break;
}