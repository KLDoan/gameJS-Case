class Sprite {
    constructor(positionX, positionY) {
        this.positionX = x
        this.positionY = y
    }
    draw() {
        ctx.fillRect(this.positionX, this.positionY, 100, 20)
        ctx.fillStyle = "red"
    }
    update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        x += vx;
        // y += vy;
        requestAnimationFrame(update)
        if (x >= canvas.width) {
            x = 0;
        }
        if (x < 0) {
            x = canvas.width
        }
    }
}
update()
var player = new Sprite()