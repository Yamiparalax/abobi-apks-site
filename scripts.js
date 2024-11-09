document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Fear is not evil. It tells you what your weakness is. ~ Gildarts (Fairy Tail)",
        "Hard work is worthless for those that don’t believe in themselves. ~ Naruto Uzumaki",
        "Power comes in response to a need, not a desire. ~ Goku (Dragon Ball)",
        "A lesson without pain is meaningless. ~ Edward Elric (Fullmetal Alchemist)",
        "In our society, letting others find out that you’re a nice person is a very risky move. It’s extremely likely that someone would take advantage of that. ~ Hitagi Senjougahara (Monogatari)",
        "Forgetting is like a wound. The wound may heal, but it has already left a scar. ~ Monkey D. Luffy (One Piece)",
        "A person becomes strong when they have someone they want to protect. ~ Haku (Naruto)",
        "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully. ~ Koro-sensei (Assassination Classroom)"
    ];

    // Selecionar uma citação aleatória
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Adicionar a citação ao footer
    const footer = document.querySelector("footer");
    if (footer) {
        const quoteElement = document.createElement("p");
        quoteElement.innerText = randomQuote;
        quoteElement.style.fontStyle = "italic"; // Estilizar a citação como itálica
        quoteElement.style.color = "#f3e5f5"; // Cor combinando com o tema do footer
        quoteElement.style.marginTop = "10px"; // Espaçamento acima da citação
        quoteElement.style.fontSize = "0.9rem"; // Fonte levemente menor para integração sutil
        footer.appendChild(quoteElement);
    } else {
        console.error("Footer element not found. Make sure your HTML includes a footer.");
    }
});
