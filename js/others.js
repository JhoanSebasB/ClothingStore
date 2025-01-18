/* Scroll de los botones (hombre,mujer,all y el otro) hacia las Cards y viceversa */

function smoothScrollToCard() {
    const card = document.querySelector(".card");
    const offset = -110; 
    const topPosition = card.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({ top: topPosition, behavior: "smooth" });
}


document.querySelector(".hero-button").addEventListener("click", smoothScrollToCard);


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", smoothScrollToCard);
});



const inicioIcono = document.getElementById("inicio-icono");

if (inicioIcono) { // Verifica si el elemento existe
    // Mostrar/ocultar el botón según el scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) { // Mostrar después de 100px de desplazamiento
            inicioIcono.style.display = "block";
        } else {
            inicioIcono.style.display = "none";
        }
    });

    // Añadir el evento de clic al icono
    inicioIcono.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}











/* mensaje cuando el cursor esta apagado */
function showMessage(cardId) {
    let message = '';
    let selectedSize, selectedColor, messageElement;

    // Asignar las variables correspondientes según el cardId
    if (cardId === 1) {
        selectedSize = selectedSize1;
        selectedColor = selectedColor1;
        messageElement = document.getElementById('shoe-details-1');
    } else if (cardId === 2) {
        selectedSize = selectedSize2;
        selectedColor = selectedColor2;
        messageElement = document.getElementById('shoe-details-2');
    } else if (cardId === 3) {
        selectedSize = selectedSize3;
        selectedColor = selectedColor3;
        messageElement = document.getElementById('shoe-details-3');
    } else if (cardId === 4) {
        selectedSize = selectedSize4;
        selectedColor = selectedColor4;
        messageElement = document.getElementById('shoe-details-4');
    } else if (cardId === 5) {
        selectedSize = selectedSize5;
        selectedColor = selectedColor5;
        messageElement = document.getElementById('shoe-details-5');
    }

    // Verificar si no se ha seleccionado talla o color
    if (!selectedSize || !selectedColor) {
        message = 'Por favor, selecciona la talla y el color antes de comprar.';
    }

    // Mostrar u ocultar el mensaje
    if (message) {
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        messageElement.style.position = 'fixed';
        messageElement.style.color = '#fff';
        messageElement.style.backgroundColor = '#00aae4';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '5px';
        

        const button = document.getElementById(`save-button-${cardId}`);
        const buttonRect = button.getBoundingClientRect();

        messageElement.style.top = `${buttonRect.top - 40}px`;
        messageElement.style.left = `${buttonRect.left}px`;
    } else {
        messageElement.style.display = 'none';
    }
}

function hideMessage(cardId) {
    const messageElement = document.getElementById(`shoe-details-${cardId}`);
    messageElement.style.display = 'none'; // Ocultar el mensaje
}







