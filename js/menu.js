/* Menu Slider */

const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})




/* abrir Carrito */

document.getElementById("carrito-btn").addEventListener("click", function() {
    document.getElementById("pared-carrito").classList.toggle("abierta");
});

document.getElementById("cerrar-carrito").addEventListener("click", function() {
    document.getElementById("pared-carrito").classList.remove("abierta");
});






/* Carrusel informativo */

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
function updateCarouselText(lang) {
    const carouselTextElement = document.getElementById("carouselText");
    carouselTextElement.innerHTML = ""; // Limpiar contenido previo

    // Insertar cada mensaje con el ícono
    carouselMessages[lang].forEach(msg => {
        const messageElement = document.createElement("p");
        messageElement.textContent = msg; // Agregar el mensaje
        carouselTextElement.appendChild(messageElement);
    });
}

let index = 0;
let currentLanguage = "es";  // Definir el idioma actual

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







/* Cambio en la imagen principal */

const images = [
    "https://static.nike.com/a/images/w_1280,q_auto,f_auto/5a2c6eb0-0647-4317-9160-4d5106f7408b/fecha-de-lanzamiento-del-dunk-low-white-and-university-red-cu1727-100.jpg",
    "https://static.nike.com/a/images/w_1280,q_auto,f_auto/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-black-release-date.jpg",
    "https://static.nike.com/a/images/w_1280,q_auto,f_auto/63c770a7-fc62-44e8-a7ba-cd47d130d448/dunk-low-university-blue-release-date.jpg"
  ];

  let currentImageIndex = 0;
  const imageElement = document.getElementById('img-p');

  function changeImage() {
    // Transición suave para cambiar la imagen
    imageElement.style.opacity = 0;
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imageElement.src = images[currentImageIndex];
      imageElement.style.opacity = 1;
    }, 500); // Tiempo sincronizado con la transición
  }

  setInterval(changeImage, 3000);
















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





/* Cambiar idioma */


const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const opciones = document.querySelectorAll('.opcion');

// Alternar visibilidad de la lista de idiomas
idiomaActual.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    listaIdiomas.classList.toggle('toggle');
});

// Cambiar idioma al seleccionar una opción
opciones.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const iconoActual = idiomaActual.querySelector('.fi'); // Icono del idioma actual
        const nuevoIcono = opcion.querySelector('.fi'); // Icono del idioma seleccionado

        // Verificar si el icono seleccionado es diferente al actual
        if (iconoActual.className !== nuevoIcono.className) {
            // Intercambiar el icono del idioma actual con el seleccionado
            iconoActual.className = nuevoIcono.className;
        }

        // Ocultar la lista de idiomas después de seleccionar uno
        listaIdiomas.classList.remove('toggle');
    });
});

