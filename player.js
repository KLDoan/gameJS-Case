class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        const image = new Image()
        image.src = "img game/player.png"
        this.image = image

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }
    

    draw(ctx) {
        this.move();
        ctx.strokeStyle = "yellow";
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // ctx.drawImage()
        this.shoot(this.image, this.x, this.y);
    }
    //ham ban dan
    shoot() {
        if (this.shootPressed) {
            const speed = 7;
            const delay = 10;
            const damage = 1;
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
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
        // dieu kien de player dap vao man hinh
        if (this.x >= canvas.width) {
            this.x = 0;
        }
        if (this.x + this.width < 0) {
            this.x = canvas.width
        }
        if (this.y >= canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height
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
        if (e.code === "Space") {
            this.shootPressed = true;
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
        if (e.code === "Space") {
            this.shootPressed = false;
        }
    };
}
