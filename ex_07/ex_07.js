let intervalId;
let isTitleFrozen = false;
const words = ["Learn", "Create", "Share", "Grow"];

function shuffleTitle() {
  if (!isTitleFrozen) {
    const titleElement = document.getElementById("title");
    titleElement.textContent = words.sort(() => Math.random() - 0.5).join(" ");
  }
}

window.onload = () => {
  const titleElement = document.getElementById("title");

  
  intervalId = setInterval(shuffleTitle, 2000);

 
  titleElement.addEventListener("mouseenter", () => {
    isTitleFrozen = true;
  });

 
  titleElement.addEventListener("mouseleave", () => {
    isTitleFrozen = false;
  });

  
  titleElement.addEventListener("click", () => {
    navigator.clipboard.writeText(titleElement.textContent).then(() => {
      clearInterval(intervalId);
    });
  });

 
  document.addEventListener("click", (event) => {
    if (event.target.id !== "title") {
      if (!intervalId) {
        intervalId = setInterval(shuffleTitle, 2000);
      }
    }
  });

 
  document.addEventListener("keydown", (event) => {
    if (event.key === "!") {
      setTimeout(() => {
        alert("42!");
      }, 42000);
    }
  });
};

/*
Explications :
1. La fonction `shuffleTitle()` mélange les mots du titre et met à jour son contenu.
2. Toutes les 2 secondes, le titre est mélangé sauf s'il est gelé (lorsque la souris est dessus).
3. Lors d'un clic sur le titre, le texte est copié dans le presse-papiers et le mélange s'arrête.
4. Lors d'un clic en dehors du titre, le mélange redémarre.
5. Lorsqu'on appuie sur la touche "!", une alerte avec "42!" s'affiche après 42 secondes.
*/
