
var canvas, ctx, mousePos;

var balls = [];

window.onload = function init() {
  canvas = document.querySelector('#myCanvas');
  ctx = canvas.getContext("2d");
  canvas.addEventListener("mousemove", (event) => {
    var rect = canvas.getBoundingClientRect();
    mousePos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  })
  balls = createShape(2);

  animateCanvas();
}

function animateCanvas() {

  ctx.clearRect(0,0,canvas.width, canvas.height)
  
  drawShape(balls);
  moveBall(balls);  

  requestAnimationFrame(animateCanvas);

}
