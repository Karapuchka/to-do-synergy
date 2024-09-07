import fs from 'fs';

//typeOperation - тип операции, создание или полная замена файла.

export default (file, data, typeOperation) => {
    typeOperation = Boolean(typeOperation);
    if(typeof typeOperation != 'boolean'){
        return console.log("При создании или полном изменнии файла агрумент typeOperation должен быть булевого типа!"); 
    } else {
        fs.writeFile(`${fs.realpathSync('.')}/tasks/${file}.json`, data, (err)=>{
            if(err) return console.log("При выполнении запроса возникла ошибка: " + err);
        
            console.log((typeOperation) ? 'Задача создана!' : 'Задача полностью изменена!');
        });
    }
};