/* Almacenar todo para la compra */

        let selectedSize1 = null;
        let selectedColor1 = null;
        let selectedShoeName1 = '';
        let selectedShoePrice1 = '';
        
        let selectedSize2 = null;
        let selectedColor2 = null;
        let selectedShoeName2 = '';
        let selectedShoePrice2 = '';

        let selectedSize3 = null;
        let selectedColor3 = null;
        let selectedShoeName3 = null;
        let selectedShoePrice3 = null;

        let selectedSize4 = null;
        let selectedColor4 = null;
        let selectedShoeName4 = null;
        let selectedShoePrice4 = null;

        let selectedSize5 = null;
        let selectedColor5 = null;
        let selectedShoeName5 = null;
        let selectedShoePrice5 = null;
    
       
        function selectSize(size, name, price, cardId) {
            if (cardId === 'card-image-2-mujer') {
                selectedSize1 = size;
                selectedShoeName1 = name;
                selectedShoePrice1 = price;
                checkSelection(1);
            } else if (cardId === 'card-image-1-hombre') {
                selectedSize2 = size;
                selectedShoeName2 = name;
                selectedShoePrice2 = price;
                checkSelection(2);
            } else if (cardId === 'card-image-3-nike') {
                selectedSize3 = size;
                selectedShoeName3 = name;
                selectedShoePrice3 = price;
                checkSelection(3);
            } else if (cardId === 'card-image-4-airjordanlow') {
                selectedSize4 = size;
                selectedShoeName4 = name;
                selectedShoePrice4 = price;
                checkSelection(4);
            } else if (cardId === 'card-image-5-airjordanhighog') {
                selectedSize5 = size;
                selectedShoeName5 = name;
                selectedShoePrice5 = price;
                checkSelection(5);
            }
        }
    
    
        function selectColor(color, name, price, cardId) {
            if (cardId === 'card-image-2-mujer') {
                selectedColor1 = color;
                selectedShoeName1 = name;
                selectedShoePrice1 = price;
                checkSelection(1);
            } else if (cardId === 'card-image-1-hombre') {
                selectedColor2 = color;
                selectedShoeName2 = name;
                selectedShoePrice2 = price;
                checkSelection(2);
            } else if (cardId === 'card-image-3-nike') {
                selectedColor3 = color;
                selectedShoeName3 = name;
                selectedShoePrice3 = price;
                checkSelection(3);
            } else if (cardId === 'card-image-4-airjordanlow') {
                selectedColor4 = color;
                selectedShoeName4 = name;
                selectedShoePrice4 = price;
                checkSelection(4);
            } else if (cardId === 'card-image-5-airjordanhighog') {
                selectedColor5 = color;
                selectedShoeName5 = name;
                selectedShoePrice5 = price;
                checkSelection(5);
            }
        }
    
        
        function checkSelection(cardId) {
            let shoeDetailsElement;
            if (cardId === 1) {
                shoeDetailsElement = document.getElementById('shoe-details-1');
            } else if (cardId === 2) {
                shoeDetailsElement = document.getElementById('shoe-details-2');
            } else if (cardId === 3) {
                shoeDetailsElement = document.getElementById('shoe-details-3');
            } else if (cardId === 4) {
                shoeDetailsElement = document.getElementById('shoe-details-4');
            } else if (cardId === 5) {
                shoeDetailsElement = document.getElementById('shoe-details-5');
            }
        
            // Verificar si el elemento existe
            if (shoeDetailsElement) {
                if (cardId === 1) {
                    if (selectedSize1 && selectedColor1) {
                        document.getElementById('save-button-1').disabled = false;
                        document.getElementById('save-carrito-1').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-1').disabled = true;
                        document.getElementById('save-carrito-1').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 2) {
                    if (selectedSize2 && selectedColor2) {
                        document.getElementById('save-button-2').disabled = false;
                        document.getElementById('save-carrito-2').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-2').disabled = true;
                        document.getElementById('save-carrito-2').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 3) {
                    if (selectedSize3 && selectedColor3) {
                        document.getElementById('save-button-3').disabled = false;
                        document.getElementById('save-carrito-3').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-3').disabled = true;
                        document.getElementById('save-carrito-3').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 3) {
                    if (selectedSize3 && selectedColor3) {
                        document.getElementById('save-button-3').disabled = false;
                        document.getElementById('save-carrito-3').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-3').disabled = true;
                        document.getElementById('save-carrito-3').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 3) {
                    if (selectedSize3 && selectedColor3) {
                        document.getElementById('save-button-3').disabled = false;
                        document.getElementById('save-carrito-3').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-3').disabled = true;
                        document.getElementById('save-carrito-3').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 3) {
                    if (selectedSize3 && selectedColor3) {
                        document.getElementById('save-button-3').disabled = false;
                        document.getElementById('save-carrito-3').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-3').disabled = true;
                        document.getElementById('save-carrito-3').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 4) {
                    if (selectedSize4 && selectedColor4) {
                        document.getElementById('save-button-4').disabled = false;
                        document.getElementById('save-carrito-4').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-4').disabled = true;
                        document.getElementById('save-carrito-4').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                } else if (cardId === 5) {
                    if (selectedSize5 && selectedColor5) {
                        document.getElementById('save-button-5').disabled = false;
                        document.getElementById('save-carrito-5').disabled = false;
                        shoeDetailsElement.textContent = '';
                    } else {
                        document.getElementById('save-button-5').disabled = true;
                        document.getElementById('save-carrito-5').disabled = true;
                        shoeDetailsElement.textContent = '';
                    }
                }
            } 
        }
        
    
        // Función para guardar la información y mostrarla
        function saveShoeDetails(cardId) {
    let shoeData;
    if (cardId === 'card-image-2-mujer') {
        shoeData = {
            size: selectedSize1,
            color: selectedColor1,
            name: selectedShoeName1,
            price: selectedShoePrice1
        };
    } else if (cardId === 'card-image-1-hombre') {
        shoeData = {
            size: selectedSize2,
            color: selectedColor2,
            name: selectedShoeName2,
            price: selectedShoePrice2
        };
    } else if (cardId === 'card-image-3-nike') {
        shoeData = {
            size: selectedSize3,
            color: selectedColor3,
            name: selectedShoeName3,
            price: selectedShoePrice3
        };
    } else if (cardId === 'card-image-4-airjordanlow') {
        shoeData = {
            size: selectedSize4,
            color: selectedColor4,
            name: selectedShoeName4,
            price: selectedShoePrice4
        };
    } else if (cardId === 'card-image-5-airjordanhighog') {
        shoeData = {
            size: selectedSize5,
            color: selectedColor5,
            name: selectedShoeName5,
            price: selectedShoePrice5
        };
    }

    // Verificar si shoeData fue definido
    if (!shoeData) {
        console.error("No se pudo guardar la información. El cardId es inválido.");
        return;
    }

    // Imprimir los detalles en la consola
    console.log("Información del zapato guardada:", shoeData);

    try {
    const message = `
    ¡Estoy interesado en los siguientes zapatos! 👟
        Nombre: ${shoeData.name}
        Talla: ${shoeData.size}
        Color: ${shoeData.color}
        Precio: ${shoeData.price}
    `;
    const phoneNumber = "+573209504702";  
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log("Mensaje generado:", message);
    console.log("URL de WhatsApp:", url);

    window.open(url, '_blank');
} catch (error) {
    console.error("Error al generar el enlace de WhatsApp:", error);
}

}


 
