/* Cambiar imágenes en las cards */ 


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
    ],
    // green
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2060d165-a7df-4792-90b3-1fab22c4d53e/fecha-de-lanzamiento-de-los-dunk-low-varsity-green-dd1391-101.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/f97ac93f-76da-4861-b00a-6d75555629a1/fecha-de-lanzamiento-de-los-dunk-low-varsity-green-dd1391-101.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/220d9864-d99e-488e-8fd8-54548e6d2a4b/fecha-de-lanzamiento-de-los-dunk-low-varsity-green-dd1391-101.jpg"
    ],
     // Dusty Olive
     [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/0dfd22b1-ec58-4475-8487-6950f5947f8b/fecha-de-lanzamiento-del-dunk-low-dusty-olive-dh5360-300.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/e4aa4acc-4d60-4a35-87fa-a180ea4626ef/fecha-de-lanzamiento-del-dunk-low-dusty-olive-dh5360-300.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/7adbf446-c4b1-454c-b865-ac5bcde64b93/fecha-de-lanzamiento-del-dunk-low-dusty-olive-dh5360-300.jpg"
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
    //Coconut milk
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/956102de-72cf-4c3f-9855-d26d83474f0f/fecha-de-lanzamiento-del-air-force-1-07-coconut-milk-dm0211-101.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/ffd1fda2-bbbc-48a8-bd29-913a7be5cc09/fecha-de-lanzamiento-del-air-force-1-07-coconut-milk-dm0211-101.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/e400e54b-4b84-4ad9-9b37-f176fb8ecf2b/fecha-de-lanzamiento-del-air-force-1-07-coconut-milk-dm0211-101.jpg"
    ],
    //Oil Green
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/c33cee88-cacd-43bd-9355-54a4be958594/fecha-de-lanzamiento-del-air-force-1-07-oil-green-fb8876-300.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/4435aebf-5273-48b7-83da-a8cdd491f811/fecha-de-lanzamiento-del-air-force-1-07-oil-green-fb8876-300.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5b49c0e7-5708-4156-8b5f-8e0ac09472f0/fecha-de-lanzamiento-del-air-force-1-07-oil-green-fb8876-300.jpg"
    ],
];

const freemetconsix = [
    // Blanco
    [
        "https://nikeco.vtexassets.com/arquivos/ids/691041-1200-auto?v=638623774829370000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/677983-1200-auto?v=638623624045400000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/684610-1200-auto?v=638623759274430000&width=1200&height=auto&aspect=true"
    ],
    // Negros - blancos
    [
        "https://nikeco.vtexassets.com/arquivos/ids/704695-1200-auto?v=638628803305600000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/702688-1200-auto?v=638628787023100000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/703777-1200-auto?v=638628799300230000&width=1200&height=auto&aspect=true"
    ]
];

