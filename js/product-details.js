var currentUrl = window.location.href;
var url = new URL(currentUrl);
var id = url.searchParams.get("id");

const productContainer = document.querySelector(".productContainer");
productContainer.innerHTML = "";

fetch(`http://localhost:3000/products?id=${id}`)
  .then((response) => response.json())
  .then((data) => {
    const products = data;

    products.forEach((product) => {
      const cart = document.createElement("div");
      cart.className = "cart";
      cart.innerHTML = `
            <div class="card">
            <div class="new"><span>New</span></div><br><br> 
            <img src="${product.image_url}" alt="Denim Jeans" style="width:60%; height:200px;">
            <h2>${product.name}</h2>
            <p class="price">&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp  ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
            <h5>${product.description}</h5>
            <div class="all-descriptions">${product.all_descriptions}</div>
            <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
            </div>
            `;
            

      productContainer.appendChild(cart);
      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

    });
  })


  var counter = 0;
// Instead of counter++
var cartNum = document.getElementById('idnum');
fetch('http://localhost:3000/cart')
  .then((response) => response.json())
  .then((cartItems) => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartNum.innerHTML = totalQuantity;
  })
  .catch((error) => {
    console.error('Error fetching cart:', error);
  });


  // Inside addToCart function
function addToCart(e, product) {
  e.preventDefault();

  fetch('http://localhost:3000/cart')
    .then((response) => response.json())
    .then((cartItems) => {
      const existingProduct = cartItems.find(
        (item) => item.product && item.product.id === product.id
      );

      if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity++;

        // Update the quantity on the server
        fetch(`http://localhost:3000/cart/${existingProduct.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingProduct),
        })
          .then((response) => response.json())
          .then((updatedCart) => {
            console.log('Cart updated:', updatedCart);
            // Optionally, update the UI to reflect the change in cart
          })
          .catch((error) => {
            console.error('Error updating cart:', error);
          });
      } else {
        // If the product doesn't exist, add it to the cart
        fetch('http://localhost:3000/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product: {
              ...product,
            },
            quantity: 1,
          }),
        })
          .then((response) => response.json())
          .then((updatedCart) => {
            console.log('Product added to cart:', updatedCart);
            // Optionally, update the UI to reflect the change in cart
          })
          .catch((error) => {
            console.error('Error adding product to cart:', error);
          });
      }
    })
    .catch((error) => {
      console.error('Error fetching cart:', error);
    });
}

topFunction = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

