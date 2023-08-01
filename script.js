document.addEventListener("DOMContentLoaded", function() {
  var contactForm = document.getElementById("contact-us-form");
  var securityNumberField = document.getElementById("security-number");
  var securityNumberDisplay = document.getElementById("security-number-display");
  var securityNumber;

  generateSecurityNumber();
  displaySecurityNumber();

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var userInput = securityNumberField.value.trim();

    if (userInput == securityNumber) {
      // Security number is correct, you can proceed with submitting the form
      contactForm.submit();
    } else {
      // Security number is incorrect, re-generate a new number, display it, clear the input field, and ask the user to try again
      generateSecurityNumber();
      displaySecurityNumber();
      securityNumberField.value = "";
      alert("Incorrect security code. Please try again.");
    }
  });

  function generateSecurityNumber() {
    securityNumber = Math.floor(100000 + Math.random() * 900000).toString();
  }

  function displaySecurityNumber() {
    securityNumberDisplay.textContent = securityNumber;
  }
});