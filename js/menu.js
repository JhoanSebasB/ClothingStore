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

