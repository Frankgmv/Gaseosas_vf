// TODO agregar fondo de nevera abierta 
const bebidas = [{
        id: 1,
        nombre: 'MrTea',
        descripcion: 'pal almuerzo',
        path_url: '/mrtea.png',
        precio: 2500,
        destacado: true
    },
    {
        id: 2,
        nombre: 'Colombiana',
        descripcion: 'sabe mejor que el put.. fizz',
        path_url: '/colombiana.png',
        precio: 1900,
        destacado: false
    },
    {
        id: 3,
        nombre: 'Coca Cola',
        descripcion: 'La buena pa la diabetes pa',
        path_url: '/cocaCola.png',
        precio: 3100,
        destacado: true
    },
    {
        id: 4,
        nombre: 'Fanta',
        descripcion: 'Pa la inalcanzable, descontinuada',
        path_url: '/fanta.png',
        precio: 1900,
        destacado: false
    },
    {
        id: 5,
        nombre: 'Cuatro',
        descripcion: 'Pa la michelaita heladita',
        path_url: '/cuatro.png',
        precio: 2400,
        destacado: false
    },
    {
        id: 6,
        nombre: 'Manzana',
        descripcion: 'Como esta no hay dos pa\'',
        path_url: '/manzana.jpg',
        precio: 2300,
        destacado: true
    },
    {
        id: 7,
        nombre: 'Hatsu',
        descripcion: 'Sabe a basura pero buenísimo',
        path_url: '/hatsu.jpg',
        precio: 2400,
        destacado: false
    },
    {
        id: 8,
        nombre: 'Pepsi',
        descripcion: 'Pa ahorrar un barrita en la Coca-Cola',
        path_url: '/pepsi.png',
        precio: 1200,
        destacado: false
    },
    {
        id: 9,
        nombre: 'Sprite',
        descripcion: 'Pa hacer chirrinchi del fino',
        path_url: '/sprite.png',
        precio: 2100,
        destacado: false
    },
    {
        id: 10,
        nombre: 'Hit Mora',
        descripcion: 'Pa combinar con la empanadita',
        path_url: '/hitmora.png',
        precio: 2800,
        destacado: true
    },
];

var carrito = [{
        id: 1,
        nombre: 'MrTea',
        descripcion: 'pal almuerzo',
        path_url: '/mrtea.png',
        precio: 2500,
        destacado: true,
        cantidad: 1
    },
    {
        id: 3,
        nombre: 'Coca Cola',
        descripcion: 'La buena pa la diabetes pa',
        path_url: '/cocaCola.png',
        precio: 3100,
        destacado: true,
        cantidad: 1
    },
];
carrito = []

document.addEventListener('DOMContentLoaded', () => {


    const buttonCarrito = document.querySelector("#carritoButton");
    const containerProductosCarrito = document.querySelector('#mostrarProductos')
    const containerDestacados = document.querySelector("#contenedorDestacados");
    const containerProductos = document.querySelector("#contenedorProductos");
    const productosCarrito = document.querySelector('#productosCarrito')
    buttonCarrito.addEventListener('click', () => {
        containerProductosCarrito.classList.toggle('mostrar');
    })

    const destacados = bebidas.filter(bebidas => bebidas.destacado == true)
    destacados.forEach(bebidaDestacada => {
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
                    <button class="btn-add-cart" onClick="AddProducto(${bebida.id})"  title="Agregar al carrito"><i class="ri-shopping-cart-line"></i></button>
                </div>
            </div>
        </div>`
        containerProductos.innerHTML += producto;
    })

    carrito.forEach(producto => {
        let elemento = `
        <tr>
        <td><img class="img-carrito"  src="./assets/img/${producto.path_url}" width="100px" height="auto"></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td><button title="Eliminar"><i class="ri-close-circle-fill"></i></button></td>
        </tr>
        `;
        productosCarrito.innerHTML += elemento;
    })


})


function AddProducto(id) {
    
    // Buscar si esta repetida en el carrito
    let buscarLaBebida = carrito.filter(producto => {
        return producto.id === id
    });

    if (buscarLaBebida > 1) {
        let encontrarIndex = carrito.findIndex(element => {
            return element.id == id
        })
        carrito[encontrarIndex].cantidad++;

        console.log("Repetido");
    } else {
        
        let bebidaSeleccionada = bebidas.find(bebida => {
            return bebida.id == id;
        });
        
        carrito = [...carrito, {bebidaSeleccionada,cantidad:1}]
        console.log("Creando nuevo");
    }
}
