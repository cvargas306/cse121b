/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });

};


/* async getTemples Function using fetch()*/
const getTemples= async() => {
    try{
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch temple data. Status: ${response.status}`)
        }
        const templeData = await response.json();
        templeList = templeData;
        displayTemples(templeData);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    } 
};


/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";

};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }

};


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();