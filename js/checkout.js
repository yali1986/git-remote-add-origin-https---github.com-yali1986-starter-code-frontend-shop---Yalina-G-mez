
// Exercise 6

// - Tots els camps són obligatoris. - Tots els camps han de tenir almenys 3 caràcters.ok

// - El nom i cognoms han de contenir només lletres. ok

// - El telèfon ha de contenir només números. ok

// - La contrasenya ha d'incloure números i lletres. ok

// - L'email ha de tenir format d'email. ok
function validate(event) {  
	event.preventDefault() //Esto evitará que el formulario se envíe , se mantienen los mensajes de error, sin que la página se actualice.

	var error = 0
	// Get the input fields
	var fName = document.getElementById("fName")
	var fEmail = document.getElementById("fEmail")
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")

	// Get the error elements
	var errorName = document.getElementById("errorName")
	var errorEmail = document.getElementById("errorEmail")  
	var errorAddress = document.getElementById("errorAddress")  
	var errorLastN = document.getElementById("errorLastN")  
	var errorPassword = document.getElementById("errorPassword")  
	var errorPhone = document.getElementById("errorPhone")  	

fPhone.classList.remove("is-invalid")
	
//Validate fName

function validateName(name) {
	const onlyLetters = /^[a-zA-Z]+$/  //verifica que contenga solo letras
    return onlyLetters.test(name)
}

if (fName.value.length < 3) {
	error++	
	fName.classList.add("is-invalid")
	errorName.style.display = "block"	
} else if (!validateName(fName.value)) {
    error++
	fName.classList.add("is-invalid")
    errorName.style.display = "block"
    errorName.textContent = "The field First Name only must contain letters"
} 
else {	
	fName.classList.remove("is-invalid")
	errorName.style.display = ""		
}

// Validate fLastN
if (fLastN.value.length < 3) {
	error++
	fLastN.classList.add("is-invalid")
	errorLastN.style.display = "block"
} else if (!validateName(fLastN.value)) {
    error++
	fLastN.classList.add("is-invalid")
    errorLastN.style.display = "block"
    errorLastN.textContent = "The field Last Name only must contain letters"
} else {
	fLastN.classList.remove("is-invalid")	
	errorLastN.style.display = ""	
}

// Validate fPhone
function validatePhone(fPhone) {    
    const phoneRegex = /^\d+$/ // verifica que el teléfono contenga solo dígitos. 
    return phoneRegex.test(fPhone)
}

if (fPhone.value.length !==  9) { //La cantidad de números obligatoria
	error++
	fPhone.classList.add("is-invalid")
	errorPhone.style.display = "block"
	
} 
else if (!validatePhone(fPhone.value)) {
    error++
	fPhone.classList.add("is-invalid")
    errorPhone.style.display = "block"    
} else {	
	fPhone.classList.remove("is-invalid")	
	errorPhone.style.display = ""	
}

// Validate email
function validateEmail(fEmail) {    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Expresión regular para validar el formato de un correo electrónico, incluye que tenga más de 3 caracteres
    return emailRegex.test(fEmail)
}

if (!validateEmail(fEmail.value)) {
    error++
	fEmail.classList.add("is-invalid")
    errorEmail.style.display = "block"    
} else {	
	fEmail.classList.remove("is-invalid")
	errorEmail.style.display = ""	
}


// Validate contraseña
function containsLettersAndNumbers(fPassword) {
    var hasLetters = /[a-zA-Z]/.test(fPassword)
    var hasNumbers = /[0-9]/.test(fPassword)	
    return hasLetters && hasNumbers
}

if (!containsLettersAndNumbers(fPassword.value)) {
    error++
	fPassword.classList.add("is-invalid")
    errorPassword.style.display = "block" 

} else if(fPassword.value.length < 4) { // el número máximo de caracteres está establecido en el html
	error++
	fPassword.classList.add("is-invalid")
	errorPassword.style.display = "block"  
	errorPassword.textContent = "The password should contain at least 4 characters and no more than 8 characters."
}
else {	
	fPassword.classList.remove("is-invalid")
	errorPassword.style.display = ""	
}


// Validate Address
if (fAddress.value.length < 3) {
	error++
	fAddress.classList.add("is-invalid")
	errorAddress.style.display = "block"	
} else if (!containsLettersAndNumbers(fAddress.value)) {
    error++
	fAddress.classList.add("is-invalid")
    errorAddress.style.display = "block" 
	errorAddress.textContent = "The address must have numbers and letters."

} else {	
	fAddress.classList.remove("is-invalid")
	errorAddress.style.display = ""		
}


if (error > 0) {
	        alert("Error")
	    } else {
	        alert("OK")
	    }

}
