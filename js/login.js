// Function to toggle error message visibility
function toggleErrorMessage(messageElement, show) {
  messageElement.style.display = show ? "block" : "none";
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password match
function validatePasswordMatch(password, confirmPassword) {
  return password.value === confirmPassword.value;
}

const emailInput = document.getElementById("email");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const emailRequiredErrorMessage = document.getElementById(
  "emailRequiredErrorMessage"
);

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const passwordErrorMessage = document.getElementById("passwordErrorMessage");
const notMatchPasswordErrorMessage = document.getElementById(
  "notMatchPasswordErrorMessage"
);

password.addEventListener("invalid", () =>
  toggleErrorMessage(passwordErrorMessage, true)
);

// Event listener for email (combined validation)
emailInput.addEventListener("input", () => {
  const emailValid = validateEmail(emailInput.value);
  toggleErrorMessage(emailRequiredErrorMessage, !emailInput.value);
  toggleErrorMessage(emailErrorMessage, !emailValid);
});

// Event listener for password confirmation (re-enable validation on input)
password.addEventListener("input", () => {
  confirmPassword.removeAttribute("required");
  notMatchPasswordErrorMessage.style.display = "none";
});

confirmPassword.addEventListener("input", () => {
  if (password.value) {
    confirmPassword.setAttribute("required");
    const passwordsMatch = validatePasswordMatch(password, confirmPassword);
    toggleErrorMessage(notMatchPasswordErrorMessage, !passwordsMatch);
  }
});

// enviar para esqueci a minha senha?

function redirectToforgotMyPassword() {
  window.location.href = "esqueciMinhaSenhaPag1.html";
}

function redirectToFristPage() {
  window.location.href = "primeiraPagina.html";
}
