function showTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clockElement.textContent= `${hours}:${minutes}:${seconds}`;
}
setInterval(showTime, 1000);
showTime();