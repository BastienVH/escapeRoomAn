const bubbles = document.querySelectorAll(".bubble");
bubbles.forEach(bubble => {
  bubble.style.visibility = "hidden";  
});

const birds = document.querySelectorAll("div.bird-with-text");
console.table(birds);
birds.forEach(bird => {
  bird.addEventListener('click', toggleVisibility)
})

function toggleVisibility() {
  if (bubbles[0].style.visibility === "hidden") {
    bubbles[0].style.visibility = "visible";
  } else {
    bubbles[0].style.visibility = "hidden";
  }
}