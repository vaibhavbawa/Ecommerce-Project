
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var icon = document.querySelector(".icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      // Change the icon to represent visible password (e.g., open eye icon)
      icon.innerHTML = "👁️";
    } else {
      passwordInput.type = "password";
      // Change the icon to represent hidden password (e.g., closed eye icon)
      icon.innerHTML = "🔒";
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Set initial state on page load
    togglePasswordVisibility();
  });