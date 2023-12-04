
// LINK TIME STAMPS with each button press
// when you click catch it saves timestamp + daate type
// ability to save the gamae with date logged ie timestamps in colums?
// create a function to pull timestamps with button presses?
// can I even 
//

// Sample data structure for a game
let currentGame = {
    catches: [],
    dodges: [],
    outs: [],
    hits: [],
    blocks: [],
};

// Function to update the scoreboard based on the current game state
function updateScoreboard() {
    Object.keys(currentGame).forEach((category) => {
        document.getElementById(`${category}-score`).innerText = currentGame[category].length;
    });
}
// Function to save the current game
function saveGame() {
    // Assume localStorage is available
    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    savedGames.push(currentGame);
    localStorage.setItem('savedGames', JSON.stringify(savedGames));
    updateSavedGamesDropdown(savedGames);
}

// Function to load a saved game
function loadSavedGame() {
    const savedGames = JSON.parse(localStorage.getItem('savedGames')) || [];
    const selectedIndex = document.getElementById('saved-games').selectedIndex;
    if (selectedIndex !== -1) {
        currentGame = savedGames[selectedIndex];
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


// Initial setup
updateSavedGamesDropdown(JSON.parse(localStorage.getItem('savedGames')) || []);
updateScoreboard();

  // Load the YouTube Iframe API asynchronously
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Variables to store the player and the video ID
  let player;
  const videoId = videoId.link("https://www.youtube.com/watch?v=b8NlkIEeIQM&t=317s");

  // Function to open the video window
  function openVideoWindow() {
    // Show the video window
    const videoWindow = document.getElementById('videoWindow');
    videoWindow.style.display = 'block';

    // Initialize the YouTube player if the API is already loaded
    if (window.YT && YT.Player) {
        initYouTubePlayer();
    } else {
        // If the API is not loaded, wait for it to load
        window.onYouTubeIframeAPIReady = initYouTubePlayer;
    }
}

      // Function to initialize the YouTube player
function initYouTubePlayer() {
    if (!player) {
        player = new YT.Player('videoWindow', {
            height: '360',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

// Function called when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Function called when the player's state changes
function onPlayerStateChange(event) {
    // You can add custom logic here based on the player's state
}