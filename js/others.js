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
    const sizes = [selectedSize1, selectedSize2, selectedSize3, selectedSize4, selectedSize5];
    const colors = [selectedColor1, selectedColor2, selectedColor3, selectedColor4, selectedColor5];
    const messageElement = document.getElementById(`shoe-details-${cardId}`);

    if (!sizes[cardId - 1] || !colors[cardId - 1]) {
        messageElement.textContent = translations[currentLang]?.selectSizeColor || "Selecciona talla y color.";
        messageElement.style.cssText = `
            display: block;
            position: fixed;
            color: #fff;
            background-color: #00aae4;
            padding: 10px;
            border-radius: 5px;
        `;

        const button = document.getElementById(`save-button-${cardId}`);
        const { top, left } = button.getBoundingClientRect();
        messageElement.style.top = `${top - 40}px`;
        messageElement.style.left = `${left}px`;
    } else {
        messageElement.style.display = 'none';
    }
}

function hideMessage(cardId) {
    document.getElementById(`shoe-details-${cardId}`).style.display = 'none';
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
        let selectedShoeName3 = "";
        let selectedShoePrice3 = "";

        let selectedSize4 = null;
        let selectedColor4 = null;
        let selectedShoeName4 = "";
        let selectedShoePrice4 = "";

        let selectedSize5 = null;
        let selectedColor5 = null;
        let selectedShoeName5 = "";
        let selectedShoePrice5 = "";
    
       
        function selectSize(size, name, price, cardId) {
            // Seleccionar los botones de tamaño dentro de la tarjeta correspondiente usando cardId
            const sizeButtons = document.querySelectorAll(`#size-buttons-${cardId} .size-btn`);
            
            // Desmarcar todos los botones de tamaño dentro de esa tarjeta
            sizeButtons.forEach(button => button.classList.remove('active'));
        
            // Marcar el botón de tamaño seleccionado
            const selectedButton = [...sizeButtons].find(button => button.innerText === size);
            if (selectedButton) selectedButton.classList.add('active');
        
            // Guardar los datos según el cardId
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
            // Seleccionar todos los botones de color dentro de la tarjeta correspondiente usando cardId
            const colorButtons = document.querySelectorAll(`#color-buttons-${cardId} .color-btn`);
            
            // Desmarcar todos los botones de color dentro de esa tarjeta
            colorButtons.forEach(button => button.classList.remove('active'));
        
            // Encontrar el botón correspondiente al color seleccionado
            const selectedButton = [...colorButtons].find(button => button.classList.contains(`color-btn-${color.toLowerCase()}`));
            
            // Agregar la clase 'active' al botón seleccionado
            if (selectedButton) selectedButton.classList.add('active');
        
            // Guardar los datos según el cardId
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
            const shoeDetailsElement = document.getElementById(`shoe-details-${cardId}`);

        
            // Verificar si el elemento existe
            if (shoeDetailsElement) {
                const cardIds = [1, 2, 3, 4, 5];
                const selectedSizes = [selectedSize1, selectedSize2, selectedSize3, selectedSize4, selectedSize5];
                const selectedColors = [selectedColor1, selectedColor2, selectedColor3, selectedColor4, selectedColor5];

                if (cardIds.includes(cardId)) {
                    const index = cardIds.indexOf(cardId);
                    const isEnabled = selectedSizes[index] && selectedColors[index];

                    document.getElementById(`save-button-${cardId}`).disabled = !isEnabled;
                    document.getElementById(`save-carrito-${cardId}`).disabled = !isEnabled;
                    shoeDetailsElement.textContent = '';
                }

            } 
        }
        
    
        // Función para guardar la información y mostrarla
       function saveShoeDetails(cardId) {
    const shoeDataMap = {
        'card-image-2-mujer': { size: selectedSize1, color: selectedColor1, name: selectedShoeName1, price: selectedShoePrice1 },
        'card-image-1-hombre': { size: selectedSize2, color: selectedColor2, name: selectedShoeName2, price: selectedShoePrice2 },
        'card-image-3-nike': { size: selectedSize3, color: selectedColor3, name: selectedShoeName3, price: selectedShoePrice3 },
        'card-image-4-airjordanlow': { size: selectedSize4, color: selectedColor4, name: selectedShoeName4, price: selectedShoePrice4 },
        'card-image-5-airjordanhighog': { size: selectedSize5, color: selectedColor5, name: selectedShoeName5, price: selectedShoePrice5 }
    };

    const shoeData = shoeDataMap[cardId];

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

 
