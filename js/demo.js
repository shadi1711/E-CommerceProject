var currrentimage = 1;
function Slider() {
  if (currrentimage == 3) {
    currrentimage = 0;
  }
  var image = document.getElementById('imgnow');
  image.setAttribute(
    'style',
    'background-image: url("../imgs/banner' + ++currrentimage + '.png")'
  );
}

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
  topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
setInterval(Slider, 3000);

const productContainer = document.querySelector('.all');
productContainer.innerHTML = '';

fetch('http://localhost:3000/products')
  .then((response) => response.json())
  .then((data) => {
    const products = data;

    products.forEach((product) => {
      const cart = document.createElement('div');
      cart.className = 'cart';
      cart.innerHTML = `
            <div class="card">
            <div class="new"><span>New</span></div><br><br> 
            <img src="${product.image_url}" alt="Denim Jeans" style="width:60%; height:200px;">
            <h2>${product.name}</h2>
            <p class="price">&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp  ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
            <h5>${product.description}</h5>
            <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
            </div>
      `;

      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

      cart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          addToCart(event, product);
        } else {
          window.location.href = 'product-details.html?id=' + product.id;
        }
      });

      productContainer.appendChild(cart);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function Clothes() {
  const productContainer = document.querySelector('.all-clothes');
  productContainer.innerHTML = '';
  fetch('http://localhost:3000/products?category=clothes')
    .then((response) => response.json())
    .then((data) => {
      const products = data;

      products.forEach((product) => {
        const cart = document.createElement('div');
        cart.className = 'cart';
        cart.innerHTML = `
                <div class="card">
                <div class="new"><span>New</span></div><br><br> 
                <img src="${product.image_url}" alt="Denim Jeans"  style="width:60%; height:200px;">
                <h1>${product.name}</h1>
                <p class="price">&nbsp;&nbsp;&nbsp;&nbsp ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
                <h5>${product.description}</h5>
                <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
                </div>
      `;

      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

      cart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          addToCart(event);
        } else {
          window.location.href = 'product-details.html?id=' + product.id;
        }
      });
      productContainer.appendChild(cart);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  var clothes = document.querySelector('.product .all-clothes');
  var bags = document.querySelector('.product .all-bags');
  var electronics = document.querySelector('.product .all-electronics');
  var furniture = document.querySelector('.product .all-furniture');
  var all = document.querySelector('.all');
  all.style.display = 'none';
  clothes.style.display = 'grid';
  bags.style.display = 'none';
  electronics.style.display = 'none';
  furniture.style.display = 'none';
}

function Bags() {
  fetch('http://localhost:3000/products?category=bags')
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      console.log(products);
      const productContainer = document.querySelector('.all-bags');

      products.forEach((product) => {
        const cart = document.createElement('div');
        cart.className = 'cart';
        cart.innerHTML = `
            <div class="card">
            <div class="new"><span>New</span></div><br><br> 
            <img src="${product.image_url}" alt="Denim Jeans" style="width:60%; height:200px;">
            <h1>${product.name}</h1>
            <p class="price">&nbsp;&nbsp;&nbsp;&nbsp ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
            <h5>${product.description}</h5>
            <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
            </div>
      `;

      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

      cart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          addToCart(event);
        } else {
          window.location.href = 'product-details.html?id=' + product.id;
        }
      });
      productContainer.appendChild(cart);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  var clothes = document.querySelector('.product .all-clothes');
  var bags = document.querySelector('.product .all-bags');
  var electronics = document.querySelector('.product .all-electronics');
  var furniture = document.querySelector('.product .all-furniture');
  var all = document.querySelector('.all');
  all.style.display = 'none';
  clothes.style.display = 'none';
  bags.style.display = 'grid';
  electronics.style.display = 'none';
  furniture.style.display = 'none';
}

function Electronics() {
  fetch('http://localhost:3000/products?category=electronics')
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      console.log(products);
      const productContainer = document.querySelector('.all-electronics');

      products.forEach((product) => {
        const cart = document.createElement('div');
        cart.className = 'cart';
        cart.innerHTML = `
            <div class="card">
            <div class="new"><span>New</span></div><br><br> 
            <img src="${product.image_url}" alt="Denim Jeans"  style="width:60%; height:200px;">
            <h1>${product.name}</h1>
            <p class="price">&nbsp;&nbsp;&nbsp;&nbsp ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
            <h5>${product.description}</h5>
            <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
            </div>
      `;

      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

      cart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          addToCart(event);
        } else {
          window.location.href = 'product-details.html?id=' + product.id;
        }
      });
      productContainer.appendChild(cart);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  var clothes = document.querySelector('.product .all-clothes');
  var bags = document.querySelector('.product .all-bags');
  var electronics = document.querySelector('.product .all-electronics');
  var furniture = document.querySelector('.product .all-furniture');
  var all = document.querySelector('.all');
  all.style.display = 'none';
  clothes.style.display = 'none';
  bags.style.display = 'none';
  electronics.style.display = 'grid';
  furniture.style.display = 'none';
}

