const container = document.querySelector("div.container");

// Generate 5x5 grid
drawGrid();

function drawGrid() {
  container.style.cssText += `grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(5, 1fr)`;
  for (let number = 1; number <= 25; number++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    // make each cell background black
    cell.style.backgroundColor = "black";
    cell.style.color = "white";
    // fill grid with numbers 1 - 25
    cell.textContent = number;
    container.appendChild(cell);
  }
}
// on cell click: make background blue by adding active class
container.addEventListener('click', function() {
  let target = event.target.closest('div.cell');
  target.style.backgroundColor = "darkblue";
  target.classList.add('active');
})

// if 5 specific cells have class active: promt "You win!"