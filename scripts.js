document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Fear is not evil. It tells you what your weakness is. ~ Gildarts (Fairy Tail)",
        "Hard work is worthless for those that don’t believe in themselves. ~ Naruto Uzumaki",
        "Power comes in response to a need, not a desire. ~ Goku (Dragon Ball)",
        "A lesson without pain is meaningless. ~ Edward Elric (Fullmetal Alchemist)"
    ];

    // Selecionar um quote aleatório
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Adicionar o quote no footer
    const footer = document.querySelector("footer");
    const quoteElement = document.createElement("p");
    quoteElement.innerText = randomQuote;
    footer.appendChild(quoteElement);
});
