
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector("#icon");
  // var icon1 = document.querySelector(".icon1");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    // Change the icon to represent visible password (e.g., open eye icon)
    icon.className = "fa fa-eye";
  } else {
    passwordInput.type = "password";
    // Change the icon to represent hidden password (e.g., closed eye icon)
    icon.className = "fa fa-eye-slash";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Set initial state on page load
  togglePasswordVisibility();
});