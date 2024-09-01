const logo = document.querySelector(".background-logo");
const loginForm = document.querySelector(".register-form");

setTimeout(() => {
  logo.style.opacity = "0";
  logo.style.display = "none";
  loginForm.style.display = "flex";
}, 5000);

// Alteracao de tela para cadastro e login

function redirectToRegister() {
  window.location.href = "register.html";
}
