const WIDTH = 960;
let numRows = 16; // # of squares per side
const GAP_SIZE = 5;
let divSize = WIDTH / numRows - GAP_SIZE;
const container = document.querySelector(".etch-a-sketch-container");

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
  divSize = WIDTH / numRows - GAP_SIZE;
  for (let i = 0; i < num; i++) {
    container.appendChild(row());
  }
}

start(16);
