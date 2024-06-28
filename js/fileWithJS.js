function showTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(showTime, 1000);
window.onload = function () {
    showTime();
    document.getElementById('likeCount').innerHTML = localStorage.getItem('likeCount');
    document.getElementById('dislikeCount').innerHTML = localStorage.getItem('dislikeCount');
}

function addLike() {
    let likeCount = localStorage.getItem('likeCount');
    if (likeCount) {
        likeCount = Number(likeCount) + 1;
    } else {
        likeCount = 1;
    }
    localStorage.setItem('likeCount', likeCount);
    document.getElementById('likeCount').innerHTML = likeCount;
}

function addDisLike() {
    let dislikeCount = localStorage.getItem('dislikeCount');
    if (dislikeCount) {
        dislikeCount = Number(dislikeCount) + 1;
    } else {
        dislikeCount = 1;
    }
    localStorage.setItem('dislikeCount', dislikeCount);
    document.getElementById('dislikeCount').innerHTML = dislikeCount;
}