const container = document.querySelector("div.container");

// Generate 5x5 grid
drawGrid();

function drawGrid() {
  container.style.cssText += `grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(5, 1fr)`;
  for (let number = 1; number <= 25; number++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    // fill grid with numbers 1 - 25
    cell.textContent = number;
    container.appendChild(cell);
  }
}
// on cell click: toggle class active
container.addEventListener('click', function() {
  let target = event.target.closest('div.cell');
  if (target.classList.contains("active")) {
    target.classList.remove('active');
  } else {
    target.classList.add('active');
  }
})

// function checkSolution, to run when clicking submit button:
// - make array with active cells
// - compare array with correct cells
// if they are identical: prompt "You win!"