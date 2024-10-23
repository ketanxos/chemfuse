const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const starCount = 1000;
const planet = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  angle: 0,
};

function createStars() {
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
    });
  }
}

function drawStars() {
  ctx.fillStyle = "white";
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPlanet() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
  ctx.fill();
}

function updatePlanet() {
  planet.angle += 0.01;
  planet.x = canvas.width / 2 + 100 * Math.cos(planet.angle);
  planet.y = canvas.height / 2 + 100 * Math.sin(planet.angle);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStars();
  updatePlanet();
  drawPlanet();

  requestAnimationFrame(animate);
}

createStars();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  createStars();
});
