// TODO agregar fondo de nevera abierta 
import {
    bebidas
} from "./datos.js";

document.addEventListener('DOMContentLoaded', () => {

    const buttonCarrito = document.querySelector("#carritoButton");
    const containerProductosCarrito = document.querySelector('#mostrarProductos')
    const containerDestacados = document.querySelector("#contenedorDestacados");
    const containerProductos = document.querySelector("#contenedorProductos");

    buttonCarrito.addEventListener('click', () => {
        containerProductosCarrito.classList.toggle('mostrar');
    })
    let destacados = bebidas.filter(bebidas => bebidas.destacado == true)
    console.log(destacados);
    destacados.forEach(bebidaDestacada =>{
         bebidaDestacada = `
        <div tag="container-circle">
            <a href="#${bebidaDestacada.id}">
                <div tag="giro"></div>
                <div tag="img"><img src="./assets/img${bebidaDestacada.path_url}"></div>
                <div tag="texto">
                    <h3>${bebidaDestacada.nombre}</h3>
                    <p>${bebidaDestacada.descripcion}</p>
                </div>
            </a>
        </div>`;
        containerDestacados.innerHTML += bebidaDestacada;   
    })


    bebidas.forEach(bebida => {
        let producto = `
        <div tag="producto" id="${bebida.id}">
            <img src="./assets/img${bebida.path_url}" alt="">
            <div tag="contenedor">
                <div tag="fondo"></div>
                <div tag="texto2">
                    <h2>${bebida.nombre}</h2>
                    <p>${bebida.descripcion}</p>
                    <button class="btn-add-cart" title="Agregar al carrito"><i class="ri-shopping-cart-line"></i></button>
                </div>
            </div>
        </div>`
        containerProductos.innerHTML += producto;
    })

})