
let totalCost = 0;
    const cartItems = {};
    const incrementCounter = (event) => {
        const counter = event.target.parentNode.querySelector('.counter');
        let value = parseInt(counter.textContent);
        counter.textContent = value + 1;
    };

    const decrementCounter = (event) => {
        const counter = event.target.parentNode.querySelector('.counter');
        let value = parseInt(counter.textContent);
        if (value > 1) {
            counter.textContent = value - 1;
        }
    };

    const addToCart = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const item = event.target.parentNode.parentNode.querySelector('.fruit-name').textContent;
        const quantity = parseInt(event.target.parentNode.querySelector('.counter').textContent);
        const price = parseInt(event.target.parentNode.parentNode.querySelector('.price span').textContent);

        if (cartItems.hasOwnProperty(item)) {
            cartItems[item].quantity += quantity;
        } else {
            cartItems[item] = {
                quantity,
                price
            };
        }

        updateTotalCost(quantity * price);
        renderCartItems();
    };

    const updateTotalCost = (cost) => {
        totalCost += cost;
        const totalCostElement = document.getElementById('total-cost');
        totalCostElement.textContent = `Total: ${totalCost.toFixed(2)}`;
    };

    const renderCartItems = () => {
        const cartItemsList = document.getElementById('cart-items');
        cartItemsList.innerHTML = '';

        for (const item in cartItems) {
            if (cartItems.hasOwnProperty(item)) {
                const { quantity, price } = cartItems[item];
                const cartItem = document.createElement('div');
                cartItem.textContent = `${item} (Qty: ${quantity})`;
                cartItemsList.appendChild(cartItem);
            }
        }
    };

    const toggleCart = () => {
        const cartSidebar = document.querySelector('.cart-sidebar');
        cartSidebar.classList.toggle('show');
    };

    ///
    const items = [
        { id:0, name: 'Watermelon', price: 40, image: "./image/Watermelon.jpg" },
        { id:1, name: 'Banana',       price: 40, image:"./image/Banana.jpg" },
        { id:2, name: 'Avocado', price: 40, image: "./image/Avocado.jpg" },
        { id:3, name: 'Grapes',       price: 40, image:"./image/Grapes.jpg" },
        { id:4, name: 'Kiwi', price: 40, image: "./image/Kiwi.jpg" },
        { id:5, name: 'Lemon',       price: 40, image:"./image/Lemon.jpg" },
        { id:6, name: 'Lime',       price: 40, image:"./image/Lime.jpg" },
        { id:7, name: 'Mango',       price: 40, image:"./image/Mango.jpg" },
        { id:8, name: 'Orange',       price: 40, image:"./image/Orange.jpg" },
        { id:9, name: 'Pear',       price: 40, image:"./image/Pear.jpg" },
        { id:10, name: 'Strawberry',  price: 400, image:"./image/Strawberry.jpg" },
        { id:11, name: 'Pineapple',   price: 40, image:"./image/Pineapple.jpg" },
        { id:12, name: 'Tangerine',   price: 40, image:"./image/Tangerine.jpg" },
        { id:13, name: 'Passion fruit',   price: 40, image:"./image/Passion fruit.jpg" },
        { id:14, name: 'Peach',   price: 40, image:"./image/Peach.jpg" },
        
        // Add more items here if needed
      ];
      
      
      // Insert the generated HTML into the desired container element
      const container = document.getElementById('container');

      function generateItemHTML(items) {
        return `

        <div class="item">
        <img src="${items.image}" alt="watermelon">
        <div class="content">
          <h3 class="fruit-name">${items.name}</h3>
          <div class="price">
          <p><span>price: </span>${items.price}</p>
          <p class="qty">
              <span>QTY:</span>
              <button onclick="decrementCounter(event)">-</button>
              <span class="counter">1</span>
              <button onclick="incrementCounter(event)">+</button>
            </p>
          </div>
          <span></span>
          <button href="#" class="btn" onclick="addToCart(event)">checkout</button>
        </div>
      </div>
        `;
      }
        //search for items

      function renderItems(filteredItems) {
        const itemHTML = filteredItems.map(generateItemHTML).join('');
        container.innerHTML = itemHTML;
      }
      
      function filterItems(searchTerm) {
        const filteredItems = items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderItems(filteredItems);
      }
      
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        filterItems(searchTerm);
      });
      
      // Initial rendering
      renderItems(items);




    //   let swiper = new Swiper(".swiper-slide", {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //     grabCursor: true,
    //     centeredSlides:true,
    //     loop: true,
    //     autoplay: {
    //         delay: 7500,
    //         disableOnInteraction: false
    //       },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       "@0.00": {
    //         slidesPerView: 1,
    
    //       },
    //       "@0.75": {
    //         slidesPerView: 2,
    
    //       },
    //       "@1.00": {
    //         slidesPerView: 3,
    
    //       },
    //     },
    //   });