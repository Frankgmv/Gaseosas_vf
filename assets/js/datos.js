
export const bebidas = [
    { id:1, nombre:'MrTea', descripcion:'pal almuerzo', path_url:'/colombiana.png',precio:2500, destacado:true},
    { id:2, nombre:'Colombiana', descripcion:'sabe mejor que el put.. fizz', path_url:'/colombiana.png',precio:1900, destacado:false},
    { id:3, nombre:'Coca Cola', descripcion:'La buena pa la diabetes pa', path_url:'/cocaCola.png',precio:3100, destacado:true},
    { id:4, nombre:'Fanta', descripcion:'Pa la inalcanzable, descontinuada', path_url:'/fanta.png',precio:1900, destacado:false},
    { id:5, nombre:'Cuatro', descripcion:'Pa la michelaita heladita', path_url:'/cuatro.png',precio:2400, destacado:false},
    { id:6, nombre:'Manzana', descripcion:'Como esta no hay dos pa\'', path_url:'/manzana.jpg',precio:2300, destacado:true},
    { id:7, nombre:'Hatsu', descripcion:'Sabe a basura pero buenísimo', path_url:'/hatsu.jpg',precio:2400, destacado:false},
    { id:8, nombre:'Pepsi', descripcion:'Pa ahorrar un barrita en la Coca-Cola', path_url:'/pepsi.png',precio:1200, destacado:false},
    { id:9, nombre:'Sprite', descripcion:'Pa hacer chirrinchi del fino', path_url:'/sprite.png',precio:2100, destacado:false},
    { id:10, nombre:'Hit Mora', descripcion:'Pa combinar con la empanadita', path_url:'/hitmora.png',precio:2800, destacado:true},
];

// carrito
/* `
<tr>
    <td><img class="img-carrito"  src="./assets/img/${bebidas.path_url}" width="100px" height="auto"></td>
    <td>${bebidas.nombre}</td>
    <td>$${bebidas.precio}</td>
    <td>${bebidas.cantidad}</td>
    <td><button><i class="ri-close-circle-fill" title="Eliminar"></i></button></td>
</tr>
`
 */
//precio:00, destacado
/* `
<div tag="container-circle">
    <a href="#${bebidas.id}">
        <div tag="giro"></div>
        <div tag="img"><img src="./assets/img${bebidas.path_url}"></div>
        <div tag="texto">
            <h3>${bebidas.nombre}</h3>
            <p>${bebidas.descripcion}</p>
        </div>
    </a>
</div>` */

// galería
/* `
<div tag="producto" id="${bebidas.id}">
    <img src="./assets/img${bebidas.path_url}" alt="">
    <div tag="contenedor">
        <div tag="fondo"></div>
        <div tag="texto2">
            <h2>${bebidas.nombre}</h2>
            <p>${bebidas.descripcion}</p>
            <button class="btn-add-cart" title="Agregar al carrito"><i class="ri-shopping-cart-line"></i></button>
        </div>
    </div>
</div>` */
