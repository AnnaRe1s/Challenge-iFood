const logo = document.querySelector(".background-logo");
const loginForm = document.querySelector(".register-form");

setTimeout(() => {
  logo.style.opacity = "0";
  logo.style.display = "none";
  loginForm.style.display = "flex";
}, 5000);

// Alteracao de tela para cadastro e login
const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-register");
const conteudo = document.getElementById("conteudo");

btnLogin.addEventListener("click", () => {
  loginForm.style.display = "none";
  fetch("login.html")
    .then((response) => response.text())
    .then((data) => {
      conteudo.innerHTML = data;
      loginForm.style.display = "none";
    });
});

btnCadastro.addEventListener("click", () => {
  loginForm.style.display = "none";
  fetch("register.html")
    .then((response) => response.text())
    .then((data) => {
      conteudo.innerHTML = data;
    });
});
