window.onload = () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cart = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  let total = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const productElement = event.target.closest(".product");
      const productName = productElement.querySelector(".product-name").textContent;
      const productPrice = parseFloat(productElement.querySelector(".product-price").textContent.substring(1));
      
      let cartItem = cart.querySelector(`.cart-item[data-product-name="${productName}"]`);
      
      if (cartItem) {
        const quantityElement = cartItem.querySelector(".cart-item-quantity");
        let quantity = parseInt(quantityElement.textContent, 10);
        quantity++;
        quantityElement.textContent = quantity;
        cartItem.querySelector(".cart-item-price").textContent = `$${(productPrice * quantity).toFixed(2)}`;
      } else {
        cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.setAttribute("data-product-name", productName);
        cartItem.innerHTML = `
          <span class="cart-item-name">${productName}</span>
          <span class="cart-item-quantity">1</span>
          <span class="cart-item-price">$${productPrice.toFixed(2)}</span>
          <button class="increase-quantity-btn">+</button>
          <button class="decrease-quantity-btn">-</button>
          <button class="remove-from-cart-btn">Remove</button>
        `;
        cart.appendChild(cartItem);

        cartItem.querySelector(".remove-from-cart-btn").addEventListener("click", () => {
          const quantity = parseInt(cartItem.querySelector(".cart-item-quantity").textContent, 10);
          total -= productPrice * quantity;
          totalElement.textContent = `Total: $${total.toFixed(2)}`;
          cartItem.remove();
        });

        cartItem.querySelector(".increase-quantity-btn").addEventListener("click", () => {
          const quantityElement = cartItem.querySelector(".cart-item-quantity");
          let quantity = parseInt(quantityElement.textContent, 10);
          quantity++;
          quantityElement.textContent = quantity;
          cartItem.querySelector(".cart-item-price").textContent = `$${(productPrice * quantity).toFixed(2)}`;
          total += productPrice;
          totalElement.textContent = `Total: $${total.toFixed(2)}`;
        });

        cartItem.querySelector(".decrease-quantity-btn").addEventListener("click", () => {
          const quantityElement = cartItem.querySelector(".cart-item-quantity");
          let quantity = parseInt(quantityElement.textContent, 10);
          if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            cartItem.querySelector(".cart-item-price").textContent = `$${(productPrice * quantity).toFixed(2)}`;
            total -= productPrice;
            totalElement.textContent = `Total: $${total.toFixed(2)}`;
          }
        });
      }

      total += productPrice;
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    });
  });
};

/*
1. On page load, all buttons with class `add-to-cart-btn` are selected and an event listener is added to each.
2. When a button is clicked, the product's name and price are extracted from the closest product element.
3. The code checks if the product is already in the cart using a custom attribute (`data-product-name`).
4. If the product is already in the cart, the quantity is increased and the total price for that item is updated.
5. If the product is not in the cart, a new cart item is created, complete with buttons for increasing, decreasing, and removing items.
6. The total cost is recalculated and displayed in the designated total element each time items are added or modified in the cart.
*/
