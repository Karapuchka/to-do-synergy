export default function getCurrentDate(){
    let currentTime = new Date();

    let day = (currentTime.getDate() < 10) ? `0${currentTime.getDate()}` : `${currentTime.getDate()}`;
    let month = (currentTime.getMonth() + 1 < 10) ? `0${currentTime.getMonth() + 1}` : `${currentTime.getMonth() + 1}`;
    
    return `${day}.${month}.${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}