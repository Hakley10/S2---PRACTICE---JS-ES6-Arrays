const PRODUCTS = [ 
  { id: 1, name: "Apple", price: 2.5 }, 
  { id: 2, name: "Banana", price: 1.5 }, 
  { id: 3, name: "Orange", price: 3 }, 
  { id: 4, name: "Rice", price: 1.5 }, 
  { id: 5, name: "Chocolate", price: 3 }, 
  ];
  const cart = [];
  //add to cart function
  function addToCart(productId, quantity) {
      const product = PRODUCTS.find(product => product.id === productId);
      if (product) {
          const existingItem = cart.find(item => item.product.id === productId);
          if (existingItem) {
              existingItem.quantity += quantity;
              console.log(`Added ${quantity} more ${product.name} to cart.`);
              return;
          }
          const cartItem = { product: product, quantity: quantity };
          cart.push(cartItem);
          console.log(`Added ${quantity} ${product.name} to cart.`);
      } else {
          console.log(`Product with ID ${productId} not found.`);
      }
  }
  //remove from cart function
  function removeFromCart(productId) {
      const index = cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
          cart.splice(index, 1);
          console.log(`Removed product with ID ${productId} from cart.`);
      } else {
          console.log(`Product with ID ${productId} not found in cart.`);
      }
  }
  //calculate total price function
  function calculateTotalPrice() {
      let totalPrice = 0;
      cart.forEach(item => {
          const product = item.product;
          const quantity = item.quantity;
          totalPrice += product.price * quantity;
      });
      return totalPrice;
  }
  addToCart(1, 2);
  addToCart(3, 1);
  addToCart(5, 3);
  addToCart(1,2)
  removeFromCart(1);
  console.log(cart);
  const totalPrice = calculateTotalPrice();
  console.log(`Total price: ${totalPrice}`);