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


var acc = document.getElementsByClassName("FAQ-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}