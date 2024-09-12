export default function getCurrentDate(){
    let currentTime = new Date();

    let day = (currentTime.getDate() < 10) ? `0${currentTime.getDate()}` : `${currentTime.getDate()}`;
    let month = (currentTime.getMonth() + 1 < 10) ? `0${currentTime.getMonth() + 1}` : `${currentTime.getMonth() + 1}`;
    let hours = (currentTime.getHours() < 10) ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
    let minute = (currentTime.getMinutes() < 10) ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;
    let second = (currentTime.getSeconds() < 10) ? `0${currentTime.getSeconds()}` : `${currentTime.getSeconds()}`;

    return `${day}.${month}.${currentTime.getFullYear()} ${hours}:${minute}:${second}`;
}