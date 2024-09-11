import funcTask from './funcTasks/index.js';
import funcList from './funcListTask/index.js';
import fs from 'fs';

const command = process.argv[2];
const title = process.argv[3], fileName = process.argv[3];
const text = process.argv[4], listName = process.argv[4];


switch (command) {
    case 'create-task':
            funcTask.create(`${fs.realpathSync('.')}/tasks/${title}`, title, text);
        break;

    case 'update-task':
            funcTask.create(`${fs.realpathSync('.')}/tasks/${title}`, title, text);
        break;

    case 'remove-task':
            funcTask.create(`${fs.realpathSync('.')}/tasks/${title}`);
        break;

    case 'read-task':
            funcTask.create(`${fs.realpathSync('.')}/tasks/${title}`);
        break;
    
    case 'create-list': 
            funcList.create(`${fs.realpathSync('.')}/listsTasks/${title}`, title, text)
        break;

    case 'update-list':
        funcList.insert(fileName, listName);
        break;
    default:
        console.log("Указанная некорректная команда! Список доступных комнад:");
        console.log("1. node app.js create (название файла) (название задачи) (текст задачи)");
        
        break;
}