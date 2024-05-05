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
          
        } else {
            // Si el producto no está en el carrito, añadirlo con cantidad 1
            cart.push({ ...productToAdd, quantity: 1 });
            
           
        }
        countProductCart(cart) 
    }      
}

// Exercise 3
function calculateTotal() { // función que calcula el total del carro con los descuentos aplicados
    // Calculate total price of the cart using the "cartList" array
    //    const totalCar = cart.reduce((total, product) => {
    //         return total += product.price * product.quantity
    //     }, 0)

    let totalCar = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        totalCar += product.price * product.quantity
    }
    const discountTotal = applyPromotionsCart()

    return totalCar - discountTotal
} 


//en esta función se calcula el total de descuentos aplicados para restarlos en el total de carro
function applyPromotionsCart() {    
    removeFromCart(id)

    let descountTotalOil = 0
    let descountTotalCupcake = 0

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]

        if (product.id === 1 && product.quantity >= 3) {
            descountTotalOil = (product.price * 0.2) * product.quantity
        }
        else if (product.id === 3 && product.quantity >= 10) {
            descountTotalCupcake = (product.price * 0.3) * product.quantity
        }
    }
    return descountTotalOil + descountTotalCupcake
}

// Exercise 4
function applyPromotionsCartforProduct(cart) { // para el total de descuentos por productos   
    // Apply promotions to each item in the array "cart"
    //  Per ser un bon e-commerce, ens falta implementar promocions, apartat importantíssim en qualsevol botiga.

    // Per això, ens ha especificat dos tipus de promocions que vol per al seu e-commerce:

    // Si l'usuari/ària compra 3 o més ampolles d'oli, el preu del producte es rebaixa un 20%.
    // Quan es compren 10 o més productes per a fer pastissos, el preu del producte es rebaixa un 30%.
    // En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep l'array cart, modificant el camp subtotalWithDiscount en cas que s'apliqui la promoció. Tot ha de ser dinàmic.

    // Ajuda: ja que cada producte del carret té una quantitat, pots validar si es pot aplicar un descompte:

    // En cas que un producte tingui descompte, s'ha de guardar el preu total amb descompte en el camp: subtotalWithDiscount.
    // Si no s'ha d'aplicar descompte, no fa falta que guardis res.

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        let totalForProductWithDiscount = 0

        if (product.id === 1 && product.quantity >= 3) {
            // TotalforProduct = product.price * product.quantity - product.price * 0.2 * product.quantity
            // TotalforProduct = product.price * product.quantity * (1- 0.2)
            totalForProductWithDiscount = product.price * product.quantity * 0.8
        }
        else if (product.id === 3 && product.quantity >= 10) {
            totalForProductWithDiscount = product.price * product.quantity * 0.7

        }
        else {
            totalForProductWithDiscount = product.price * product.quantity; // Sin descuentos
        }

        product.totalForProductWithDiscount = totalForProductWithDiscount
    }
    
    return cart
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    // Ja has desenvolupat tota la lògica bàsica de l'aplicació, ha arribat el moment de mostrar a l'usuari el carret de la compra.

    // El codi encarregat de mostrar el carret de la compra en el modal amb id "cartModal", ha d'incloure's dins de la funció printCart(). Et donem ja creada la maquetació de la taula de productes, només caldrà modificar-la per tal que sigui dinàmica.

    const cartModal = document.getElementById("cartModal")
    cartModal.innerHTML = " "

    cartModal.innerHTML = `
<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-cart-arrow-down"></i> My Cart</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>				

<div class="modal-body">
					<h3 class="text-center bill px-5">Shopping Cart</h3>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Price</th>
								<th scope="col">Qty.</th>
								<th scope="col">Delete Product</th>
                                <th scope="col">Total</th>
								<th scope="col">Total <small>(with discount)</small></th>
							</tr>
						</thead>
						<tbody id="cart_list"> 							
                        </tbody>
                        </table>
                        <div class="text-center fs-3 bg-white" id="total_price_container">
                            <!-- Aquí se mostrará el total con descuento -->
                        </div>
                        <div class="text-center">
                            <a href="checkout.html" class="btn btn-primary m-3">Checkout</a>
                            <a href="javascript:void(0)" onclick="cleanCart()" class="btn btn-primary m-3">Clean Cart</a>
                        </div>
                    </div>
                </div>
            </div>`

    const updatedCart = applyPromotionsCartforProduct(cart)
    const cartList = document.getElementById("cart_list")
    let total = 0


    for (let i = 0; i < updatedCart.length; i++) {
        const product = updatedCart[i]
        const row = document.createElement("tr");
        row.innerHTML = `
            <tr> 
            <th scope="row">${product.name}</th>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
            <td><button onclick="removeFromCart(${product.id})">-</button></td> 
            <td>$${product.quantity * product.price}</td>            
            <td>$${product.totalForProductWithDiscount.toFixed(2)}</td> 
            </tr>            
            `
        cartList.appendChild(row);
        total += product.totalForProductWithDiscount
    }
    const totalContainer = document.getElementById("total_price_container");
    totalContainer.innerHTML = `Total con descuento: $${total.toFixed(2)}`
}


