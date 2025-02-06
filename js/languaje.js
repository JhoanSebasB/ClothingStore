const translations = {
    en: {
        id: "en",
        frase: "Feel free to use whatever makes you feel UNIQUE.",
        opcionH: "Men",
        opcionM: "Women",
        opcionA: "All",
        terminos: "Terms and Conditions",
        politica: "Privacy Policy",
        Location: "Location",
        Follow: "Follow us",
        Payment: "Payment Methods",
        Support: "Support Channel",
        hombre: "Men",
        mujer: "Women",
        size: "Size:",
        herobutton: "Explore collection",
        herosub: "Style, comfort and quality in every step.",
        selectSizeColor: "Please select size and color before purchasing.",
        idiomaI: "English",
        idiomaE: "Spanish",
    },
    es: {
        id: "es",
        frase: "Ten la libertad de usar lo que te haga sentir ÚNICO.",
        opcionH: "Hombre",
        opcionM: "Mujer",
        opcionA: "Todos",
        terminos: "Términos y Condiciones",
        politica: "Política de Privacidad",
        Location: "Ubicación",
        Follow: "Síguenos",
        Payment: "Métodos de Pago",
        Support: "Canal de Soporte",
        hombre: "Hombre",
        mujer: "Mujer",
        size: "Tamaño:",
        herosub: "Estilo, confort y calidad en cada paso.",
        selectSizeColor: "Por favor, selecciona la talla y el color antes de comprar.",
        idiomaI: "Ingles",
        idiomaE: "Español",
    }
};

let currentLang = localStorage.getItem("lang") || "en"; // Carga el idioma guardado o usa inglés

document.getElementById("btn-es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));

function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    currentLang = lang;

    // Actualiza los elementos con ID únicos
    const uniqueIds = ["frase", "opcionH", "opcionM", "opcionA", "terminos", "politica", "Location", "Follow", "Payment", "Support", "herobutton", "herosub", "idiomaI", "idiomaE"];
    uniqueIds.forEach(id => {
        const element = document.getElementById(id);
        if (element && translations[lang][id]) {
            element.textContent = translations[lang][id];
        }
    });

    // Actualiza elementos con data-translation
    document.querySelectorAll("[data-translation]").forEach(element => {
        const key = element.getAttribute("data-translation");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Traduce automáticamente los mensajes de error si están visibles
    document.querySelectorAll(".shoe-details-message").forEach(element => {
        element.textContent = translations[lang].selectSizeColor;
    });

    // Llamada a otras funciones si es necesario
    setCarouselLanguage(lang);
}

// Inicializa el idioma al cargar la página
changeLanguage(currentLang);
