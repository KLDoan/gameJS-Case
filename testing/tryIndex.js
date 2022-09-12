const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
ctx.canvas
canvas.width = 1000;
canvas.height = 600;
let x = canvas.width / 2;
let y = canvas.height / 1.1;
let vx = 0;
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vx;
    // y += vy;
    ctx.fillRect(x, y, 100, 20)//player
    requestAnimationFrame(update)
    if (x >= canvas.width) {
        x = 0;
    }
    if (x < 0) {
        x = canvas.width
    }
    //enemy
    ctx.fillRect(100, 100, 50, 50)
    ctx.fillRect(200, 100, 50, 50)
    ctx.fillRect(400, 100, 50, 50)
    ctx.fillRect(500, 100, 50, 50)
    ctx.fillRect(600, 100, 50, 50)
    ctx.fillRect(700, 100, 50, 50)
    ctx.fillRect(800, 100, 50, 50)
    ctx.fillRect(300, 100, 50, 50)

}
update()
class Bullet {
    constructor() {
        this.x = 1;
        this.y = 2;
        this.bulletWidth = 10;
        this.bulletHeight = 10;


    }
    drawBullet() {
        ctx.fillStyle = "blue"
        ctx.fillRect(10, 10, 10, 10)
    }
}
let bullet = new Bullet()
bullet.drawBullet()