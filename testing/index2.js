class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener("keydown", this.keydown)
        document.addEventListener("keydup", this.keyup)
    }

    draw(ctx) {
        this.move();
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "white"
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
        if (this.leftPressed) {
            this.x -= this.speed
        };
        if (this.rightPressed) {
            this.x += this.speed
        };
        if (this.upPressed) {
            this.y -= this.speed
        };
        if (this.downPressed) {
            this.y += this.speed
        }
    }
    keydown = (e) => {
        if (e.code == "KeyA") {
            this.leftPressed = true
        };
        if (e.code == "KeyD") {
            this.rightPressed = true
        };
        if (e.code == "KeyW") {
            this.upPressed = true
        };
        if (e.code == "KeyS") {
            this.downPressed = true
        }
    };
    keyup = (e) => {
        if (e.code == "KeyA") {
            this.leftPressed = false
        };
        if (e.code == "KeyD") {
            this.rightPressed = false
        };
        if (e.code == "KeyW") {
            this.upPressed = false
        };
        if (e.code == "KeyS") {
            this.downPressed = false
        }
    };
}
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const player = new Player(canvas.width / 2, canvas.height / 1.2);
function gameloop() {
    setCommonStyle();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw(ctx)

}
function setCommonStyle() {
    ctx.shadowColor = "yellow"
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel"
    ctx.lineWidth = 7

}
setInterval(gameloop, 1000 / 60)
