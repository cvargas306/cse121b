/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Carlos Vargas",
    photo:"images/carlos_picture.jpg",
    favoriteFoods:[
        'pizza',
        'sushi',
        'pasta',
        'cheescake',
        'beef',
        'tortillas'
    ],
    hobbies:['Play the piano', 'Go for a run', 'Hiking'],

    placesLived:[]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Puntarenas, CR',
    length: '3 months'
});

myProfile.placesLived.push({
    place: 'Tibas, CR',
    length: '20 years'
});

myProfile.placesLived.push({
    place: 'San Pedro Sula, Honduras',
    length: '2 years'
});

myProfile.placesLived.push({
    place: 'La Union, Cartago, CR',
    length: '9 years'
});


/* DOM Manipulation - Output */

/* Name */

document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = `Profile picture of ${myProfile.name}`;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.getElementById('favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.getElementById('hobbies').appendChild(li);
});
/* Places Lived DataList */

myProfile.placesLived.forEach(placesLived =>{
    let dt = document.createElement('dt');
    dt.textContent = placesLived.place;
    document.getElementById('places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = placesLived.length;
    document.getElementById('places-lived').appendChild(dt);
});
