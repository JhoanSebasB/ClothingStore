const translations = {
    en: {
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
    },
    es: {
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
    }
};

document.getElementById("btn-es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));

function changeLanguage(lang) {
    // Actualiza elementos con id únicos
    const uniqueIds = ["frase", "opcionH", "opcionM", "opcionA", "terminos", "politica", "Location", "Follow", "Payment", "Support"];
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

    // Llama a otras funciones relacionadas, si las necesitas
    setCarouselLanguage(lang);
}

// Inicializa el idioma por defecto
changeLanguage("en");