function cleanCart(id) {       
    cart = []
    const row = document.createElement("tr")
    const cartModal = document.getElementById("cartModal")
    cartModal.innerHTML = " "

    cartModal.innerHTML = `

<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-cart-arrow-down"></i> My Cart</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>				

<div class="modal-body">
					<h3 class="text-center bill px-5">Shopping Cart</h3>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Product</th>
								<th scope="col">Price</th>
								<th scope="col">Qty.</th>
                                <th scope="col">Total</th>
								<th scope="col">Total <small>(with discount)</small></th>
							</tr>
						</thead>
						<tbody id="cart_list">      
                           		
                        <div class="text-center">
						<a href="checkout.html" class="btn btn-primary m-3">Checkout</a>						
					</div>  		
				`
                removeFromCart(id)
}


//Contador de productos
function countProductCart(cart){     
    let totalCount = 0
    for (let i = 0; i < cart.length; i++){
        totalCount += cart[i].quantity
    }
    const count_productElement = document.getElementById("count_product")  
    count_productElement.textContent = totalCount.toString()   
}


// ** Nivell II **

// Exercise 7
// restar productes del carret.

// Has de completar la funció removeFromCart(), que rep l'identificador del producte per al qual s'ha de decrementar la seva quantitat en una unitat.

// Recorda que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del carret, no reduir la seva quantitat a 0.

// No oblidis actualitzar les promocions.
function removeFromCart(id) {    
           
    const index = cart.findIndex(product => product.id === id)
    if (index !== -1) {
        if (cart[index].quantity > 1) {            
            cart[index].quantity--

        } else {            
            cart.splice(index, 1)
        }       
    }   
    printCart()
    countProductCart(cart)    
}

function open_modal() {
    printCart();
}


//Ex 8 Cal que maquetis la web de manera que tingui una aparença professional.

//Colores primary de los botones 
var buttons = document.querySelectorAll("button")

buttons.forEach(function(button) {
    button.classList.add("btn-primary", "text-white")
})


// Crear el botón de retorno al inicio antes del footer
var button = document.createElement("button")
button.textContent = "Back to Top"
button.classList.add("btn", "btn-primary", "mx-auto", "d-flex", "mb-5")

var footer = document.querySelector("footer") // Obtener el footer
document.body.insertBefore(button, footer) // Insertar el botón justo antes del footer

button.addEventListener("click", function() {  
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

// Crear el botón de retorno al inicio antes de section Clothes
var buttonClothes = document.createElement("button")
buttonClothes.textContent = "Back to Top"
buttonClothes.classList.add("btn", "btn-primary", "mx-auto", "d-flex", "mb-5")

var clothes = document.querySelector("#clothes") // Obtener el inicio de section Clothes
document.body.insertBefore(buttonClothes, clothes) // Insertar el botón justo antes de section Clothes

buttonClothes.addEventListener("click", function() {  
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//Animaciones en el index.html y en el checkout.html
// Colores primary en algunos elementos del index.html y del checkout.html y del navbar-collapse
// en el enlace de ShopNow del checkout se agregó volver al index.html	