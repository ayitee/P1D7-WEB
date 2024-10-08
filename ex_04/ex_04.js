
window.onload = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const likeButtons = document.querySelectorAll(".like-btn");
  const plusButtons = document.querySelectorAll(".plus-btn");
  const minusButtons = document.querySelectorAll(".minus-btn");

  
  deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const productElement = event.target.closest(".item");
      productElement.remove();
    });
  });

  likeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.target.classList.toggle("is-active");
    });
  });

  
  plusButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const quantityInput = event.target.closest(".quantity").querySelector("input");
      let quantity = parseInt(quantityInput.value, 10);
      quantity++;
      quantityInput.value = quantity;
    });
  });

  
  minusButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const quantityInput = event.target.closest(".quantity").querySelector("input");
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });
  });
};

/*
Explications :
1. Les boutons `delete-btn`, `like-btn`, `plus-btn`, et `minus-btn` sont sélectionnés avec `querySelectorAll`.
2. Pour chaque bouton :
   - `delete-btn` : supprime l'élément produit de la page.
   - `like-btn` : ajoute ou supprime la classe `is-active` pour indiquer si le produit est aimé.
   - `plus-btn` : augmente la quantité du produit.
   - `minus-btn` : diminue la quantité du produit (ne descend pas en dessous de 1).
*/
