class Bullet {
    // chon mau random tu array color
    colors = [
        "red",
        "blue",
        "red",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "grey",
    ];
    // class bullet constructors 
    constructor(x, y, speed, damage) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "red";
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        //sound

        this.shootSound = new Audio("sounds_shoot.wav");
        this.shootSound.volume = 0.1;

    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(sprite) {
        if (
            this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y
        ) {
            sprite.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}
// control bullet flow 
class BulletController {
    bullets = [];
    timerTillNextBullet = 0;

    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay) {
        if (this.timerTillNextBullet <= 0) {
            this.bullets.push(new Bullet(x, y, speed, damage));

            this.timerTillNextBullet = delay;
        }
        //
        // if (this.soundEnabled) {
        //     this.shootSound.currentTime = 0;
        //     this.shootSound.play();
        // }
        //

        this.timerTillNextBullet--;
    }

    draw(ctx) {
        this.bullets.forEach((bullet) => {
            if (this.isBulletOffScreen(bullet)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            bullet.draw(ctx);
        });
    }

    collideWith(sprite) {
        return this.bullets.some((bullet) => {
            if (bullet.collideWith(sprite)) {
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            return false;
        });
    }

    isBulletOffScreen(bullet) {
        return bullet.y <= -bullet.height;
    }
}
