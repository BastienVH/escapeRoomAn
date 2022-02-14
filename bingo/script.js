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

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener('click', checkSolution);

function checkSolution() {
  correctNumbers = ['1', '2', '3', '16', '24'];
  // - make array for chosen numbers
  let submittedNumbers = [];
  //store all activev cells in submittedNumbers array
  const activeCells = document.querySelectorAll('div.active');
  activeCells.forEach(cell => {
    submittedNumbers.push(cell.textContent);
  })
  // - compare array with correct cells
  let isEqual = submittedNumbers.length === correctNumbers.length &&
    submittedNumbers.every((value, index) => value === correctNumbers[index]);
  console.log(isEqual);
  // if they are identical: prompt "You win!"
  if (isEqual) alert('.mo drob teh iaarD\n.po suber ed soL');
  if (!isEqual) alert('Fout!');
}