const translations = {
    en: {
        title: "Welcome to my Website",
        description: "This is a simple language switcher example."
    },
    nl: {
        title: "Catering -MEES-",
        description: "Wij zijn MEES, de cafetaria van het VISTA college Heerlen. Wij zorgen ervoor dat alle studenten en personeel van het VISTA college ten alle tijden eten en drinken kunnen halen voor een redelijke prijs. Met een gevarieerd assortiment aan verse snacks, broodjes en drankjes, is er voor ieder wat wils. Ons vriendelijke team staat altijd klaar om je snel en met een glimlach te helpen."
    }
};

function translate(lang) {
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("description").innerText = translations[lang].description;
}