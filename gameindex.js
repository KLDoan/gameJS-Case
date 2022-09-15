
//pause game
let isPause = false;

function pauseGame() {
    clearInterval(run_game);
    isPause = true;
    canvas.style.opacity = 0.5;
    ctx.font = "90px tahoma"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Game Paused", 275, 250)
}
//resume game
function resumeGame() {
    isPause = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.style.opacity = 1
    run_game = setInterval(gameLoop, 1000 / 60)
}

//end pause game, resume game


//canvas and game part
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

document.addEventListener("keyup", function (e) {
    if (e.code == "KeyP") {
        if (isPause) resumeGame();
        else pauseGame();

    }

})

const bulletController = new BulletController(canvas);
const player = new Player(
    canvas.width / 2.2,
    canvas.height / 1.3,
    bulletController
);

const enemies = [
    new Enemy(50, 20, "green", Math.floor(Math.random() * 100) + 1),
    new Enemy(150, 20, "red", Math.floor(Math.random() * 100) + 1),
    new Enemy(250, 20, "gold", Math.floor(Math.random() * 100) + 1),
    new Enemy(350, 20, "green", Math.floor(Math.random() * 100) + 1),
    new Enemy(450, 20, "gold", Math.floor(Math.random() * 100) + 1),
    new Enemy(50, 100, "green", Math.floor(Math.random() * 100) + 1),
    new Enemy(150, 100, "red", Math.floor(Math.random() * 100) + 1),
    new Enemy(250, 100, "gold", Math.floor(Math.random() * 100) + 1),
    new Enemy(350, 100, "green", Math.floor(Math.random() * 100) + 1),
    new Enemy(450, 100, "gold", Math.floor(Math.random() * 100) + 1),
];


// const boss = new Bosses(200, 200, "Blue")
const sound = new Array();
//background
const background = new Image()
background.src = "img game/black-galaxy-granite.jpg"
//end bg
function gameLoop() {
    setCommonStyle();
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    bulletController.draw(ctx);
    player.draw(ctx);
    enemies.forEach((enemy) => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
            }
        } else {
            enemy.draw(ctx);
        }
    });
    // boss.draw()
}
function setCommonStyle() {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}

var run_game = setInterval(gameLoop, 1000 / 60);


//game done