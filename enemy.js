class Enemy {
  constructor(x, y, color, health) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
    this.width = 50;
    this.height = 50;


    const enemyImg1 = new Image()
    enemyImg1.src = "img game/enemy1.png"
    this.image1 = enemyImg1

    //
    const enemyImg2 = new Image()
    enemyImg2.src = "img game/enemy2.png"
    this.image2 = enemyImg1

    //
    const enemyImg3 = new Image()
    enemyImg3.src = "img game/enemy3.png"
    this.image3 = enemyImg1

  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    if (this.health > 1 && this.health < 100) {
      ctx.strokeStyle = "white";
    }
    else {
      ctx.strokeStyle = this.color;

    }


    // ctx.fillRect(this.x, this.y, this.width, this.height);
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
    //Draw Text
    ctx.fillStyle = "white";
    ctx.font = "25px Arial";
    ctx.fillText(
      this.health,
      this.x + this.width / 3.5,
      this.y + this.height / 1.5
    );
  }

  takeDamage(damage) {
    this.health -= damage;
  }
}
// class bosses
// class Bosses {
//   constructor(x, y, color) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.health = 300;
//     this.width = 300;
//     this.height = 300;
//   }

//   draw(ctx) {
//     ctx.fillStyle = this.color;
//     if (this.health > 1 && this.health < 100) {
//       ctx.strokeStyle = "white";
//     }
//     if (this.health >= 200) {
//       ctx.strokeStyle = "yellow";
//     }
//     if (this.health >= 100) {
//       ctx.strokeStyle = "red";
//     } else {
//       ctx.strokeStyle = this.color;
//     }

//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     ctx.strokeRect(this.x, this.y, this.width, this.height);

//     //Draw Text
//     ctx.fillStyle = "black";
//     ctx.font = "25px Arial";
//     ctx.fillText(
//       this.health,
//       this.x + this.width / 3.5,
//       this.y + this.height / 1.5
//     );
//   }

//   takeDamage(damage) {
//     this.health -= damage;
//   }
// }

