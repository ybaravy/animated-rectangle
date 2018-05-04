class Ball {
  constructor(radius, x,y, speedX, speedY){
    this.radius = radius;
    this.color = 'grey',
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y)
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
  }

  move(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
