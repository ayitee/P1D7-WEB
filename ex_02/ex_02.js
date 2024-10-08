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

/*
Explications :
1. La variable `currentRotation` est utilisée pour stocker la valeur actuelle de la rotation.
2. La fonction `rotateCircle(step)` prend un argument `step` pour indiquer de combien de degrés le cercle doit être tourné.
   - Si `step` vaut 0, la rotation est réinitialisée à 0 (position d'origine).
   - Sinon, la valeur de `step` est ajoutée à `currentRotation`.
3. Le style CSS `transform` est utilisé pour appliquer la rotation au cercle.
4. Les boutons ont des valeurs spécifiques (`90`, `45`, `-45`, `-90`, etc.), qui sont lues et utilisées pour appeler la fonction `rotateCircle`.
*/
