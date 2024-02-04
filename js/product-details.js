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
            <p><button onClick="addToCart(event)">Add to Cart</button></p>    
            </div>
            `;

      productContainer.appendChild(cart);
    });
  })


  var counter = 0;
function addToCart(e)
{
    e.preventDefault();
    var cartNum=document.getElementById("idnum")
    cartNum.innerHTML=counter++;
}

topFunction = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

