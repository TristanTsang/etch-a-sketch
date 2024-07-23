const WIDTH = 960;
let numRows = 16; // # of squares per side
const GAP_SIZE = 2.5;
let divSize = WIDTH / numRows - GAP_SIZE;
const container = document.querySelector(".etch-a-sketch-container");
const resetButton = document.querySelector(".reset");
const changePixelCountButton = document.querySelector(".pixel-count");
resetButton.addEventListener("click", () => start());
changePixelCountButton.addEventListener("click", () => changePixelCount());

function row() {
  const row = document.createElement("div");
  row.classList.add("etch-a-sketch-row");
  for (let i = 0; i < numRows; i++) {
    row.appendChild(pixel());
  }

  return row;
}

function pixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.setAttribute(
    "style",
    "height: " + divSize + "px; width:" + divSize + "px;"
  );
  pixel.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
  });
  return pixel;
}

function start() {
  container.innerHTML = "";
  divSize = WIDTH / numRows - GAP_SIZE;
  for (let i = 0; i < numRows; i++) {
    container.appendChild(row());
  }
}

function changePixelCount() {
  let n = prompt("Enter pixel count per side (max 100)");
  if (n > 100) n = 100;
  numRows = n;
  start();
}

start();
