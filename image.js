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
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/59f2c068-a00a-49b3-8f16-e59ab625c39b/fecha-de-lanzamiento-del-dunk-low-white-and-university-red-cu1727-100.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5a2c6eb0-0647-4317-9160-4d5106f7408b/fecha-de-lanzamiento-del-dunk-low-white-and-university-red-cu1727-100.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/717dcf88-ae67-49d2-807e-387abb332c3e/fecha-de-lanzamiento-del-dunk-low-white-and-university-red-cu1727-100.jpg"
    ],
     // Purple
     [
        "https://nikeco.vtexassets.com/arquivos/ids/628035-1280-auto?v=638550347320600000&width=150&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/614796-1280-auto?v=638549409135100000&width=150&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/621614-1280-auto?v=638550341020470000&width=150&height=auto&aspect=true"
    ]

];

const shoeairforce = [
    // Blanco
    [
        "https://nikeco.vtexassets.com/arquivos/ids/235120-1280-auto?v=638349756632900000&width=150&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/197130-1280-auto?v=638343774195200000&width=150&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/216386-1280-auto?v=638346288873630000&width=150&height=auto&aspect=true"
       
    ],
    // Negro
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/25228fd7-c5d0-40dd-8949-b441b82a27c2/air-force-1-07-fresh-dm0211-001.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/ca38a642-ec6e-450f-8935-f0d71f279d33/air-force-1-07-fresh-dm0211-001.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/a6b2de60-cc06-4757-88bb-5fc6556f816f/air-force-1-07-fresh-dm0211-001.jpg"
    ],
    
];

const shoeNike = [
    // Amarillo
    [
        "https://nikeco.vtexassets.com/arquivos/ids/691041-1200-auto?v=638623774829370000&width=1200&height=auto&aspect=true",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5678.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/91011.jpg"
    ],
    // Verde
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/1213.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/1415.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/1617.jpg"
    ]
];




let currentColorIndexHombre = 0; 
let currentImageIndexHombre = 0; 

let currentColorIndexMujer = 0; 
let currentImageIndexMujer = 0; 

let currentColorIndexNike = 0; 
let currentImageIndexNike = 0;


function changeCardImage(direction, imageId) {
    const imgElement = document.getElementById(imageId);
    let images;

    // Cambia la lógica de selección de imágenes dependiendo de la id
    if (imageId.includes('hombre')) {
        images = shoeColors[currentColorIndexHombre];
    } else if (imageId.includes('mujer')) {
        images = shoeairforce[currentColorIndexMujer];
    } else if (imageId.includes('nike')) {
        images = shoeNike[currentColorIndexNike];
    }

    // Lógica de cambio de imagen
    if (direction === 'prev') {
        if (imageId.includes('hombre')) {
            currentImageIndexHombre = (currentImageIndexHombre - 1 + images.length) % images.length;
        } else if (imageId.includes('mujer')) {
            currentImageIndexMujer = (currentImageIndexMujer - 1 + images.length) % images.length;
        } else if (imageId.includes('nike')) {
            currentImageIndexNike = (currentImageIndexNike - 1 + images.length) % images.length;
        }
    } else if (direction === 'next') {
        if (imageId.includes('hombre')) {
            currentImageIndexHombre = (currentImageIndexHombre + 1) % images.length;
        } else if (imageId.includes('mujer')) {
            currentImageIndexMujer = (currentImageIndexMujer + 1) % images.length;
        } else if (imageId.includes('nike')) {
            currentImageIndexNike = (currentImageIndexNike + 1) % images.length;
        }
    }

    // Actualizar la imagen
    imgElement.src = images[imageId.includes('hombre') ? currentImageIndexHombre : imageId.includes('mujer') ? currentImageIndexMujer : currentImageIndexNike];
}


function changeShoeColor(colorIndex, imageId) {
    if (imageId.includes('hombre')) {
        currentColorIndexHombre = colorIndex;
        currentImageIndexHombre = 0;
    } else if (imageId.includes('mujer')) {
        currentColorIndexMujer = colorIndex;
        currentImageIndexMujer = 0;
    } else if (imageId.includes('nike')) {
        currentColorIndexNike = colorIndex;
        currentImageIndexNike = 0;
    }

    const imgElement = document.getElementById(imageId);
    let images;

    if (imageId.includes('hombre')) {
        images = shoeColors[currentColorIndexHombre];
    } else if (imageId.includes('mujer')) {
        images = shoeairforce[currentColorIndexMujer];
    } else if (imageId.includes('nike')) {
        images = shoeNike[currentColorIndexNike];
    }

    imgElement.src = images[0];
}


window.onload = function() {
    const imgElementHombre = document.getElementById('card-image-1-hombre');
    const imgElementMujer = document.getElementById('card-image-2-mujer');
    const imgElementNike = document.getElementById('card-image-3-nike');

    imgElementHombre.src = shoeColors[currentColorIndexHombre][currentImageIndexHombre]; 
    imgElementMujer.src = shoeairforce[currentColorIndexMujer][currentImageIndexMujer]; 
    imgElementNike.src = shoeNike[currentColorIndexNike][currentImageIndexNike]; 
};




/* mantener el cambio de los zapatos al recargar la pagina 

// Función para establecer cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // días
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split(';');
    for (let cookie of cookiesArray) {
        cookie = cookie.trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Guardar la selección de color o imagen en cookies
function saveSelection(colorIndex, imageId) {
    const selectionKey = imageId.includes('hombre') ? 'colorHombre' : 'colorMujer';
    setCookie(selectionKey, colorIndex, 30); // Guardar cookie por 30 días
}

// Leer las cookies al cargar la página y aplicar la selección guardada
window.onload = function() {
    const savedColorHombre = getCookie('colorHombre');
    const savedColorMujer = getCookie('colorMujer');
    
    if (savedColorHombre) {
        currentColorIndexHombre = parseInt(savedColorHombre);
        changeShoeColor(currentColorIndexHombre, 'card-image-1-hombre');
    }
    if (savedColorMujer) {
        currentColorIndexMujer = parseInt(savedColorMujer);
        changeShoeColor(currentColorIndexMujer, 'card-image-2-mujer');
    }

    const imgElementHombre = document.getElementById('card-image-1-hombre');
    const imgElementMujer = document.getElementById('card-image-2-mujer');
    imgElementHombre.src = shoeColors[currentColorIndexHombre][currentImageIndexHombre];
    imgElementMujer.src = shoeairforce[currentColorIndexMujer][currentImageIndexMujer];
};

// Llamada a saveSelection cuando un usuario cambia el color
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

    // Guardar la selección en cookies
    saveSelection(colorIndex, imageId);
}
*/
