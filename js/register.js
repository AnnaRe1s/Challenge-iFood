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

// Get references to all input and error message elements
const nameInput = document.getElementById("name");
const nameErrorMessage = document.getElementById("nomeErrorMessage");

const companyNameInput = document.getElementById("company_name");
const companyNameErrorMessage = document.getElementById(
  "companyNameErrorMessage"
);

const cnpjInput = document.getElementById("company_cnpj");
const cnpjErrorMessage = document.getElementById("CNPJErrorMessage");

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

// Event listeners for common validation

nameInput.addEventListener("invalid", () =>
  toggleErrorMessage(nameErrorMessage, true)
);
companyNameInput.addEventListener("invalid", () =>
  toggleErrorMessage(companyNameErrorMessage, true)
);
cnpjInput.addEventListener("invalid", () =>
  toggleErrorMessage(cnpjErrorMessage, true)
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
