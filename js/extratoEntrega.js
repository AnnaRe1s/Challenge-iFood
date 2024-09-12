document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    const confirmButtons = document.querySelectorAll('.edit-confirm');
    const cancelButtons = document.querySelectorAll('.edit-cancel');

    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const expenseItem = event.target.closest('.expense-item');
            
            // Show the input and action buttons, hide the edit button
            expenseItem.querySelector('.edit-input').style.display = 'inline-block';
            expenseItem.querySelector('.edit-confirm').style.display = 'inline-block';
            expenseItem.querySelector('.edit-cancel').style.display = 'inline-block';
            event.target.style.display = 'none';
        });
    });

    confirmButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const expenseItem = event.target.closest('.expense-item');
            const input = expenseItem.querySelector('.edit-input');

            // Perform any data validation or actions needed here
            console.log('Confirmed value:', input.value);

            // Hide the input and action buttons, show the edit button
            input.style.display = 'none';
            expenseItem.querySelector('.edit-confirm').style.display = 'none';
            expenseItem.querySelector('.edit-cancel').style.display = 'none';
            expenseItem.querySelector('.edit-button').style.display = 'inline-block';
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const expenseItem = event.target.closest('.expense-item');

            // Reset input to initial value or any specific action
            const input = expenseItem.querySelector('.edit-input');
            input.style.display = 'none';
            expenseItem.querySelector('.edit-confirm').style.display = 'none';
            expenseItem.querySelector('.edit-cancel').style.display = 'none';
            expenseItem.querySelector('.edit-button').style.display = 'inline-block';
        });
    });
});
