function reduceOpacity() {
  const rectangle = document.getElementById("square");
  rectangle.style.opacity *= 0.5;
}

function resetOpacity() {
  const rectangle = document.getElementById("square");
  rectangle.style.opacity = 1;
}

window.onload = () => {
  const rectangle = document.getElementById("square");
  rectangle.addEventListener("mouseenter", reduceOpacity);
  rectangle.addEventListener("mouseleave", resetOpacity);
}; 
// Reduces the rectangle's opacity by multiplying it by 0.5 when mouse enters.
// Resets the rectangle's opacity to 1 when mouse leaves.
// Adds event listeners for 'mouseenter' and 'mouseleave' when the page loads.
