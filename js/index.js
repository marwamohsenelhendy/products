
const prices = document.querySelectorAll('.price');
const sales = document.querySelectorAll('.sale');

for (let i = 0; i < prices.length; i++) {
  const price = parseFloat(prices[i].textContent.replace('$', ''));
  const sale = parseFloat(sales[i].textContent.replace('$', ''));
  const discountPercentage = ((sale - price) / sale) * 100;

  const currentPrice = (price * discountPercentage) / 100;
  prices[i].textContent = `${currentPrice.toFixed(2)}$`;

}



const productsContainer = document.querySelector('.box');

const getAllProducts = async () => {

  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  data.products.forEach(product => {

    const productEl = document.createElement('div');
    productEl.classList.add('image');

    productEl.innerHTML = `
    <div class="image">
    <img class="img"src="${product.thumbnail}" alt="">
        <h5>iphone 9</h5>
        <p class="title">An apple mobile which is nothing <br>like appel</p>
        <p class="price">477.85$</p>
        <p class="sale">549$</p>
        <div class="icon">
            <div class="content">
                <img src="image/icon/Bag_alt.png">
            <p class="des">Add to cart</p>
            </div>
            <div class="slide">
                <img src="image/icon/Favorite.png">
            </div>

        </div>
    `;

    productsContainer.appendChild(productEl);

  });

}

getAllProducts();






