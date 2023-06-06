let nombre = prompt("Ingrese su nombre")
let opciones = "1. Ver carrito \n2. Añadir artículos \n3. Eliminar artículo \n4. Generar Factura\n5. Cerrar"
var carritoItems = []
var carritoPrecios = []
let opcionesItems = ["Ensalada de Quinoa y Aguacate", "Tacos de Coliflor", "Bowl de Arroz Integral y Lentejas", "Tostadas de Frijoles", "Wrap de Hummus y Verduras", "Hamburguesa de Lentejas"]
let precioItems = [10.99, 3.50, 5.55, 1.95, 4.50, 9.95]


while (true) {
    var opcion = prompt(`Hola, ${nombre}. \nPor favor, seleccione una opción indicando un número.\n` + opciones)

    switch (opcion) {
        case "1":
            VerCarrito(carritoItems, carritoPrecios);
            break;
        case "2":
            añadirArticulo(opcionesItems, precioItems, carritoItems, carritoPrecios);
            break;
        case "3":
            eliminarArticulo(carritoItems, carritoPrecios);
            break;
        case "4":
            facturar(carritoItems, carritoPrecios, nombre);
            break;
         case "5":
            alert("Hasta luego!");
            break;
        default:
            alert("Por favor, selecciona una de las opciones")
    }
}

function VerCarrito (nombres, precios) {
    compras = ""
    if (nombres.length < 1) {
        alert("No tienes nada agregado a tu carrito")
    }
    else {
        for (i=0; i < nombres.length; i++) {
            compras = compras + `${i+1}. ${nombres[i]}, $${precios[i]}.\n`
        }
        alert(`Estos son los items que tienes añadidos:\n${compras}`)
    }
    
}

function addArticulo (n, nombres, precios, carrito, costos) {
    carrito.push(nombres[n])
    costos.push(precios[n])
}

function delArticulo (n, carrito, costos) {
    carrito.splice(n, 1)
    costos.splice(n, 1)
}

function añadirArticulo (nombres, precios, carrito, costos) {
    mensaje = "Seleccione el artículo a añadir \n"
    for (i=0; i < nombres.length; i++) {
        mensaje = mensaje + `${i+1}. ${nombres[i]}, $${precios[i]}.\n`
        console.log(i)
    }
    n = parseInt(prompt(mensaje)) - 1 
    addArticulo(n, nombres, precios, carrito, costos)
}

function eliminarArticulo (carrito, costos) {
    mensaje = "Seleccione el artículo a eliminar \n"
    for (i=0; i < carrito.length; i++) {
        mensaje = mensaje + `${i+1}. ${carrito[i]}, $${costos[i]}.\n`
    }
    n = parseInt(prompt(mensaje)) - 1 
    delArticulo(n, carrito, costos)
}

function facturar (nombres, precios, nombre) {
    compras = ""
    total = 0
    for (i=0; i < nombres.length; i++) {
        compras = compras + `${i+1}. ${nombres[i]}, $${precios[i]}.\n`
        total = total + precios[i]
    }
    alert(`${nombre}, Estos son los items que ordenaste:\n${compras}\n El total a pagar es $${total}\nEl pedido ha sido generado exitosamente, visítanos para retirar lo que ordenaste.`)
}






