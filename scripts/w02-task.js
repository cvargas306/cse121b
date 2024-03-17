/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Carlos Vargas';
let currentYear = '2024';
let profilePicture = 'images/carlos_picture.JPG';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`); 

/* Step 5 - Array */

let myFavFoods = ['pizza', 'sushi', 'pasta', 'cheescake', 'beef'];
foodElement.innerHTML = myFavFoods.join(', ');

let newFavFood = 'tortillas';
myFavFoods.push(newFavFood);
foodElement.innerHTML += `<br>${myFavFoods.join(', ')}`;

/*Removing first element*/
myFavFoods.shift();
foodElement.innerHTML += `<br> ${myFavFoods.join(', ')}`;

/*Removing last element*/
myFavFoods.pop();
foodElement.innerHTML += `<br> ${myFavFoods.join(', ')}`;









