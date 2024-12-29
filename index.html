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
const messages = ["Envio gratis con compras superiores a $199.900", "Devoluciones Gratis ", "Envio gratis con compras superiores a $199.900", "Devoluciones Gratis "];
let index = 0;

const carouselText = document.getElementById("carouselText");

function updateText() {
    carouselText.textContent = messages[index];
    index = (index + 1) % messages.length; 
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
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden'); // Muestra las tarjetas
            } else {
                card.classList.add('hidden'); // Oculta las tarjetas
            }
        });
    });
});



/* Cambiar imagenes en las cards */ 


const shoeColors = [
    // Negro
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/8636ce95-74a9-40b5-b83a-2d095d8faac2/dunk-low-black-release-date.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-black-release-date.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/810eecdd-4534-4846-85c5-b977d9284d0e/dunk-low-black-release-date.jpg"
    ],
    // Azul
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/b7989758-77dd-43e0-b5ad-5377f9574aa5/dunk-low-university-blue-release-date.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/63c770a7-fc62-44e8-a7ba-cd47d130d448/dunk-low-university-blue-release-date.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/d5b698f4-3351-4d97-a054-f88c1eeb7379/dunk-low-university-blue-release-date.jpg"
    ],
    // Blanco
    [
        "https://i.imgur.com/4xVwJGy.png",
        "https://i.imgur.com/sfBChVm.png",
        "https://i.imgur.com/QJ9Y48C.png"
    ]
];

let currentColorIndexHombre = 0; // Índice del color actual para hombre
let currentImageIndexHombre = 0; // Índice de la imagen actual para hombre

let currentColorIndexMujer = 0; // Índice del color actual para mujer
let currentImageIndexMujer = 0; // Índice de la imagen actual para mujer

// Cambiar imagen dentro del mismo color
function changeCardImage(direction, imageId) {
    const imgElement = document.getElementById(imageId);
    const images = imageId.includes('hombre') ? shoeColors[currentColorIndexHombre] : shoeColors[currentColorIndexMujer];

    if (direction === 'prev') {
        if (imageId.includes('hombre')) {
            currentImageIndexHombre = (currentImageIndexHombre - 1 + images.length) % images.length;
        } else {
            currentImageIndexMujer = (currentImageIndexMujer - 1 + images.length) % images.length;
        }
    } else if (direction === 'next') {
        if (imageId.includes('hombre')) {
            currentImageIndexHombre = (currentImageIndexHombre + 1) % images.length;
        } else {
            currentImageIndexMujer = (currentImageIndexMujer + 1) % images.length;
        }
    }

    imgElement.src = images[imageId.includes('hombre') ? currentImageIndexHombre : currentImageIndexMujer];
}

// Cambiar el color del zapato (y reiniciar el índice de la imagen)
function changeShoeColor(colorIndex, imageId) {
    if (imageId.includes('hombre')) {
        currentColorIndexHombre = colorIndex;
        currentImageIndexHombre = 0;
    } else {
        currentColorIndexMujer = colorIndex;
        currentImageIndexMujer = 0;
    }

    const imgElement = document.getElementById(imageId);
    const images = imageId.includes('hombre') ? shoeColors[currentColorIndexHombre] : shoeColors[currentColorIndexMujer];
    imgElement.src = images[0];
}

// Asegurarse de que las imágenes se carguen correctamente al recargar la página
window.onload = function() {
    const imgElementHombre = document.getElementById('card-image-1-hombre');
    const imgElementMujer = document.getElementById('card-image-1-mujer');
    imgElementHombre.src = shoeColors[currentColorIndexHombre][currentImageIndexHombre]; // Inicializa la imagen de hombre
    imgElementMujer.src = shoeColors[currentColorIndexMujer][currentImageIndexMujer]; // Inicializa la imagen de mujer
}


/* COOKIES */

/* Menu Scroll */


        
