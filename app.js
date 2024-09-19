import funcTask from './funcTasks/index.js';
import funcList from './funcListTask/index.js';
import fs from 'fs';

const command = process.argv[2];
const title = process.argv[3], fileName = process.argv[3];
const text = process.argv[4], listName = process.argv[4], renameTitle = process.argv[4];
const renameText = process.argv[5];


/*  
    command - команда введенная пользователем
    title, fileName, renameTitle - название файла. fileName использовается для изменения списка задач. renameTitle используется для изменения именя файла с задачей.
    text, listName, renameText - текст файла. listName используется для изменения описания списка задач. renameText исползуется для изменения описания задачи.
*/

switch (command) {
    case 'create-task':
            funcTask.create(`${fs.realpathSync('.')}/tasks/${title}`, title, text);
        break;

    case 'update-task':
            funcTask.insert(`${fs.realpathSync('.')}/tasks/${title}`, title, renameTitle, renameText);
        break;

    case 'remove-task':
            funcTask.remove(title);
        break;

    case 'read-task':
            if(title == 'all'){
                funcTask.read(`all`);
            } else if (title == 'done'){
                funcTask.read(`done`);
            } else{
                funcTask.read(`${fs.realpathSync('.')}/tasks/${title}`);
            }
        break;

    case 'done-task':
            funcTask.done(title, text);
        break;
    
    case 'create-list': 
            funcList.create(`${fs.realpathSync('.')}/listsTasks/${title}`, title, text)
        break;

    case 'update-list':
            funcList.insert(fileName, listName);
        break;

    case 'read-list':
            funcList.read((title != 'all') ? `${fs.realpathSync('.')}/listsTasks/${title}` : 'all');
        break;

    case 'remove-list':
            funcList.remove(title);
        break;    

    default:
        console.log("Указанная некорректная команда! Список доступных комнад:");
        console.log("1. node app.js create (название файла) (название задачи) (текст задачи)");
        
        break;
}