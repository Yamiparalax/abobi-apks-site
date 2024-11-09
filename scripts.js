document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Fear is not evil. It tells you what your weakness is. ~ Gildarts (Fairy Tail)",
        "Hard work is worthless for those that don’t believe in themselves. ~ Naruto Uzumaki",
        "Power comes in response to a need, not a desire. ~ Goku (Dragon Ball)",
        "A lesson without pain is meaningless. ~ Edward Elric (Fullmetal Alchemist)"
    ];

    // Selecionar uma citação aleatória
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Adicionar a citação ao footer
    const footer = document.querySelector("footer");
    if (footer) {
        const quoteElement = document.createElement("p");
        quoteElement.innerText = randomQuote;
        footer.appendChild(quoteElement);
    }

    // Adicionar os botões de download dinamicamente
    const idMapUrl = "id_map.json";

    fetch(idMapUrl)
        .then(response => response.json())
        .then(idMap => {
            const appsSection = document.querySelector("#apps-section");
            const gamesSection = document.querySelector("#games-section");

            if (idMap.apps) {
                Object.keys(idMap.apps).forEach(appId => {
                    const appJsonPath = idMap.apps[appId];
                    fetch(appJsonPath)
                        .then(response => response.json())
                        .then(appData => {
                            const button = document.createElement("a");
                            button.href = idMap.drive_links[appId]; // Link direto do Drive
                            button.textContent = `${appData["App Name"]} (${appData["Size"]})`;
                            button.classList.add("btn", "btn-success", "m-2");
                            appsSection.appendChild(button);
                        })
                        .catch(error => console.error(`Erro ao carregar o JSON ${appJsonPath}:`, error));
                });
            }

            if (idMap.games) {
                Object.keys(idMap.games).forEach(gameId => {
                    const gameJsonPath = idMap.games[gameId];
                    fetch(gameJsonPath)
                        .then(response => response.json())
                        .then(gameData => {
                            const button = document.createElement("a");
                            button.href = idMap.drive_links[gameId]; // Link direto do Drive
                            button.textContent = `${gameData["App Name"]} (${gameData["Size"]})`;
                            button.classList.add("btn", "btn-primary", "m-2");
                            gamesSection.appendChild(button);
                        })
                        .catch(error => console.error(`Erro ao carregar o JSON ${gameJsonPath}:`, error));
                });
            }
        })
        .catch(error => console.error("Erro ao carregar o id_map.json:", error));
});
