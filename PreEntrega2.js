let nombre = prompt("Ingrese su nombre")
let opciones = "1. Ver carrito \n2. Añadir artículos \n3. Eliminar artículo \n4. Generar Factura\n5. Cerrar"
var carritoItems = []

class Producto {
    constructor (nombreProducto, precioProducto, descripcionProducto, id) {
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.descripcionProducto = descripcionProducto;
        this.id = id
    }

}

const producto1 = new Producto ("Ensalada de Quinoa y Aguacate", 10.99, "Quinoa, aguacate, tomate, cebolla, cilantro y vinagreta de limón.", 0)

const producto2 = new Producto ("Tacos de Coliflor", 3.50, "Tortillas de maíz rellenas de coliflor asada, cebolla y cilantro, con guacamole y salsa de chile.", 1)

const producto3 = new Producto ("Bowl de Arroz Integral y Lentejas", 5.55, "Arroz integral, lentejas, espinacas, pepino, zanahoria, tomate y aderezo de tahini.", 2)

const producto4 = new Producto ("Tostadas de Frijoles", 1.95, "Tostadas crujientes con frijoles negros, aguacate, tomate, cilantro y salsa de chile.", 3)

const producto5 = new Producto ("Wrap de Hummus y Verduras", 4.50, "Tortilla de avena rellena de hummus, espinacas, pepino, zanahoria, tomate y cebolla roja.", 4)

const producto6 = new Producto ("Hamburguesa de Lentejas", 9.95, "Hamburguesa vegetariana de lentejas con aguacate, tomate, cebolla y aderezo de tahini.", 5)

const listaProductos = [producto1, producto2, producto3, producto4, producto5, producto6]

salir = false
while (salir == false) {
    var opcion = prompt(`Hola, ${nombre}. \nPor favor, seleccione una opción indicando un número.\n` + opciones)

    switch (opcion) {
        case "1":
            VerCarrito(carritoItems);
            break;
        case "2":
            añadirArticulo(listaProductos, carritoItems);
            break;
        case "3":
            eliminarArticulo(carritoItems);
            break;
        case "4":
            facturar(carritoItems, nombre);
            break;
        case "5":
            salir = true
            alert("Hasta luego!");
            break;
        default:
            alert("Por favor, selecciona una de las opciones")
    }
    
}


function VerCarrito (carrito) {
    compras = ""
    if (carrito.length < 1) {
        alert("No tienes nada agregado a tu carrito")
    }
    else {
        for (i=0; i < carrito.length; i++) {
            compras = compras + `${i+1}. ${carrito[i].nombreProducto}, $${carrito[i].precioProducto}.\n`
        }
        alert(`Estos son los items que tienes añadidos:\n${compras}`)
    }
    
}

function addArticulo (n, productos, carrito) {
    let seleccion = productos.find(
        (producto) => producto.id === n
    )
    if(seleccion == undefined){
        alert(`Vuelve a ingresar una opción válida.`)
    } 
    else{
        carrito.push(seleccion)
    }
}

function delArticulo (n, carrito) {
    carrito.splice(n, 1)
}

function añadirArticulo (productos, carrito) {
    mensaje = "Seleccione el artículo a añadir \n"
    for (i=0; i < productos.length; i++) {
        mensaje = mensaje + `${i+1}. ${productos[i].nombreProducto}, $${productos[i].precioProducto}.\n ${productos[i].descripcionProducto}\n`
        console.log(i)
    }
    n = parseInt(prompt(mensaje)) - 1 
    addArticulo(n, productos, carrito)
}

function eliminarArticulo (carrito) {
    mensaje = "Seleccione el artículo a eliminar \n"
    for (i=0; i < carrito.length; i++) {
        mensaje = mensaje + `${i+1}. ${carrito[i].nombreProducto}, $${carrito[i].precioProducto}.\n`
    }
    n = parseInt(prompt(mensaje)) - 1 
    delArticulo(n, carrito)
}

function facturar (carrito, nombre) {
    compras = ""
    total = 0
    for (i=0; i < carrito.length; i++) {
        compras = compras + `${i+1}. ${carrito[i].nombreProducto}, $${carrito[i].precioProducto}.\n`
        total = total + carrito[i].precioProducto
    }
    alert(`${nombre}, Estos son los items que ordenaste:\n${compras}\nEl total a pagar es $${total.toFixed(2)}\nEl pedido ha sido generado exitosamente, visítanos para retirar lo que ordenaste.`)
}






