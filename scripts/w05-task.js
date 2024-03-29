/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement;
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {

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

};


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});