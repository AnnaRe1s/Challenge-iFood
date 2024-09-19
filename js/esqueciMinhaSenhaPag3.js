document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputPassword = document.querySelectorAll('input[type="password"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio automático do formulário

    // Verifica se as senhas são iguais e têm o comprimento mínimo
    if (
      inputPassword[0].value === inputPassword[1].value &&
      inputPassword[0].value.length >= 6
    ) {
      // Exibe um popup de sucesso
      showSuccessPopup();

      setTimeout(() => {
        window.location.href = "login.html";
      }, 4000);
    } else {
      // Senhas não são iguais ou são curtas
      alert(
        "Por favor, certifique-se de que as senhas são iguais e têm pelo menos 6 caracteres."
      );
    }
  });

  function showSuccessPopup() {
    const popup = document.querySelector(".pop-up-container"); // Use existing container

    // Make the popup visible
    popup.style.display = "block";

    // Remove the popup after 3 seconds
    setTimeout(() => {
      popup.style.display = "none"; // Hide the popup after 3 seconds
    }, 3000);
  }
});

function fecharPopup() {
  const popupContainer = document.querySelector(".pop-up-container");
  popupContainer.style.display = "none";
  window.location.href = "login.html";
}
