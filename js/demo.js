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
                addToCart(event , product);
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

function Login() {
  var validName = document.getElementById('name');
  validName.addEventListener('input', function () {
    var regName = /^[a-zA-Z ]{2,30}$/;
    if (!String(validName.value).match(regName)) {
      var name = document.getElementById('validname');
      name.style.display = 'block';
    } else {
      var name = document.getElementById('validname');
      name.style.display = 'none';
    }
  });

  var validEmail = document.getElementById('email');
  validEmail.addEventListener('input', function () {
    var emailPattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!String(validEmail.value).match(emailPattern)) {
      var email = document.getElementById('validemail');
      email.style.display = 'block';
    } else {
      var email = document.getElementById('validemail');
      email.style.display = 'none';
    }
  });

  var validPassword = document.getElementById('password');
  validPassword.addEventListener('input', function () {
    if (
      validPassword.value == '' ||
      validPassword.value.replace(/^\s+|\s+$/gm, '') == '' ||
      validPassword.value.length < 8
    ) {
      var password = document.getElementById('validpassword');
      password.style.display = 'block';
    } else {
      var password = document.getElementById('validpassword');
      password.style.display = 'none';
    }
  });

  var validConfirmPassword = document.getElementById('confirm');
  validConfirmPassword.addEventListener('input', function () {
    if (
      validConfirmPassword.value == '' ||
      validConfirmPassword.value.replace(/^\s+|\s+$/gm, '') == '' ||
      validConfirmPassword.value.length < 8 ||
      validConfirmPassword.value != validPassword.value
    ) {
      var password = document.getElementById('validconfirmpassword');
      password.style.display = 'block';
    } else {
      var password = document.getElementById('validconfirmpassword');
      password.style.display = 'none';
    }
  });
}

var counter = 0;

function addToCart(event, product) {
  event.preventDefault(); // Prevent the default form submission behavior

  var cartNum = document.getElementById('idnum');
  cartNum.innerHTML = ++counter;

  fetch('http://localhost:3000/cart')
    .then((response) => response.json())
    .then((cartItems) => {
      const existingProduct = cartItems.find(
        (item) => item.product && item.product.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity++;

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
          })
          .catch((error) => {
            console.error('Error updating cart:', error);
          });
      } else {
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
  window.scrollTo({ top: 0, behavior: 'smooth' });
};





