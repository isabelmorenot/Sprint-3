// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    quantity:0,
    subtotal:10.5,
    subtotalWithDiscount:0,
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
    quantity:0,
    subtotal:6.35,
    subtotalWithDiscount:0,

  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    quantity:0,
    subtotal:5,
    subtotalWithDiscount:0,
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
    quantity:0,
    subtotal:260,
    subtotalWithDiscount:0,
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
    quantity:0,
    subtotal:20.5,
    subtotalWithDiscount:0,
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
    quantity:0,
    subtotal:12.75,
    subtotalWithDiscount:0,
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
    quantity:0,
    subtotal:15,
    subtotalWithDiscount:0,
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
    quantity:0,
    subtotal:19.99,
    subtotalWithDiscount:0,
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
    quantity:0,
    subtotal:9.99,
    subtotalWithDiscount:0,
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

//Clases
/*var totalProductos=[ Productos ("1","cooking oil","10.5","grocery","0","10.5");

function productos(){
  var producto= new Productos ("1","cooking oil","10.5","grocery","0","10.5");
  totalProductos.push(producto);
  var producto= new Productos ("2","Pasta","6.25","grocery","0","6.25");
  totalProductos.push(producto);
  var producto= new Productos ("3","Instant cupcake mixture","5","grocery","0","5");
  totalProductos.push(producto);
  var producto= new Productos ("4","All-in-one","260","beauty","0","260");
  totalProductos.push(producto);
  var producto= new Productos ("5","Zero Make-up Kit","20.5","beauty","0","20.5");
  totalProductos.push(producto);
  var producto= new Productos ("6","Lip Tints","12.75","beauty","0","12.75");
  totalProductos.push(producto);
  var producto= new Productos ("7","Lawn Dress","15","clothes","0","15");
  totalProductos.push(producto);
  var producto= new Productos ("8","Lawn-Chiffon Combo","19,99","clothes","0","19,99");
  totalProductos.push(producto);
  var producto= new Productos ("9","Toddler Frock","9,99","clothes","0","9,99");
  totalProductos.push(producto);
  
}*/

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let i=0;i<products.length;i++){
    if(products[i].id == id){
      cartList.push(products[i]);
    }  
  }
  //console.log(cartList);
  let final = generateCart(cartList.length -1);
  console.log(final);
}

// Exercise 2
function cleanCart() {
  //1
  cartList.length = 0;
  //2
  cartList=[];
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let finalPrice=0;

  for (let i=0; i<cart.length;i++){
    if (cart[i].subtotalWithDiscount != 0 ){
      finalPrice+=Number(cart[i].subtotalWithDiscount);
    }else{
      finalPrice+=Number(cart[i].subtotal);
    }
  }
  return finalPrice;
}

// Exercise 4
function generateCart(index) {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  var encontre=false;
  
  for(let i =0; i<cart.length; i++){
    if(cartList[index].id==cart[i].id){
      encontre=true;
      cart[i].quantity += parseInt(1);
      cart[i].subtotal += cart[i].price;
      break;
    }
  }
  if(encontre==false){
    cart.push(cartList[index]);
    console.log(index);
    cart[cart.length -1].quantity = parseInt(1);
  }
  
  applyPromotionsCart();
  return cart;
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  var newPrice=10;
  
  for(let i=0; i<cart.length;i++){
    if (cart[i].id == 1 & cart[i].quantity>=3){ 
      cart[i].subtotalWithDiscount= cart[i].quantity * newPrice;
    }else if(cart[i].id == 3 & cart[i].quantity>=10){
      cart[i].subtotalWithDiscount= cart[i].quantity * (cart[i].price *2/3).toFixed(2);
    }
  }
  console.log(cart);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9

function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  
  console.log("Open Modal");
  //var cartModal = document.getElementById("cartModal");
  document.getElementById("cart_list").innerHTML= "";
  let cart_list =document.getElementById("cart_list");

  for(let i =0; i<cart.length;i++){
    let row1 = document.createElement("tr");
    let name = document.createElement("th");
    name.innerHTML=cart[i].name;
    let  price = document.createElement("td");
    price.innerHTML="$"+cart[i].price;
    let  quantity = document.createElement("td");
    quantity.innerHTML=cart[i].quantity;

    let  subtotal = document.createElement("td");
    if (cart[i].subtotalWithDiscount != 0 ){
      subtotal.innerHTML="$"+ cart[i].subtotalWithDiscount;
    }else{
      subtotal.innerHTML="$"+ cart[i].subtotal;
    }

    cart_list.appendChild(row1);
    row1.appendChild(name);
    row1.appendChild(price);
    row1.appendChild(quantity);
    row1.appendChild(subtotal);

    var total_price=document.getElementById("total_price").innerHTML=calculateTotal();
  }
  
}

function open_modal() {
  printCart();
  
}
