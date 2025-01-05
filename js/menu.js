/* Responsive hamburger */

const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})




/* Carrusel informativo */

let currentLanguage = "es"; 

const messages = {
    es: [
        "Envio gratis con compras superiores a $199.900",
        "Devoluciones Gratis\nVer detalles",
    ],
    en: [
        "Free shipping on orders over $199.900",
        "Free returns\nSee details",
    ],
};

let index = 0;

const carouselText = document.getElementById("carouselText");

function updateText() {
    const message = messages[currentLanguage][index];

    carouselText.innerHTML = "";

    if (index === 1) {
        const [mainText, linkText] = message.split("\n");
        const mainSpan = document.createElement("span");
        mainSpan.textContent = mainText;

        const link = document.createElement("a");
        link.href = "#"; 
        link.textContent = linkText;
        link.style.textDecoration = "underline";
        link.style.display = "block"; 
        link.style.textAlign = "center"; 
        link.style.fontSize = "14px";
        link.style.color = "black";  

        carouselText.appendChild(mainSpan);
        carouselText.appendChild(link);
    } else {
        carouselText.textContent = message;
    }

    index = (index + 1) % messages[currentLanguage].length;
}


function setCarouselLanguage(lang) {
    currentLanguage = lang;
    index = 0; 
    updateText(); 
}


updateText();
setInterval(updateText, 5000);




/* Cards */

const buttons = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' '); 

            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});






/* COOKIES */

const cookieBox = document.querySelector(".wrap"),
      butt = document.querySelectorAll(".cookie-btn"); 

const executeCodes = () => {
    if (document.cookie.includes("jhoans")) return;
    cookieBox.classList.add("show");

    butt.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if(button.id == "acceptBtn"){
                
                document.cookie = "cookieBy= jhoans; max-age=" + 60 * 60 *24 *30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);



/* Guardar las imagenes para mostrarlas en Zapato.html 

function selectCard(category, imageId) {
    const data = {
        category,
        colorIndex: imageId.includes('hombre') ? currentColorIndexHombre : currentColorIndexMujer,
        imageIndex: imageId.includes('hombre') ? currentImageIndexHombre : currentImageIndexMujer,
        shoeData: imageId.includes('hombre') ? shoeColors : shoeairforce,
    };

    
    localStorage.setItem("selectedCardData", JSON.stringify(data));
}
*/
 
/* Mostrar las imagenes en Zapato.html 


const cardData = JSON.parse(localStorage.getItem("selectedCardData"));
if (cardData) {
    const { category, colorIndex, imageIndex, shoeData } = cardData;

    // Verificar si los datos son correctos
    console.log(cardData); // Verifica los datos del localStorage

    // Construir contenido dinámico
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = `
        <div class="card-large">
            <div class="image-container">
                <img id="main-image" src="${shoeData[colorIndex] ? shoeData[colorIndex][imageIndex] : 'default_image.jpg'}" alt="${category}">
                
                <!-- Botones para cambiar imágenes -->
                <button class="prev-image" onclick="changeCardImage('prev', 'main-image'); event.stopPropagation(); return false;" aria-label="Previous Image">
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <button class="next-image" onclick="changeCardImage('next', 'main-image'); event.stopPropagation(); return false;" aria-label="Next Image">
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
                
            </div>

            <p class="card-name">${category === 'mujer' ? 'Air Force 1 Unisex' : 'Dunk Low Hombre'}</p>
            <p class="card-price">${category === 'mujer' ? '$450.000' : '$550.000'}</p>

            <!-- Botones para cambiar color -->
            <div class="color-buttons">
                ${shoeData.map((_, index) => `
                    <button style="background-color: ${index === 0 ? 'black' : index === 1 ? 'blue' : 'red'};"
                        onclick="changeShoeColorZapato(${index})" 
                        aria-label="Color ${index + 1}">
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Cambiar color dentro de zapato.html
    window.changeShoeColorZapato = function(colorIndex) {
        const mainImage = document.getElementById("main-image");
        mainImage.src = shoeData[colorIndex][0];

        // Actualizar localStorage
        cardData.colorIndex = colorIndex;
        cardData.imageIndex = 0;
        localStorage.setItem("selectedCardData", JSON.stringify(cardData));
    };

    // Función para cambiar imágenes
    window.changeCardImage = function(direction, imageId) {
        const imgElement = document.getElementById(imageId);
        const images = shoeData[colorIndex];

        if (direction === 'prev') {
            imageIndex = (imageIndex - 1 + images.length) % images.length;
        } else if (direction === 'next') {
            imageIndex = (imageIndex + 1) % images.length;
        }

        imgElement.src = images[imageIndex];

        // Actualizar localStorage con el nuevo índice de imagen
        cardData.imageIndex = imageIndex;
        localStorage.setItem("selectedCardData", JSON.stringify(cardData));
    };
} else {
    document.getElementById("card-container").innerHTML = "<p>No hay datos disponibles.</p>";
}
*/





  /* Comprar mediante whatsapp 
  
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
    } else if (cardId === 'card-image-3-mujer') {
        shoeData = {
            size: selectedSize3,
            color: selectedColor3,
            name: selectedShoeName3,
            price: selectedShoePrice3
        };
    }

    // Check if shoe data is selected
    if (!shoeData) {
        alert("Please select a valid shoe.");
        return;
    }

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

    window.open(url, '_blank');
}
*/



document.getElementById("carrito-btn").addEventListener("click", function() {
    document.getElementById("pared-carrito").classList.toggle("abierta");
});

document.getElementById("cerrar-carrito").addEventListener("click", function() {
    document.getElementById("pared-carrito").classList.remove("abierta");
});





// Array con las imágenes que se mostrarán aleatoriamente
const imageArray = [
    "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5a2c6eb0-0647-4317-9160-4d5106f7408b/fecha-de-lanzamiento-del-dunk-low-white-and-university-red-cu1727-100.jpg",
    "https://static.nike.com/a/images/w_1280,q_auto,f_auto/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    
  ];
  
  // Seleccionar el elemento de la imagen
  const hoverImage = document.getElementById('hover-image');
  
  // Función para cambiar la imagen aleatoriamente
  function changeImage() {
    const randomIndex = Math.floor(Math.random() * imageArray.length); // Generar un índice aleatorio
    hoverImage.src = imageArray[randomIndex]; // Cambiar la fuente de la imagen
  }
  
  // Agregar el evento hover para cambiar la imagen
  document.querySelector('.nike-container').addEventListener('mouseenter', changeImage);
  
