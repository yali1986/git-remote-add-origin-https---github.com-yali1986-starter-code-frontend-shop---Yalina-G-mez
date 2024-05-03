// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,       
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,        
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,        
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,       
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,        
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,       
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,        
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,        
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,        
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];  

var total = 0;

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    
  
    const productToAdd = products.find(product => product.id === id);

    if (productToAdd) {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.find(item => item.id === id);

        if (existingProduct) {
            // Si el producto ya está en el carrito, incrementar su cantidad            
            existingProduct.quantity++
            console.log(cart) 
        } else {
            // Si el producto no está en el carrito, añadirlo con cantidad 1
            cart.push({...productToAdd, quantity: 1}); 
            console.log(cart)          
        }
    }
}

// Exercise 2
function cleanCart() {
    var cart = []
    console.log(cart)
}


// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
//    const totalCar = cart.reduce((total, product) => {
//         return total += product.price * product.quantity
//     }, 0)

let totalCar = 0
 for (let i = 0; i < cart.length; i++){
    const product = cart[i]
    totalCar += product.price * product.quantity   
}
console.log(totalCar)
return totalCar 
} // comprobar con el botón añadido de Calcular total en el cart ex3