function Furniture() {
  fetch('http://localhost:3000/products?category=furniture')
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      console.log(products);
      const productContainer = document.querySelector('.all-furniture');

      products.forEach((product) => {
        const cart = document.createElement('div');
        cart.className = 'cart';
        cart.innerHTML = `
            <div class="card">
            <div class="new"><span>New</span></div><br><br> 
            <img src="${product.image_url}" alt="Denim Jeans"  style="width:60%; height:200px;>
            <h1>${product.name}</h1>
            <p class="price">&nbsp;&nbsp;&nbsp;&nbsp ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;&nbsp;&nbsp   <span class="oldprice">${product.old_price}</span></p>
            <h5>${product.description}</h5>
            <p><button class="add-to-cart" type="button" name="button" >Add to Cart</button></p>      
            </div>
      `;

      const addToCartButton = cart.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', (event) => addToCart(event, product));

      cart.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
          addToCart(event);
        } else {
          window.location.href = 'product-details.html?id=' + product.id;
        }
      });
      productContainer.appendChild(cart);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  var clothes = document.querySelector('.product .all-clothes');
  var bags = document.querySelector('.product .all-bags');
  var electronics = document.querySelector('.product .all-electronics');
  var furniture = document.querySelector('.product .all-furniture');
  var all = document.querySelector('.all');
  all.style.display = 'none';
  clothes.style.display = 'none';
  bags.style.display = 'none';
  electronics.style.display = 'none';
  furniture.style.display = 'grid';
}

function validateForm() {
  var validName = document.getElementById('name');
  var validEmail = document.getElementById('email');
  var validPassword = document.getElementById('password');
  var validConfirmPassword = document.getElementById('confirm');
  var validDate = document.getElementById('date');

  validateField(validName, /^[a-zA-Z ]{2,30}$/, 'validname', 'Name is Required !');
  validateField(validEmail, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'validemail', 'Email not valid !');
  validateField(validPassword, /^.{8,}$/, 'validpassword', 'Password is Required !');
  validateField(validConfirmPassword, /^.{8,}$/, 'validconfirmpassword', 'Confirm Password not Matched !', validPassword.value !== validConfirmPassword.value);
  validateDate(validDate, 'validDate', 'Invalid Date!');

  // Check if all fields are valid
  if (!document.querySelector('.error:not([style="display: none;"])')) {
    alert('Form submitted successfully!');
    // Clear the form
    document.getElementById('myForm').reset();
  }
}

function validateField(field, pattern, errorId, errorMessage, customCondition = true) {
  var errorElement = document.getElementById(errorId);

  if (!field.value.match(pattern) || !customCondition) {
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
}

function validateDate(dateField, errorId, errorMessage) {
  var errorElement = document.getElementById(errorId);
  var datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;

  if (!dateField.value.match(datePattern)) {
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
}

document.getElementById('name').addEventListener('input', function () {
  validateField(this, /^[a-zA-Z ]{2,30}$/, 'validname', 'Name is Required !');
});

document.getElementById('email').addEventListener('input', function () {
  validateField(this, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'validemail', 'Email not valid !');
});

document.getElementById('password').addEventListener('input', function () {
  validateField(this, /^.{8,}$/, 'validpassword', 'Password is Required !');
  validateField(document.getElementById('confirm'), /^.{8,}$/, 'validconfirmpassword', 'Confirm Password not Matched !', this.value !== document.getElementById('confirm').value);
});

document.getElementById('confirm').addEventListener('input', function () {
  validateField(this, /^.{8,}$/, 'validconfirmpassword', 'Confirm Password not Matched !', this.value !== document.getElementById('password').value);
});

document.getElementById('date').addEventListener('input', function () {
  validateDate(this, 'validDate', 'Invalid Date!');
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

