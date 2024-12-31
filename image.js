/* Cambiar imagenes en las cards */ 


// Arreglos de imágenes para cada categoría
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
    // Rojo
    [
        "https://i.imgur.com/4xVwJGy.png",
        "https://i.imgur.com/sfBChVm.png",
        "https://i.imgur.com/QJ9Y48C.png"
    ]
];

const shoeairforce = [
    // Negro
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/63a7787f-7c17-48a7-9b49-e91e322e7880/air-force-1-low-white-ib4025-100-release-date.jpg",
        "https://i.imgur.com/uxbSgbk.png",
        "https://i.imgur.com/Rdq7RlT.jpg"
       
    ],
    // Azul
    [
        "https://i.imgur.com/JtTwQ1D.jpg",
        "https://i.imgur.com/lzFKY3Q.jpg",
        "https://i.imgur.com/UbStAzd.jpg"
    ],
    // Rojo
    [
        "https://i.imgur.com/9Z2Vkft.jpg",
        "https://i.imgur.com/98oL8iP.jpg",
        "https://i.imgur.com/LE2vHzb.jpg"
    ]
];


let currentColorIndexHombre = 0; 
let currentImageIndexHombre = 0; 

let currentColorIndexMujer = 0; 
let currentImageIndexMujer = 0; 


function changeCardImage(direction, imageId) {
    const imgElement = document.getElementById(imageId);
    const images = imageId.includes('hombre') ? shoeColors[currentColorIndexHombre] : shoeairforce[currentColorIndexMujer];

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


function changeShoeColor(colorIndex, imageId) {
    if (imageId.includes('hombre')) {
        currentColorIndexHombre = colorIndex;
        currentImageIndexHombre = 0;
    } else {
        currentColorIndexMujer = colorIndex;
        currentImageIndexMujer = 0;
    }

    const imgElement = document.getElementById(imageId);
    const images = imageId.includes('hombre') ? shoeColors[currentColorIndexHombre] : shoeairforce[currentColorIndexMujer];
    imgElement.src = images[0];
}


window.onload = function() {
    const imgElementHombre = document.getElementById('card-image-1-hombre');
    const imgElementMujer = document.getElementById('card-image-2-mujer');
    imgElementHombre.src = shoeColors[currentColorIndexHombre][currentImageIndexHombre]; 
    imgElementMujer.src = shoeairforce[currentColorIndexMujer][currentImageIndexMujer]; 
};