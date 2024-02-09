const productContainer = document.getElementById('productContainer');
const totalPriceElement = document.getElementById('totalPrice');
const totalQuantityElement = document.getElementById('totalQuantity');

fetch('http://localhost:3000/cart')
  .then((response) => response.json())
  .then((data) => {
    const products = data;
    let totalPrice = 0;
    let totalQuantity = 0;

    const cart = document.createElement('div');
    cart.className = 'cart';
    cart.innerHTML = `
        <div class="shopping-cart">
            <div class="title">
                <i class="fas fa-solid fa-cart-shopping"></i>
                Shopping Bag
            </div>
        </div>
    `;

    products.forEach((product) => {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `
            <div class="buttons">
                <span class="delete-btn" data-product-id="${product.id}"></span>
                <span class="like-btn"></span>
            </div>

            <div class="image">
                <img class="product-image" src="${product.product.image_url}" alt="${product.product.name}" style="max-width: 60px;" />
            </div>

            <div class="description">
                <span id="brand">${product.product.name}</span>
                <span id="name">${product.product.description}</span>
                <span id="color">${product.product.category}</span>
            </div>

            <div class="quantity">
                <button class="minus-btn" type="button" name="button">
                    <img src="../imgs/minus.svg" alt="" />
                </button>
                <input type="text" name="name" value="${product.quantity}" id="quantityInput" readonly />
                <button class="plus-btn" type="button" name="button">
                    <img src="../imgs/plus.svg" alt="" />
                </button>
            </div>

            <div class="total-price" id="price">$ ${product.product.price * product.quantity}</div>
        `;

      cart.querySelector('.shopping-cart').appendChild(item);

      // Calculate total price and quantity when plus or minus buttons are clicked
      const minusBtn = item.querySelector('.minus-btn');
      const plusBtn = item.querySelector('.plus-btn');
      const deleteBtn = item.querySelector('.delete-btn');
      const input = item.querySelector('.quantity input');
      const productPrice = parseFloat(product.product.price);

      minusBtn.addEventListener('click', async function (e) {
        const newQuantity = product.quantity - 1;
        if (newQuantity > 0) {
          await updateQuantity(product.id, newQuantity);
        } else {
          // If quantity is 0, remove the product
          removeProduct(product.id);
          item.remove();
          updateTotalPriceAndQuantity(-productPrice, -product.quantity);
        }
      });

      plusBtn.addEventListener('click', async function (e) {
        await updateQuantity(product.id, product.quantity + 1);
      });

      deleteBtn.addEventListener('click', function () {
        const productId = deleteBtn.getAttribute('data-product-id');
        const confirmation = confirm('Are you sure you want to remove this item?');
        if (confirmation) {
          removeProduct(productId);
          item.remove();
          updateTotalPriceAndQuantity(-productPrice, -product.quantity);
        }
      });

      // Update total price and quantity function
      function updateTotalPriceAndQuantity(price, quantity) {
        const total = (price * quantity).toFixed(2);
        totalPrice += parseFloat(total);
        totalQuantity += quantity;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
        totalQuantityElement.textContent = totalQuantity;
      }

      async function updateQuantity(productId, newQuantity) {
        if (newQuantity >= 0 && newQuantity <= 100) {
          await fetch(`http://localhost:3000/cart/${productId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              quantity: newQuantity,
            }),
          });

          input.value = newQuantity;
          updateTotalPriceAndQuantity(productPrice, newQuantity - product.quantity);
        }
      }

      async function removeProduct(productId) {
        await fetch(`http://localhost:3000/cart/${productId}`, {
          method: 'DELETE',
        });
      }
    });

    productContainer.appendChild(cart);

    // Like Button
    const likeBtns = document.querySelectorAll('.like-btn');

    likeBtns.forEach((likeBtn) => {
      likeBtn.addEventListener('click', function () {
        this.classList.toggle('is-active');
      });
    });
  });
