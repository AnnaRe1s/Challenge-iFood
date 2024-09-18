document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
    
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'var(--error-color)';
    errorMessage.style.fontSize = '14px';
    errorMessage.style.marginTop = '5px';
    errorMessage.style.display = 'none'; 
    form.insertBefore(errorMessage, form.children[2]);

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const emailValue = emailInput.value.trim(); 
        errorMessage.style.display = 'none'; 

        if (!emailValue) {
            errorMessage.textContent = "Preencha esse campo";
            errorMessage.style.display = 'block';
        } else if (!validateEmail(emailValue)) {
            errorMessage.textContent = "Insira um e-mail válido";
            errorMessage.style.display = 'block';
        } else {
            form.submit();
            window.location.href = 'esqueciMinhaSenhaPag2.html';
        }
    });
});