const airjordanlow = [
    // Blanco
    [
        "https://nikeco.vtexassets.com/arquivos/ids/693135-1200-auto?v=638623776951400000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/678724-1200-auto?v=638623626098130000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/686014-1200-auto?v=638623761324000000&width=1200&height=auto&aspect=true"
    ],
    // Verde
    [
        "https://nikeco.vtexassets.com/arquivos/ids/693196-1200-auto?v=638623777015130000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/678746-1200-auto?v=638623626155870000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/686060-1200-auto?v=638623761387670000&width=1200&height=auto&aspect=true"
    ],
    // pink
    [
        "https://nikeco.vtexassets.com/arquivos/ids/693169-1200-auto?v=638623776988400000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/678735-1200-auto?v=638623626125070000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/686035-1200-auto?v=638623761353330000&width=1200&height=auto&aspect=true"
    ],
    // morado
    [
        "https://nikeco.vtexassets.com/arquivos/ids/633869-1200-auto?v=638550351938730000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/616101-1200-auto?v=638549412618670000&width=1200&height=auto&aspect=true",
        "https://nikeco.vtexassets.com/arquivos/ids/625613-1200-auto?v=638550345218830000&width=1200&height=auto&aspect=true"
    ],
];
const airjordanhighog = [
    // black - red
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/51426d43-2c8c-46ad-abcb-f77a4012e8c9/fecha-de-lanzamiento-del-air-jordan-1-high-og-satin-bred-para-mujer-fd4810-061.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/60d08fdd-d528-4305-994b-ab655665d769/fecha-de-lanzamiento-del-air-jordan-1-high-og-satin-bred-para-mujer-fd4810-061.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/7677bc69-2135-4e36-ac3b-6641a3ffe25e/fecha-de-lanzamiento-del-air-jordan-1-high-og-satin-bred-para-mujer-fd4810-061.jpg"
    ],
    // Blanco - negro
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/0764eb6e-a137-4f7b-ba93-28dd7daa39c0/fecha-de-lanzamiento-del-air-jordan-1-high-og-black-white-dz5485-010.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2b49243f-1c69-40e1-af12-5f35e37536cb/fecha-de-lanzamiento-del-air-jordan-1-high-og-black-white-dz5485-010.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/53eb5297-a087-40cc-aec0-d0eea51e2092/fecha-de-lanzamiento-del-air-jordan-1-high-og-black-white-dz5485-010.jpg"
    ],
    // blue
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/88408d57-3d0f-4217-8eda-de4a6b628bd5/fecha-de-lanzamiento-del-air-jordan-1-high-university-blue-dz5485-400.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/ea7b8d93-0ec3-4497-b578-569e2b561a22/fecha-de-lanzamiento-del-air-jordan-1-high-university-blue-dz5485-400.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/ed2746e5-16b0-490a-a56f-a466cfe7ceb1/fecha-de-lanzamiento-del-air-jordan-1-high-university-blue-dz5485-400.jpg"
    ],
    // verde
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5da4b45b-3fcd-4892-90a2-b783425c8950/fecha-de-lanzamiento-del-air-jordan-1-high-black-and-lucky-green-dz5485-031.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2156e314-9889-4bdc-962d-7350f66cdf7f/fecha-de-lanzamiento-del-air-jordan-1-high-black-and-lucky-green-dz5485-031.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/b70a0f07-ad8e-420c-aea3-71c8b43e55ff/fecha-de-lanzamiento-del-air-jordan-1-high-black-and-lucky-green-dz5485-031.jpg"
    ],
    // morado
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2c0f95d4-6400-40ef-9bc6-f5224c7f5460/fecha-de-lanzamiento-de-los-air-jordan-1-latte-para-mujer-fd2596-021.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/022c7053-5c55-4bc4-8cdc-72c6e8f95a5e/fecha-de-lanzamiento-de-los-air-jordan-1-latte-para-mujer-fd2596-021.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/60471aac-5614-4b8e-90db-f75611ca1c63/fecha-de-lanzamiento-de-los-air-jordan-1-latte-para-mujer-fd2596-021.jpg"
    ],
    // marron - negro
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5d13078c-28c4-4473-a207-ec93f3a3a8d9/fecha-de-lanzamiento-del-air-jordan-1-palomino-dz5485-020.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/6acedb46-7fa4-40e1-9bd2-dbb651e986a3/fecha-de-lanzamiento-del-air-jordan-1-palomino-dz5485-020.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/f2afb7d6-3fcf-4d18-adba-9728971577fe/fecha-de-lanzamiento-del-air-jordan-1-palomino-dz5485-020.jpg"
    ],
    // orange
    [
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/0119af08-f91d-46d5-bc9e-6bccd7527462/fecha-de-lanzamiento-del-air-jordan-1-high-og-yellow-ochre-dz5485-701.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/acf9cf41-a9bc-4e6a-b98a-7a38bb163f31/fecha-de-lanzamiento-del-air-jordan-1-high-og-yellow-ochre-dz5485-701.jpg",
        "https://static.nike.com/a/images/w_1280,q_auto,f_auto/1f0f6e57-4cfa-4ff4-a08c-0052333c8548/fecha-de-lanzamiento-del-air-jordan-1-high-og-yellow-ochre-dz5485-701.jpgs"
    ],
];

let currentColorIndexHombre = 0; 
let currentImageIndexHombre = 0; 

