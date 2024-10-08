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

// Selects buttons using querySelectorAll: delete-btn, like-btn, plus-btn, minus-btn.
// For each button type:
// - delete-btn: Removes the product element from the page.
// - like-btn: Toggles the class 'is-active' to indicate the product is liked.
// - plus-btn: Increases the product quantity.
// - minus-btn: Decreases the product quantity (stays above 1).
