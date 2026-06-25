// --- Game State ---
let currentGameLocation = "Entrance Hall";
let cluesFound = 0;
let notebookEntries = []; // Initialize empty, populate on setup
// More suspects for variety, similar to classic board games
let suspects = ["Mr. Black", "Mrs. White", "Colonel Mustard", "Professor Plum", "Miss Scarlett", "Reverend Green"];
let currentSuspectsInRoom = {}; // To track which suspects are in which room
let investigatedRooms = {}; // Track rooms already investigated to disable repeated investigation

// --- DOM Elements ---
const currentLocationDisplay = document.getElementById("currentLocation");
const notebookContentDisplay = document.getElementById("notebookContent");
const investigateButton = document.getElementById("investigateButton");
const interrogateButton = document.getElementById("interrogateButton");
const accusationInput = document.getElementById("accusationInput");
const accusationButton = document.getElementById("accusationButton");
const roomElements = document.querySelectorAll('.room[data-room]'); // All rooms with data-room attribute
const toastContainer = document.getElementById("toastContainer");

// --- Helper Functions ---
function showToast(message, duration = 3000) {
    toastContainer.textContent = message;
    toastContainer.classList.add('show');
    setTimeout(() => {
        toastContainer.classList.remove('show');
    }, duration);
}

function addNotebookEntry(entry) {
    notebookEntries.push(entry);
    // Keep notebook manageable, maybe last 15-20 entries
    if (notebookEntries.length > 20) {
        notebookEntries.shift();
    }
    updateNotebookDisplay();
}

function updateNotebookDisplay() {
    notebookContentDisplay.innerHTML = notebookEntries.join("<br>");
}

function updatePlayerLocation(newLocation) {
    // Remove highlight from old location
    roomElements.forEach(room => {
        room.classList.remove('current-location');
    });

    // Find and highlight the new location
    const newLocationElement = Array.from(roomElements).find(room => room.dataset.room === newLocation);
    if (newLocationElement) {
        newLocationElement.classList.add('current-location');
    }

    currentGameLocation = newLocation;
    currentLocationDisplay.textContent = currentGameLocation;
    updateActionButtons();
}

