/* Final Project*/
/* I've taken the task05 as a template to start my project*/

/* Declare and initialize global variables */
const templesElement = document.getElementById('chords');
let chordList = [];

/* async displayChords Function */
const displayChords = async (chords) => {
    chords.forEach(chord => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = chord.chordName;
        let img = document.createElement('img');
        img.src = chord.imageUrl;
        img.alt = chord.notes;
        article.appendChild(h3);
        article.appendChild(img);
        chordsElement.appendChild(article);
    });

};


/* async getChords Function using fetch()*/
const getChords = async(notes) => {
    const url = `https://piano-chords.p.rapidapi.com/chords/${notes}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7555759bcbmsh90ccf5abe214402p1a8e4ejsn4abafe92de9b',
                'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch chord data. Status: ${response.status}`)
        }

        const chordData = await response.json();
        chordList = chordData;
        displayChords(chordData);
    } catch (error) {
        console.error("Error fetching chord data:", error);
    } 
};


/* reset Function */

const reset = () => {
    chordsElement.innerHTML = "";

};

/* filterChords Function */
const filterChords = (chords) => {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'major':
            displayChords(chords.filter(chord => chord.chordName.includes('major')));
            break;
        case 'minor':
            displayChords(chords.filter(chord => chord.chordName.includes('minor')));
            break;
        case 'all':
        default:
            displayChords(chords);
            break;
    }
};


/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterChords(chordList);
});

/* Event Listener for search Button*/
document.querySelector("#searchButton").addEventListener("click", () => {
    const userInput = document.querySelector("#inputField").value;
    getChords(userInput);
});