const form = document.querySelector("#form");
const mail = document.querySelector("#mail");
const errorText = document.querySelector("#error");

// Function to validate email
function validateEmail(email) {
 const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified regex for email validation
 return re.test(email.trim().toLowerCase());
}

// Add event listener for form submission
form.addEventListener("submit", (e) => {
 const emailValue = mail.value;

 if (validateEmail(emailValue)) {
  errorText.style.display = "none";
  mail.style.border = ""; // Reset border style if valid
 } else {
  errorText.style.display = "block";
  mail.style.border = "1px solid hsl(0, 6%, 24%)"; // Show error border
  e.preventDefault(); // Prevent form submission
 }
});
