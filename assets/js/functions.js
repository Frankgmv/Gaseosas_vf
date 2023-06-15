

function AddProducto(id) {

    console.log(id);

        // Seleccionar la bebida de los datos
        let bebidaSeleccionada = bebidas.find(bebida =>{
            return bebida.id == id;
        });
        

        // // Buscar si esta repetida en el carrito
        // let BuscarLaBebida = carrito.some(producto =>{
        //     return producto.id == bebidaSeleccionada.id
        // });


        // if(BuscarLaBebida){
        //     let encontrarIndex = carrito.findIndex(element =>{
        //         return element.id == id
        //     })
        //     carrito[encontrarIndex].cantidad++;
        // }else{
        //     carrito = [...carrito, {bebidaSeleccionada,cantidad:1, precio }]
        // } 
}