// TODO agregar fondo de nevera abierta 

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    cargar()
});

function cargar() {

    //? variables de productos
    const containerDestacados = document.querySelector("#contenedorDestacados");
    const containerProductos = document.querySelector("#contenedorProductos");

    //! variables de carrito
    const productosCarrito = document.querySelector('#productosCarrito')
    const containerProductosCarrito = document.querySelector('#mostrarProductos')
    const buttonCarrito = document.querySelector("#carritoButton");
    const buttonVaciarCarrito = document.querySelector('#vaciar')

    //? Manipular frontend carrito 

    buttonVaciarCarrito.addEventListener('click', () => {
        carrito = [];
        limpiarCarrito();
        UpdateStorage()
    })

    buttonCarrito.addEventListener('click', () => {
        containerProductosCarrito.classList.toggle('mostrar');
    })

    //? Añadir destacados

    const destacados = bebidas.filter(bebidas => bebidas.destacado == true)
    destacados.forEach(bebida => {
        let {
            idProducto,
            path_url,
            nombre,
            descripcion
        } = bebida;
        let bebidaDestacada = `
        <div tag="container-circle">
            <a href="#producto${idProducto}">
                <div tag="giro"></div>
                <div tag="img"><img src="./assets/img${path_url}"></div>
                <div tag="texto">
                    <h3>${nombre}</h3>
                    <p>${descripcion}</p>
                </div>
            </a>
        </div>`;
        containerDestacados.innerHTML += bebidaDestacada;
    })

    //? Añadir Productos
    bebidas.forEach(bebida => {
        let producto = `
        <div class="bebida" tag="producto" id="producto${bebida.idProducto}">
            <img src="./assets/img${bebida.path_url}" alt="">
            <div tag="contenedor">
                <div tag="fondo"></div>
                <div tag="texto2">
                    <h2>${bebida.nombre}</h2>
                    <p>${bebida.descripcion}</p>
                    <button class="btn-add-cart" onClick="agregarProducto(${bebida.idProducto})" title="Agregar al carrito"><i class="ri-shopping-cart-line"></i></button>
                </div>
            </div>
        </div>`
        containerProductos.innerHTML += producto;
    })
    LlenarCarrito()
}



// ! Funciones

//* agregar productos

function agregarProducto(id) {

    let productoSeleccionado = bebidas.find(bebida => bebida.idProducto == id)

    if (carrito.some(producto => producto.idProducto === productoSeleccionado.idProducto)) {
        carrito.forEach(product => {
            if (product.idProducto === id) {
                product.cantidad++;
            }
        })
    } else {
        carrito = [...carrito, {
            cantidad: 1,
            ...productoSeleccionado
        }]
    }
    UpdateStorage()    
    limpiarCarrito()
    LlenarCarrito();
    agregarEliminador();
}

function agregarEliminador() {

    productosCarrito.childNodes.forEach(producto => {

        producto.addEventListener('click', (e) => {
            if (e.target.classList.contains("ri-close-circle-fill")) {
                const button = e.target.parentElement;
                const trPadre = button.parentElement.parentElement;
                const idProducto = parseInt(button.getAttribute('id-producto'));
                quitarProductoHTML(idProducto, trPadre);
            }
        })
    })
}

//?    
function LlenarCarrito() {
    carrito.forEach(producto => {
        let {
            path_url,
            nombre,
            precio,
            idProducto,
            cantidad
        } = producto;

        let contenido = `
            <tr>
                <td><img class="img-carrito"  src="./assets/img/${path_url}" width="100px" height="auto"></td>
                <td>${nombre}</td>
                <td>$${precio}</td>
                <td>${cantidad}</td>
                <td class="eliminar-producto"><button  id-producto="${idProducto}" title="Eliminar"><i class="ri-close-circle-fill"></i></button></td>
            </tr>
            `;

        productosCarrito.innerHTML += contenido;
    }) 
    agregarEliminador();
}


function quitarProductoHTML(id, container) {
    eliminarProducto(id);
    productosCarrito.removeChild(container)
}

function eliminarProducto(id) {
    let UpdateCarrito = carrito.filter(producto => producto.idProducto !== id)
    carrito = UpdateCarrito;
    UpdateStorage()
}

function limpiarCarrito() {
    while (productosCarrito.firstChild) {
        productosCarrito.removeChild(productosCarrito.firstChild);
    }
}
function UpdateStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
