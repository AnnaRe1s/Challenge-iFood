const nomeInput = document.getElementById("name");
const nomeErrorMessage = document.getElementById("nomeErrorMessage");

nomeInput.addEventListener("invalid", function () {
  nomeErrorMessage.style.display = "block";
});

nomeInput.addEventListener("input", function () {
  nomeErrorMessage.style.display = "none";
});

//COMPANY NAME
const nomeInputCompany = document.getElementById("company_name");
const nomeErrorMessageNameCompany = document.getElementById(
  "companyNameErrorMessage"
);

nomeInputCompany.addEventListener("invalid", function () {
  nomeErrorMessageNameCompany.style.display = "block";
});

nomeInputCompany.addEventListener("input", function () {
  nomeErrorMessageNameCompany.style.display = "none";
});

// CNPJ
const cnpjInput = document.getElementById("company_cnpj");
const cnpjErrorMessage = document.getElementById("CNPJErrorMessage");

cnpjInput.addEventListener("invalid", function () {
  cnpjErrorMessage.style.display = "block";
});

cnpjInput.addEventListener("input", function () {
  cnpjErrorMessage.style.display = "none";
});

//email

const emailInput = document.getElementById("email");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const emailRequiredErrorMessage = document.getElementById(
  "emailRequiredErrorMessage"
);

emailInput.addEventListener("input", () => {
  // Verifica se o e-mail é válido usando uma expressão regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.style.display = "block";
  } else {
    emailErrorMessage.style.display = "none";
  }
});

emailInput.addEventListener("invalid", function () {
  if (emailInput.value) {
    emailRequiredErrorMessage.style.display = "none";
  } else {
    emailRequiredErrorMessage.style.display = "block";
  }
});
