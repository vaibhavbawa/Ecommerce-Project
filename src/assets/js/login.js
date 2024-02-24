// function validateInput() {
//     var inputValue = document.getElementById("inputField").value.trim();
//     var errors = document.getElementById("errors");
//     var error = document.getElementById("error");
//     Mobile number regex pattern
//     var mobileRegex = /^[0-9]{10}$/;
    
//     Email regex pattern
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     if (mobileRegex.test(inputValue)) {
//         alert("Valid Mobile Number");
//         errors.innerText = "Valid mobile No";
//     } else if (emailRegex.test(inputValue)) {
//         alert("Valid Email Address");
//         errors.innerText = "Valid Email Address";
//     } else {
//         alert("Invalid Input");
//     }
// }