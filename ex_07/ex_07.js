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
1. The function `shuffleTitle()` randomizes the title's words and updates the content.
2. The title is shuffled every 2 seconds unless the mouse is over it (frozen state).
3. Clicking the title copies the text to the clipboard and stops shuffling.
4. Clicking outside the title restarts the shuffling.
5. Pressing the "!" key triggers an alert with "42!" after 42 seconds.
*/ 
