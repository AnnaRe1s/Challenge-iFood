
const addCouponBtn = document.getElementById('add-cupom-btn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

addCouponBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});


const form = document.getElementById('cupom-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const couponCode = document.getElementById('cupom-code').value;
    const discountValue = document.getElementById('discount-value').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (couponCode && discountValue && startDate && endDate) {
        alert('Cupom adicionado com sucesso!');
        popup.style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
