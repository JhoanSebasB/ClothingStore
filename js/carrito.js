// Esperamos que todos los elementos de la página carguen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready() {
    // Agregar funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for (var i = 0; i < botonesEliminarItem.length; i++) {
        botonesEliminarItem[i].addEventListener('click', eliminarItemCarrito);
    }

    // Agregar funcionalidad al botón sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for (var i = 0; i < botonesSumarCantidad.length; i++) {
        botonesSumarCantidad[i].addEventListener('click', sumarCantidad);
    }

    // Agregar funcionalidad al botón restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for (var i = 0; i < botonesRestarCantidad.length; i++) {
        botonesRestarCantidad[i].addEventListener('click', restarCantidad);
    }

    // Agregar funcionalidad al botón pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked);
}

// Función para eliminar todos los elementos del carrito y ocultarlo
function pagarClicked() {
    alert("Gracias por la compra");
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()) {
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
   
}


// Función que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc, talla, color) {
    var item = document.createElement('div');
    item.classList.add = ('card');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    /*  for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }*/

    // Crear el nuevo item en el carrito
    var itemCarritoContenido = `
    <div class="carrito-item">
        <img src="${imagenSrc}" width="80px"  alt="">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-item-precio">${precio}</span><br>
            <span class="carrito-item-talla">Color: ${talla}</span><br>
            <span class="carrito-item-color">Talla: ${color}</span>
            
        </div>
        <button class="btn-eliminar">
            <span class="material-symbols-outlined">delete</span>
        </button>
    </div>
`;
    var item = document.createElement('div');
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

   

    // Agregar funcionalidades al nuevo item
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
    item.getElementsByClassName('restar-cantidad')[0].addEventListener('click', restarCantidad);
    item.getElementsByClassName('sumar-cantidad')[0].addEventListener('click', sumarCantidad);

    actualizarNumerito();

    actualizarTotalCarrito();
}

function actualizarNumerito() {
    var itemsCarrito = document.getElementsByClassName('carrito-item').length;
    document.getElementById('numerito').innerText = itemsCarrito;
}


// Aumentar en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
    var selector = event.target.parentElement;
    var cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual + 1;
    actualizarTotalCarrito();
}

// Restar en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
    var selector = event.target.parentElement;
    var cantidadActual = parseInt(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    if (cantidadActual > 1) {
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual - 1;
        actualizarTotalCarrito();
    }
}

// Eliminar el item seleccionado del carrito
function eliminarItemCarrito(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    // Actualizar el total del carrito
    actualizarTotalCarrito();

    // Actualizar el número de items en el carrito
    actualizarNumerito();

    
}


// Actualizar el total del carrito
function actualizarTotalCarrito() {
    var carritoContenedor = document.getElementsByClassName('pared')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    for (var i = 0; i < carritoItems.length; i++) {
        var precio = parseFloat(carritoItems[i].getElementsByClassName('carrito-item-precio')[0].innerText.replace('$', '').replace('.', ''));
        var cantidad = parseInt(carritoItems[i].getElementsByClassName('carrito-item-cantidad')[0].value);
        total += precio * cantidad;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ",00";
}

// Enviar el carrito por WhatsApp
function enviarCarritoPorWhatsApp() {
    var itemsCarrito = document.getElementsByClassName('carrito-item');
    if (itemsCarrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    var mensaje = "🛒 *Detalles del carrito:*%0A";
    for (var i = 0; i < itemsCarrito.length; i++) {
        var titulo = itemsCarrito[i].getElementsByClassName('carrito-item-titulo')[0].innerText;
        var tamaño = itemsCarrito[i].getElementsByClassName('carrito-item-talla')[0].innerText;
        var color = itemsCarrito[i].getElementsByClassName('carrito-item-color')[0].innerText;
        var cantidad = itemsCarrito[i].getElementsByClassName('carrito-item-cantidad')[0].value;
        var precio = itemsCarrito[i].getElementsByClassName('carrito-item-precio')[0].innerText;

        mensaje += `• ${titulo}%0A   ${color}%0A   ${tamaño}%0A   Cantidad: ${cantidad}%0A   Precio: ${precio}%0A%0A`;
    }

    var total = calcularTotalCarrito();
    mensaje += `*Total: ${total}*%0A`;

    var numeroTelefono = "573209504702";
    var enlace = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(enlace, '_blank');

     // Vaciar el carrito después de enviar
     var carritoItems = document.getElementsByClassName('carrito-items')[0];
     while (carritoItems.hasChildNodes()) {
         carritoItems.removeChild(carritoItems.firstChild);
     }
     actualizarTotalCarrito();
     
}

// Calcular el total del carrito
function calcularTotalCarrito() {
    var itemsCarrito = document.getElementsByClassName('carrito-item');
    var total = 0;

    for (var i = 0; i < itemsCarrito.length; i++) {
        var precio = parseFloat(itemsCarrito[i].getElementsByClassName('carrito-item-precio')[0].innerText.replace('$', '').replace('.', ''));
        var cantidad = parseInt(itemsCarrito[i].getElementsByClassName('carrito-item-cantidad')[0].value);
        total += precio * cantidad;
    }
    return `$${total.toLocaleString()}`;
}
