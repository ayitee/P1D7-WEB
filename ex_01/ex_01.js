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

/*
Explications :
1. La fonction reduceOpacity réduit l'opacité du rectangle en la multipliant par 0,5.
2. La fonction resetOpacity réinitialise l'opacité à 1.
3. Lorsque le curseur est au-dessus du rectangle ('mouseenter'), l'opacité est réduite.
4. Lorsque le curseur quitte le rectangle ('mouseleave'), l'opacité est réinitialisée.
*/
