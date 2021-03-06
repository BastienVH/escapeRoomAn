const bubbles = document.querySelectorAll(".speech");
bubbles.forEach(bubble => {
  bubble.style.visibility = "hidden";  
});

const birds = document.querySelectorAll(".el-img");
console.table(birds);
birds.forEach(bird => {
  bird.addEventListener('click', checkClickedBird)
})

function checkClickedBird(e) {
  console.log(e.target.id);
  let number = e.target.id;
  toggleVisibility(number)
}

function toggleVisibility(num) {
  // let speechBubble = bubbles[].style.
  if (bubbles[num-1].style.visibility === "hidden") {
    bubbles[num-1].style.visibility = "visible";
  } else {
    bubbles[num-1].style.visibility = "hidden";
  }
}