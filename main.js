const c = document.getElementById("board");
const ctx = c.getContext("2d");
const width = 600;
const height = 600;

const horse = new Horse();

function updateBoard() {
    const backgroundColor = "#ffffff";
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    horse.update(ctx);
}

function init() {
    setInterval(function() {
        updateBoard();
    }, 1000 / 32);
}

init();

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.key !== undefined) {
        horse.onKeyDown(event.key);
    }
}, true);

window.addEventListener("keyup", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.key !== undefined) {
        horse.onKeyUp(event.key);
    }
}, true);