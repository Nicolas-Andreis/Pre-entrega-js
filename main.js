//DECLARACION DE FUNCIONES (LUEGO LAS LLAMAREMOS)

function obtenerNombreCliente() { //lo utilizo para obtener el nombre y usarlo para saludar 
    let nombre = prompt(`Ingrese su nombre`);
    return nombre; // lo guardo en la variable nombre que utilizo en el resto del codigo
}

function mostrarDespedida(nombre) { // cuando finaliza el flujo me despido utilizando el nombre
    alert(`Gracias por visitarnos, ${nombre}. ¡Esperamos verte pronto nuevamente!`);
}

function mostrarTotalCompra(total) { //muestra el total de la compra, aun cuando seleccione varias pizzas
    alert(`El total de su compra es: ${total}`);
}

function saludar() {
    let nombreCliente = obtenerNombreCliente() // inicio el saludo y el prompt lo guardo en nombre cliente
    alert(`Hola ${nombreCliente}, Bienvenido a nuestra pizzeria`);

    let decision = prompt(`Indique 1 o 2 (solo números)\n1 Quiero hacer un pedido\n2 No quiero ver opciones`); //hago decidir al cliente que accion

    if (decision === "1") { //si presiona 1 se muestran las variedades de pizzas recorridas con el ciclo for 
        // Definimos las variables para cada tipo de pizza y su precio
        let pizzaMuzzarellaNombre = 'Pizza Muzzarella';
        let pizzaMuzzarellaPrecio = 2530;

        let pizzaEspecialNombre = 'Pizza Especial';
        let pizzaEspecialPrecio = 3150;

        let pizzaNapolitanaNombre = 'Pizza Napolitana';
        let pizzaNapolitanaPrecio = 2870;

        let pizzaFuggazzaNombre = 'Pizza Fuggazza';
        let pizzaFuggazzaPrecio = 2810;

        alert("Estas son nuestras pizzas:\n");

        // Utilizamos un ciclo for para mostrar las opciones de pizzas 1 a 1 comenzando en 1 y terminando en 4, sumando de a 1
        for (let i = 1; i <= 4; i++) {
            let nombrePizza = '';  // se deja espacio para que cuando arranque en cero comienze con pizza muzzarella
            let precioPizza = 0; //valor inicial en cero 

            // Asignamos los valores dependiendo del índice del ciclo
            if (i === 1) {
                nombrePizza = pizzaMuzzarellaNombre;
                precioPizza = pizzaMuzzarellaPrecio;
            } else if (i === 2) {
                nombrePizza = pizzaEspecialNombre;
                precioPizza = pizzaEspecialPrecio;
            } else if (i === 3) {
                nombrePizza = pizzaNapolitanaNombre;
                precioPizza = pizzaNapolitanaPrecio;
            } else if (i === 4) {
                nombrePizza = pizzaFuggazzaNombre;
                precioPizza = pizzaFuggazzaPrecio;
            }

            alert(`${nombrePizza}           $${precioPizza}`); //en cada ciclo cambian las variables gracias a if if else, segun el numero del ciclo
        }

        let totalCompra = 0;
        let detalleCompra = '';
        let seguirComprando = true; //la utilizo en un confirm que devuelve true o false

        // Utilizamos un ciclo do-while para permitir comprar varias pizzas
        do { //garantizamos que se cumpla una vez y luego preguntamos en seguir comprando con un confirm al final, si dice ok sigue
            let compra = parseInt(prompt(`Qué pizza quiere comprar?\nIndique un número 1, 2, 3, 4 (solo números)
          \n1 Pizza Muzzarella $2530 \n2 Pizza Especial $3150 \n3 Pizza Napolitana $2870 \n4 Pizza Fuggazza $2810`));

            // Validamos que la compra sea válida con condicionales de numero
            if (compra === 1) {
                totalCompra += pizzaMuzzarellaPrecio;
                detalleCompra += `Tu compra de Pizza Muzzarella valor: $2530 ha sido exitosa!\n`; // += suma y asigna valores a la variable detallecompra
            } else if (compra === 2) {
                totalCompra += pizzaEspecialPrecio;
                detalleCompra += `Tu compra de Pizza Especial valor: $3150 ha sido exitosa!\n`;// += suma y asigna valores a la variable detallecompra
            } else if (compra === 3) {
                totalCompra += pizzaNapolitanaPrecio;
                detalleCompra += `Tu compra de Pizza Napolitana valor: $2870 ha sido exitosa!\n`;// += suma y asigna valores a la variable detallecompra
            } else if (compra === 4) {
                totalCompra += pizzaFuggazzaPrecio;
                detalleCompra += `Tu compra de Pizza Fuggazza valor: $2810 ha sido exitosa!\n`;// += suma y asigna valores a la variable detallecompra
            } else {
                alert("No disponemos esa variedad o el número ingresado no es válido.");// += suma y asigna valores a la variable detallecompra
            }

            // Preguntamos si el usuario desea seguir comprando
            seguirComprando = confirm("¿Desea comprar otra pizza?");
        } while (seguirComprando); 

        // Llamamos a la función para mostrar el total de la compra
        mostrarTotalCompra("$" + totalCompra);

        // Mostramos el detalle de la compra
        alert(detalleCompra);

    } else if (decision === "2") { //en caso de que el cliente no desee comprar, sale del flujo
        alert(`Esperamos verte pronto.`);
    } else {
        alert("Error, no indicó 1 o 2"); // en caso de no introducir uno o dos
    }

    mostrarDespedida(nombreCliente); // nos despedimos llamando a la funcion
}

// Llamamos a la función para comenzar el flujo de interaccion
saludar();