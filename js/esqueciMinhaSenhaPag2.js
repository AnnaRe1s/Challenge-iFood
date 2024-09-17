document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input[type="text"]');
    const form = document.querySelector('form');

    input.addEventListener('input', function() {
        input.value = input.value.replace(/\D/g, '');

        if (input.value.length > 6) {
            input.value = input.value.slice(0, 6);
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        if (input.value.length === 6) {
            form.submit(); 
            window.location.href = 'esqueciMinhaSenhaPag3.html';
        } else {
            alert('Por favor, insira um código de 6 dígitos.');
        }
    });
});