let currentColorIndexMujer = 0; 
let currentImageIndexMujer = 0; 

let currentColorIndexNike = 0; 
let currentImageIndexNike = 0;

let currentColorIndexairjordanlow = 0; 
let currentImageIndexairjordanlow = 0;

let currentColorIndexairjordanhighog = 0; 
let currentImageIndexairjordanhighog = 0;

function changeCardImage(direction, imageId) {
    const imgElement = document.getElementById(imageId);
    let images;
    let currentIndex;

    // Definir las imágenes y los índices actuales según el tipo de imagen
    if (imageId.includes('hombre')) {
        images = shoeColors[currentColorIndexHombre];
        currentIndex = currentImageIndexHombre;
    } else if (imageId.includes('mujer')) {
        images = shoeairforce[currentColorIndexMujer];
        currentIndex = currentImageIndexMujer;
    } else if (imageId.includes('nike')) {
        images = freemetconsix[currentColorIndexNike];
        currentIndex = currentImageIndexNike;
    } else if (imageId.includes('airjordanlow')) {
        images = airjordanlow[currentColorIndexairjordanlow];
        currentIndex = currentImageIndexairjordanlow;
    } else if (imageId.includes('airjordanhighog')) {
        images = airjordanhighog[currentColorIndexairjordanhighog];
        currentIndex = currentImageIndexairjordanhighog;
    }

    // Cambiar el índice dependiendo de la dirección
    if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Actualizar la imagen con el nuevo índice
    imgElement.src = images[currentIndex];

    // Guardar el nuevo índice según el tipo de imagen
    if (imageId.includes('hombre')) {
        currentImageIndexHombre = currentIndex;
    } else if (imageId.includes('mujer')) {
        currentImageIndexMujer = currentIndex;
    } else if (imageId.includes('nike')) {
        currentImageIndexNike = currentIndex;
    } else if (imageId.includes('airjordanlow')) {
        currentImageIndexairjordanlow = currentIndex;
    } else if (imageId.includes('airjordanhighog')) {
        currentImageIndexairjordanhighog = currentIndex;
    }
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
    } else if (imageId.includes('airjordanlow')) {
        currentColorIndexairjordanlow = colorIndex;
        currentImageIndexairjordanlow = 0;
    } else if (imageId.includes('airjordanhighog')) {
        currentColorIndexairjordanhighog = colorIndex;
        currentImageIndexairjordanhighog= 0;
    }

    const imgElement = document.getElementById(imageId);
    let images;

    if (imageId.includes('hombre')) {
        images = shoeColors[currentColorIndexHombre];
    } else if (imageId.includes('mujer')) {
        images = shoeairforce[currentColorIndexMujer];
    } else if (imageId.includes('nike')) {
        images = freemetconsix[currentColorIndexNike];
    } else if (imageId.includes('airjordanlow')) {
        images = airjordanlow[currentColorIndexairjordanlow];
    } else if (imageId.includes('airjordanhighog')) {
        images = airjordanhighog[currentColorIndexairjordanhighog];
    }

    imgElement.src = images[0];
}




window.onload = function() {
    const imgElementHombre = document.getElementById('card-image-1-hombre');
    const imgElementMujer = document.getElementById('card-image-2-mujer');
    const imgElementNike = document.getElementById('card-image-3-nike');
    const imgElementairjordanlow = document.getElementById('card-image-4-airjordanlow');
    const imgElementairjordanhighog = document.getElementById('card-image-5-airjordanhighog');

    imgElementHombre.src = shoeColors[currentColorIndexHombre][currentImageIndexHombre]; 
    imgElementMujer.src = shoeairforce[currentColorIndexMujer][currentImageIndexMujer]; 
    imgElementNike.src = freemetconsix[currentColorIndexNike][currentImageIndexNike]; 
    imgElementairjordanlow.src = airjordanlow[currentColorIndexairjordanlow][currentImageIndexairjordanlow]; 
    imgElementairjordanhighog.src = airjordanhighog[currentColorIndexairjordanhighog][currentImageIndexairjordanhighog]; 
};





