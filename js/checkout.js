// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");


//Expresion regular 
const expresiones = {
	address: /^[a-zA-Z0-9\_\-]{4,40}$/, 
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  lastN:/^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
	password: /^.{3,12}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{3,14}$/
}

// Exercise 6
// Validate fields entered by the user: name, phone, password, and email

function validate(e) {
  switch(e.target.name){
    case "name":
      if ( expresiones.name.test(e.target.value)){
        document.getElementById("fName").classList.remove("is-invalid");
        document.getElementById("fName").classList.add("is-valid");
      }else{
        document.getElementById("fName").classList.add("is-invalid");
      }
    break;
    case "email":
      if ( expresiones.email.test(e.target.value)){
        document.getElementById("fEmail").classList.remove("is-invalid");
        document.getElementById("fEmail").classList.add("is-valid");
      }else{
        document.getElementById("fEmail").classList.add("is-invalid");
      }
    break;
    case "address":
      if ( expresiones.address.test(e.target.value)){
        document.getElementById("fAddress").classList.remove("is-invalid");
        document.getElementById("fAddress").classList.add("is-valid");
      }else{
        document.getElementById("fAddress").classList.add("is-invalid");
      }
    break;
    case "lastName":
      if ( expresiones.lastN.test(e.target.value)){
        document.getElementById("fLastN").classList.remove("is-invalid");
        document.getElementById("fLastN").classList.add("is-valid");
      }else{
        document.getElementById("fLastN").classList.add("is-invalid");
      }
    break;
    case "password":
      if ( expresiones.password.test(e.target.value)){
        document.getElementById("fPassword").classList.remove("is-invalid");
        document.getElementById("fPassword").classList.add("is-valid");
      }else{
        document.getElementById("fPassword").classList.add("is-invalid");
      }
    break;
    case "phone":
      if ( expresiones.phone.test(e.target.value)){
        document.getElementById("fPhone").classList.remove("is-invalid");
        document.getElementById("fPhone").classList.add("is-valid");
      }else{
        document.getElementById("fPhone").classList.add("is-invalid");
      }
    break;
  }
}

inputs.forEach((input)=>{
  input.addEventListener("keyup", validate);
  input.addEventListener("blur", validate);
});


