import * as THREE from "./three.js";

const canvas = document.getElementById("background");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const stars = new Float32Array(5000);
function randomInSphere(array, radius) {
  for (let i = 0; i < array.length; i += 3) {
    let x, y, z;
    do {
      x = (Math.random() * 2 - 1) * radius;
      y = (Math.random() * 2 - 1) * radius;
      z = (Math.random() * 2 - 1) * radius;
    } while (x * x + y * y + z * z > radius * radius);
    array[i] = x;
    array[i + 1] = y;
    array[i + 2] = z;
  }
}
randomInSphere(stars, 5);

const pointsGeometry = new THREE.BufferGeometry();
pointsGeometry.setAttribute("position", new THREE.BufferAttribute(stars, 3));

const pointsMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.002,
  sizeAttenuation: true,
  transparent: true,
  depthWrite: false,
});

const starField = new THREE.Points(pointsGeometry, pointsMaterial);
starField.rotation.z = Math.PI / 4;
scene.add(starField);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  starField.rotation.x -= 0.001;
  starField.rotation.y -= 0.0015;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
