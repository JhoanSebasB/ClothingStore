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
    index = (index + 1) % messages.length; // Cicla los mensajes
}

// Inicializa el texto y actualiza cada 8 segundos
updateText();
setInterval(updateText, 5000); // Sincronizado con la animación
