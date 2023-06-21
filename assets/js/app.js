// TODO agregar fondo de nevera abierta 
const bebidas = [{
        idProducto: 1,
        nombre: 'MrTea',
        descripcion: 'pal almuerzo',
        path_url: '/mrtea.png',
        precio: 2500,
        destacado: true
    },
    {
        idProducto: 2,
        nombre: 'Colombiana',
        descripcion: 'sabe mejor que el put.. fizz',
        path_url: '/colombiana.png',
        precio: 1900,
        destacado: false
    },
    {
        idProducto: 3,
        nombre: 'Coca Cola',
        descripcion: 'La buena pa la diabetes pa',
        path_url: '/cocaCola.png',
        precio: 3100,
        destacado: true
    },
    {
        idProducto: 4,
        nombre: 'Fanta',
        descripcion: 'Pa la inalcanzable, descontinuada',
        path_url: '/fanta.png',
        precio: 1900,
        destacado: false
    },
    {
        idProducto: 5,
        nombre: 'Cuatro',
        descripcion: 'Pa la michelaita heladita',
        path_url: '/cuatro.png',
        precio: 2400,
        destacado: false
    },
    {
        idProducto: 6,
        nombre: 'Manzana',
        descripcion: 'Como esta no hay dos pa\'',
        path_url: '/manzana.jpg',
        precio: 2300,
        destacado: true
    },
    {
        idProducto: 7,
        nombre: 'Hatsu',
        descripcion: 'Sabe a basura pero buenísimo',
        path_url: '/hatsu.jpg',
        precio: 2400,
        destacado: false
    },
    {
        idProducto: 8,
        nombre: 'Pepsi',
        descripcion: 'Pa ahorrar un barrita en la Coca-Cola',
        path_url: '/pepsi.png',
        precio: 1200,
        destacado: false
    },
    {
        idProducto: 9,
        nombre: 'Sprite',
        descripcion: 'Pa hacer chirrinchi del fino',
        path_url: '/sprite.png',
        precio: 2100,
        destacado: false
    },
    {
        idProducto: 10,
        nombre: 'Hit Mora',
        descripcion: 'Pa combinar con la empanadita',
        path_url: '/hitmora.png',
        precio: 2800,
        destacado: true
    },
];

carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    const containerDestacados = document.querySelector("#contenedorDestacados");
    const containerProductos = document.querySelector("#contenedorProductos");

    // carrito
    const productosCarrito = document.querySelector('#productosCarrito')
    const containerProductosCarrito = document.querySelector('#mostrarProductos')
    const buttonCarrito = document.querySelector("#carritoButton");

    buttonCarrito.addEventListener('click', () => {
        containerProductosCarrito.classList.toggle('mostrar');
    })

    const destacados = bebidas.filter(bebidas => bebidas.destacado == true)
    destacados.forEach(bebidaDestacada => {
        bebidaDestacada = `
        <div tag="container-circle">
            <a href="#producto${bebidaDestacada.idProducto}">
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




})

// ! Funciones

// agregar productos
function agregarProducto(id) {
    let productoSeleccionado = bebidas.find(bebida => bebida.idProducto == id)
    carrito.push(productoSeleccionado)

    productosCarrito.innerHTML = ""

    LlenarCarrito();
    ObtenerDato();
}

// mostrar carrito

function LlenarCarrito() {

    carrito.forEach(producto => {
        let contenido = `
            <tr>
                <td><img class="img-carrito"  src="./assets/img/${producto.path_url}" width="100px" height="auto"></td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>1</td>
                <td class="eliminar-producto"><button  id-producto="${producto.idProducto}" title="Eliminar"><i class="ri-close-circle-fill"></i></button></td>
            </tr>
            `;

        productosCarrito.innerHTML += contenido;
    })
}

function ObtenerDato() {

    productosCarrito.childNodes.forEach(producto => {

        producto.addEventListener('click', (e) => {
            if(e.target.classList.contains("ri-close-circle-fill")){

                const button = e.target.parentElement;
                const trPadre = button.parentElement.parentElement;
                const idProducto = parseInt(button.getAttribute('id-producto'));
                trPadre.classList.add('borrada');
                eliminarProducto(idProducto);
                quitarProductoHTML(idProducto, trPadre);
            }
        })
    })
}

function eliminarProducto(id) {
    let i = carrito.findIndex(producto => producto.idProducto == id);
    carrito.pop(i);
    console.log("borrando producto "+ id);
}


function quitarProductoHTML(id, container){
    productosCarrito.removeChild(container)
}