//Storywriter app: write bite-sized stories
//Don't stare at a blank screen again!
//Conquer writer's block.

// character generator
// genre generator
// goal generator
//scene generator
//roadblocks
//length generator
//conflict generator

//Sample:
// var myArray = ['January', 'February', 'March'];
// var item = myArray[(Math.random() * myArray.length) | 0];
// console.log('item:', item);


const character = ["nerd", "prince", "beauty queen", "introvert", "extrovert"];
const genre = ["comedy", "romance", "action"];
const scene = ["restaurant", "bedroom", "coffee shop"];
const roadblocks = ["friend", "finance", "past failures"];

const selectedCharacter = character[(Math.random() * character.length) | 0];
const selectedGenre = genre[(Math.random() * genre.length) | 0];
const selectedScene = scene[(Math.random() * scene.length) | 0];

function rtnValue(value) {
    selectedValue = value[(Math.random() * value.length) | 0];
    console.log(selectedValue);

}

console.log('Storywriter app: write bite-sized stories. Don\'t stare at a blank screen again! Conquer writer\'s block.');
console.log('Character: ', selectedCharacter);
console.log('Genre: ', selectedGenre);
console.log('Scene: ', selectedScene);
console.log('Roadblocks: ');
rtnValue(roadblocks);