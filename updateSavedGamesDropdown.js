// Function to update the score for a specific category
function updateScore(category, value) {
    const timestamp = new Date();
    currentGame[category].push({ timestamp, value });

    // Update the display
    document.getElementById(`${category}-score`).innerText = currentGame[category].length;

    // Optional: You can log the timestamped scores to the console for debugging
    console.log(`${category} at ${timestamp}: ${value}`);
}
// Function to update the scoreboard based on the current game state
function updateScoreboard() {
    Object.keys(currentGame).forEach((category) => {
        const scoreElement = document.getElementById(`${category}-score`);

        if (scoreElement) {
            scoreElement.innerText = currentGame[category].length;
        } else {
            console.error(`Element with ID ${category}-score not found.`);
        }
    });
}
// Function to save the current game
function saveGame() {
    // Assume localStorage is available
    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    savedGames.push({ ...currentGame }); // Save a copy of the current game
    localStorage.setItem('savedGames', JSON.stringify(savedGames));
    updateSavedGamesDropdown(savedGames);
}
// Function to load a saved game
function loadSavedGame() {
    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    const selectedIndex = document.getElementById('saved-games').selectedIndex;

    if (selectedIndex !== -1) {
        currentGame = { ...savedGames[selectedIndex] }; // Load a copy of the saved game
        updateScoreboard();
    }
}
// Function to rename a saved game
function renameGame() {
    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    const selectedIndex = document.getElementById('saved-games').selectedIndex;

    if (selectedIndex !== -1) {
        const newName = prompt('Enter a new name for the game:');

        if (newName !== null) {
            savedGames[selectedIndex].name = newName;
            localStorage.setItem('savedGames', JSON.stringify(savedGames));
            updateSavedGamesDropdown(savedGames);
        }
    }
}
// Function to update the saved games dropdown
function updateSavedGamesDropdown(savedGames) {
    const dropdown = document.getElementById('saved-games');
    dropdown.innerHTML = '';

    savedGames.forEach((game, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = game.name || `Game ${index + 1}`;
        dropdown.add(option);
    });
}
// Function to initialize tickers
function initializeTickers() {
    const tickerCategories = ['hits', 'dodges', 'blocks', 'catches', 'outs'];

    tickerCategories.forEach((category) => {
        const tickerElement = document.getElementById(`${category}-ticker`);

        if (tickerElement) {
            tickerElement.innerText = '0';
        } else {
            console.error(`Element with ID ${category}-ticker not found.`);
        }
    });
}
// Function to update tickers based on the current game state
function updateTickers() {
    const tickerCategories = ['hits', 'dodges', 'blocks', 'catches', 'outs'];

    tickerCategories.forEach((category) => {
        const tickerElement = document.getElementById(`${category}-ticker`);

        if (tickerElement) {
            tickerElement.innerText = currentGame[category].length;
        } else {
            console.error(`Element with ID ${category}-ticker not found.`);
        }
    });
}
// Initial setup
updateSavedGamesDropdown(JSON.parse(localStorage.getItem('savedGames')) || []);
initializeTickers();
updateScoreboard();
updateTickers();
// Function to update the score for a specific category
function updateScore(category, value) {
    const timestamp = new Date();
    currentGame[category].push({ timestamp, value });

    // Update the display
    document.getElementById(`${category}-score`).innerText = currentGame[category].length;

    // Optional: You can log the timestamped scores to the console for debugging
    console.log(`${category} at ${timestamp}: ${value}`);
}
