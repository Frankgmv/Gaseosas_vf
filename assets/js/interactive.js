// ! Zone buttons

document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.querySelector('#burgerButton');
    const navbar = document.querySelector('#buttonsContent');
    const buttonUp = document.querySelector('#buttonUp');
    const carrito = document.querySelector('#mostrarProductos');

    navButton.addEventListener('click', () => {
        navbar.classList.toggle('mostrarMenu');
        carrito.classList.remove('mostrar')
    });

    document.addEventListener('scroll', () => {
        if (window.scrollY < 200) {
            buttonUp.addEventListener('click', () => {
                screenY = 0
            });
            buttonUp.style.cssText = 'display:hidden;';
        } else {
            buttonUp.style.cssText = 'display:block;';
            buttonUp.addEventListener('click', () => {
                document.documentElement.scrollTop = 0;
            });
        }
    });
})