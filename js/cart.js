const productContainer = document.getElementById("productContainer");
const totalPriceElement = document.getElementById("totalPrice");
const totalQuantityElement = document.getElementById("totalQuantity");

fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .then((data) => {
        const products = data;
        let totalPrice = 0;
        let totalQuantity = 0;

        const cart = document.createElement("div");
        cart.className = "cart";
        cart.innerHTML = `
            <div class="shopping-cart">
                <div class="title">
                    <i class="fas fa-solid fa-cart-shopping"></i>
                    Shopping Bag
                </div>
            </div>
        `;

        products.forEach((product) => {
            const item = document.createElement("div");
            item.className = "item";
            item.innerHTML = `
                <div class="buttons">
                    <span class="delete-btn"></span>
                    <span class="like-btn"></span>
                </div>

                <div class="image">
                    <img class="product-image" src="${product.image_url}" alt="${product.name}" style="max-width: 60px;" />
                </div>

                <div class="description">
                    <span id="brand">${product.name}</span>
                    <span id="name">${product.description}</span>
                    <span id="color">${product.category}</span>
                </div>

                <div class="quantity">
                    <button class="minus-btn" type="button" name="button">
                        <img src="../imgs/minus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value="1" id="quantityInput" readonly />
                    <button class="plus-btn" type="button" name="button">
                        <img src="../imgs/plus.svg" alt="" />
                    </button>
                </div>

                <div class="total-price" id="price">${product.price}</div>
            `;

            cart.querySelector('.shopping-cart').appendChild(item);

            // Calculate total price and quantity when plus or minus buttons are clicked
            const minusBtn = item.querySelector('.minus-btn');
            const plusBtn = item.querySelector('.plus-btn');
            const input = item.querySelector('.quantity input');
            const productPrice = parseFloat(product.price);

            minusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let value = parseInt(input.value);

                if (value > 0) {
                    value = value - 1;
                    input.value = value;
                    updateTotalPriceAndQuantity(productPrice, value);
                }
            });

            plusBtn.addEventListener('click', function(e) {
                e.preventDefault();
                let value = parseInt(input.value);

                if (value < 100) {
                    value = value + 1;
                    input.value = value;
                    updateTotalPriceAndQuantity(productPrice, value);
                }
            });

            // Update total price and quantity function
            function updateTotalPriceAndQuantity(price, quantity) {
                const total = (price * quantity).toFixed(2);
                totalPrice += parseFloat(total);
                totalQuantity += quantity;
                item.querySelector('.total-price').textContent = `$${total}`;
                totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
                totalQuantityElement.textContent = totalQuantity;
            }
        });

        productContainer.appendChild(cart);

        // Like Button
        const likeBtns = document.querySelectorAll('.like-btn');

        likeBtns.forEach((likeBtn) => {
            likeBtn.addEventListener('click', function() {
                this.classList.toggle('is-active');
            });
        });
    });


    

    //         function updateTotalPriceAndQuantity(price, quantity) {
    //             const total = (price * quantity).toFixed(2);
    //             totalPrice += parseFloat(total);
    //             totalQuantity += quantity;
    //             item.querySelector('.total-price').textContent = `$${total}`;
    //             totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    //             totalQuantityElement.textContent = totalQuantity;
    //         }
    //     });

    //     finalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    //     productContainer.appendChild(finalPriceElement);
    //     productContainer.appendChild(cart);
    // });