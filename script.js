document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('add-to-cart-button');
    const message = document.getElementById('cart-message');

    button.addEventListener('click', function() {
        message.classList.remove('hidden');
        message.textContent = 'Añadido al carrito';

        // Oculta el mensaje después de 3 segundos
        setTimeout(function() {
            message.classList.add('hidden');
        }, 3000);
    });
});
