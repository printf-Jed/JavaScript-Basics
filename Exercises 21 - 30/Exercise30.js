// Question 30: Create a shopping cart program where users can add items, remove items, and calculate the total price.

let cart = [];
function addItem(item, price) {
  cart.push({ item, price });
}
function removeItem(item) {
  cart = cart.filter(product => product.item !== item);
}
function calculateTotal() {
  return cart.reduce((total, product) => total + product.price, 0);
}
addItem("Book", 10);
addItem("Pen", 2);
removeItem("Pen");

console.log("Total:", calculateTotal());