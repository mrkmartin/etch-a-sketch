const container = document.getElementById("container");

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(color) {
  const regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  const matches = regex.exec(color);
  const r = parseInt(matches[1]);
  const g = parseInt(matches[2]);
  const b = parseInt(matches[3]);
  const newR = Math.max(0, r - 25.5);
  const newG = Math.max(0, g - 25.5);
  const newB = Math.max(0, b - 25.5);
  return `rgb(${newR}, ${newG}, ${newB})`;
}

function createGrid(size) {
  container.innerHTML = "";
  container.style.width = `${size * 60}px`;
  container.style.height = `${size * 60}px`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function (event) {
      let currentColor = event.target.style.backgroundColor;
      if (!currentColor) {
        currentColor = "#FFFFFF";
      }
      if (currentColor === "#000000") {
        return;
      }
      if (currentColor === "#FFFFFF") {
        event.target.style.backgroundColor = getRandomRGB();
      } else {
        event.target.style.backgroundColor = darkenColor(currentColor);
      }
    });
    container.appendChild(square);
  }
}

function createNewGrid() {
  let size = prompt("Enter grid size (1-100):");
  size = parseInt(size);

  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Invalid input! Enter a number between 1 and 100.");
  }
}

createGrid(16);