function updateActionButtons() {
    const roomKey = currentGameLocation.replace(/\s+/g, '-').toLowerCase(); // e.g., "entrance-hall"

    // Enable investigate if not in Entrance Hall and room hasn't been fully investigated
    investigateButton.disabled = (currentGameLocation === "Entrance Hall" || investigatedRooms[roomKey]);

    // Enable interrogate if current room is not Entrance Hall and there are suspects
    // In a real game, you'd check if suspects are actually in this room
    const suspectsInCurrentRoom = currentSuspectsInRoom[Object.keys(currentSuspectsInRoom).find(room => room.toLowerCase().replace(/\s+/g, '-') === roomKey)] || [];
    interrogateButton.disabled = (currentGameLocation === "Entrance Hall" || suspectsInCurrentRoom.length === 0);

    // Enable accusation if player has found a decent number of clues
    accusationButton.disabled = (cluesFound < 3); // Simple condition: need at least 3 clues to accuse
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// --- Game Mechanics Functions ---

function initializeGame() {
    // Set initial state
    updatePlayerLocation(currentGameLocation);
    addNotebookEntry(`Welcome to Crimson Manor. A terrible crime has been committed.`);
    addNotebookEntry(`Your goal: Identify the culprit and their method.`);

    // Randomly place suspects in rooms (excluding Entrance Hall)
    // Ensure at least one suspect per room for interrogation to be viable.
    const allRoomKeys = ["library", "kitchen", "garden", "study", "cellar"]; // Corresponding keys for rooms
    suspects.forEach((suspect, index) => {
        const roomKey = allRoomKeys[index % allRoomKeys.length]; // Distribute suspects evenly across rooms
        if (!currentSuspectsInRoom[roomKey]) {
            currentSuspectsInRoom[roomKey] = [];
        }
        currentSuspectsInRoom[roomKey].push(suspect);
    });
    // Shuffle suspect order within each room for variety
    for (const roomKey in currentSuspectsInRoom) {
        currentSuspectsInRoom[roomKey].sort(() => Math.random() - 0.5);
    }
    console.log("Suspects placed:", currentSuspectsInRoom); // For debugging

    updateNotebookDisplay();
    updateActionButtons();
}

function investigateRoom() {
    if (investigateButton.disabled) return;

    const roomKey = currentGameLocation.replace(/\s+/g, '-').toLowerCase();
    investigatedRooms[roomKey] = true; // Mark room as investigated

    addNotebookEntry(`Investigated the ${currentGameLocation}.`);
    cluesFound++;
    // Update the first line of notebook to show current clue count
    if (notebookEntries.length > 0) {
        notebookEntries[0] = `Clues found: ${cluesFound}`;
    } else {
        notebookEntries.push(`Clues found: ${cluesFound}`); // Should not happen if initialized correctly
    }

    const randomDiscovery = Math.random();
    if (randomDiscovery < 0.5) {
        const clue = getRandomElement([
            "A dropped handkerchief with a monogram.",
            "A cryptic note with strange symbols.",
            "A broken piece of expensive jewelry.",
            "Muddy footprints leading away from the scene.",
            "A faint, unusual scent of almond."
        ]);
        addNotebookEntry(`Found a clue in the ${currentGameLocation}: "${clue}"`);
        showToast(`New Clue Found!`);
    } else if (randomDiscovery < 0.75) {
        // Try to find a suspect that might be in this room for a sighting
        const suspectsInThisRoom = currentSuspectsInRoom[roomKey];
        if (suspectsInThisRoom && suspectsInThisRoom.length > 0) {
            const potentialSuspect = getRandomElement(suspectsInThisRoom);
            addNotebookEntry(`Spotted ${potentialSuspect} acting suspiciously near the ${currentGameLocation}.`);
            showToast(`${potentialSuspect} seen nearby!`);
        } else {
            addNotebookEntry("A chilling silence. Something feels off in this room.");
        }
    } else {
        addNotebookEntry("Found nothing immediately obvious, but the atmosphere is heavy with secrets.");
    }

    updateNotebookDisplay();
    updateActionButtons();
}

function interrogateSuspect() {
    if (interrogateButton.disabled) return;

    const roomKey = currentGameLocation.replace(/\s+/g, '-').toLowerCase();
    const suspectsInThisRoom = currentSuspectsInRoom[roomKey];

    if (!suspectsInThisRoom || suspectsInThisRoom.length === 0) {
        addNotebookEntry(`No suspects are currently in the ${currentGameLocation} to interrogate.`);
        showToast("No suspects here.");
        updateActionButtons();
        return;
    }

    const suspectToInterrogate = getRandomElement(suspectsInThisRoom);
    addNotebookEntry(`Attempted to interrogate ${suspectToInterrogate} in the ${currentGameLocation}.`);

    const interrogationResponses = [
        `"${suspectToInterrogate} claims they were in the Library all night, reading by candlelight."`,
        `"${suspectToInterrogate} seemed quite nervous. They muttered something about owing a debt to the victim."`,
        `"I saw ${suspectToInterrogate} near the Garden entrance, looking very agitated earlier this evening."`,
        `"${suspectToInterrogate} gave a rather flimsy alibi involving a late-night solitary walk in the grounds."`,
        `"${suspectToInterrogate} seemed evasive, changing the subject whenever I asked about their whereabouts during the incident."`,
        `"${suspectToInterrogate} mentioned hearing a strange noise from the Study around the time of the murder."`
    ];
    addNotebookEntry(getRandomElement(interrogationResponses));
    showToast(`Interrogated ${suspectToInterrogate}.`);
    updateNotebookDisplay();
}

function makeAccusation() {
    const accusedSuspect = accusationInput.value.trim();
    if (!accusedSuspect) {
        showToast("Please enter a suspect name to accuse.");
        return;
    }

    // Simple check if the accused is one of the known suspects
    if (suspects.includes(accusedSuspect)) {
        // Placeholder for actual win condition check
        // In a real game, you'd have a hidden killer and motive.
        // For now, let's make it a bit random or based on clues.
        const winChance = cluesFound * 0.15 + 0.2; // Base chance 20%, +15% per clue
        if (winChance >= Math.random()) { // Higher chance of success with more clues
            alert(`Congratulations! You have correctly accused ${accusedSuspect} of the murder in Crimson Manor! The case is closed.`);
            resetGame();
        } else {
            alert(`Your accusation against ${accusedSuspect} was incorrect. The killer remains at large, and you have lost valuable time.`);
            addNotebookEntry(`Failed accusation against ${accusedSuspect}.`);
            cluesFound = Math.max(0, cluesFound - 1); // Penalty for wrong accusation
            if (notebookEntries.length > 0) {
                notebookEntries[0] = `Clues found: ${cluesFound}`;
            }
            accusationInput.value = "";
            updateNotebookDisplay();
            updateActionButtons();
        }
    } else {
        alert(`"${accusedSuspect}" is not a known suspect in Crimson Manor. Please enter a valid name.`);
    }
}

function resetGame() {
    currentGameLocation = "Entrance Hall";
    cluesFound = 0;
    notebookEntries = [];
    currentSuspectsInRoom = {};
    investigatedRooms = {};

    initializeGame(); // Re-initialize everything
    showToast("Game reset. A new investigation begins!");
}

// --- Event Listeners Initialization ---
roomElements.forEach(room => {
    room.addEventListener('click', () => updatePlayerLocation(room.dataset.room));
});
investigateButton.addEventListener('click', investigateRoom);
interrogateButton.addEventListener('click', interrogateSuspect);
accusationButton.addEventListener('click', makeAccusation);

// --- Initial Game Setup ---
initializeGame();
