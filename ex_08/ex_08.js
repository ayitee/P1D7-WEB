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
Explications :
1. Vérification si le produit est déjà dans le panier avec `querySelector` et un attribut personnalisé (`data-product-name`).
2. Si le produit est déjà présent, on augmente la quantité en modifiant l'élément `.cart-item-quantity`.
3. Si le produit n'est pas dans le panier, un nouvel élément est créé.
4. Des boutons "+" et "-" permettent d'augmenter ou de diminuer la quantité de chaque produit dans le panier.
5. Lors de la suppression, le total est recalculé en tenant compte de la quantité du produit à retirer.
*/
