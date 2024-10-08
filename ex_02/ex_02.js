let currentRotation = 0;

function rotateCircle(step) {
  const circle = document.getElementById("circle");
  if (step === 0) {
    currentRotation = 0; 
  } else {
    currentRotation += step; 
  }
  circle.style.transform = `rotate(${currentRotation}deg)`; 
}

window.onload = () => {
  const buttons = document.querySelectorAll(".rotate-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const step = parseInt(button.value, 10); 
      rotateCircle(step); 
    });
  });
}; 
// Initializes current rotation to 0.
// Defines a function to rotate the circle based on a step value.
// Resets rotation if the step is 0, otherwise increases it.
// Applies the rotation transformation to the circle element.
// On window load, adds click event listeners to rotate buttons.
// Parses button values as integers and calls the rotateCircle function.
