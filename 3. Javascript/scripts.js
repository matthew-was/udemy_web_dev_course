var calcTime = Math.random() * 3000;
var clickTime = 0;
var createTime = 0;
var reactionTime;
var topPos = 0;
var color = '#';
var i;
 
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    color = '#';
    for (i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 17)];
    }
    return color;
}

function makeBox() {
    setTimeout(function () {
        document.getElementById("box").style.backgroundColor = getRandomColor();
        if (Math.random() < 0.5) {
            document.getElementById("box").style.borderRadius = "100px";
        } else {
            document.getElementById("box").style.borderRadius = "0";
        }
        topPos = Math.random() * window.innerHeight - 250;
        document.getElementById("box").style.top = (Math.random() * (window.innerHeight - 255)) + "px";
        document.getElementById("box").style.left = (Math.random() * (window.innerWidth - 215)) + "px";
        document.getElementById("box").style.display = "block";
        createTime = Date.now();
    }, calcTime);
}

document.getElementById("ready").onclick = function () {
    this.style.display = "none";
    makeBox();
};

document.getElementById("box").onclick = function () {
    clickTime = Date.now();

    reactionTime = (clickTime - createTime) / 1000;
    document.getElementById("time").innerHTML = reactionTime;

    this.style.display = "none";
    makeBox();
};