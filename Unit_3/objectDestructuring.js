/* 
    ? Object Destructuring
    - Allows us to unpack values from an object into distinct variables.
    - Similar syntax as object literals, but the curly braces {} are on the left side of the assignment operator (=)
*/

let theSimpsons = {
  id: 1,
  est: 1989,
  genre: "animated",
  seasons: {
    "season one": [
      {
        episode_title: "Simpson Roasting on an Open Fire",
        aired: "1989-12-17",
      },
      {
        episode_title: "Bart the Genius",
        aired: "1990-01-01",
      },
      ["1989-12-17", "1990-01-14"],
    ],
    "season two": [
      /* .... */
    ],
    "season three": [
      /* .... */
    ],
  },
  currently_running: true,
};
theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// Examples of destructuring: keys are the variable names to destructure
const {characters, seasons} = theSimpsons;
// console.log("Destructuring Characters: ", characters);
// console.log("Destructuring Seasons: ", seasons);

characters.push("Meo"); // typo
characters[5] = "Moe";
console.log(characters);

// Can rename the key variable via a colon (:)
const {est: established, currently_running: on_air} = theSimpsons;
console.log(established);
console.log(on_air);

console.log("Doesn't change original keys: ", Object.keys(theSimpsons));

// ? Spread Operator with Objects
// ...

const simpsonsCharacters = {
    simpsonsHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moe", "Barney"]
}


// Use spread operator to combine multiple objects into one
const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3-eyed fish"
}

const locations = {
    ...simpsonsCharacters,
    dmv: ["Paddy", "Selma"],
    ...generalLocations
}
locations.beach = ["dock", "fisherman"];
console.log(locations);
console.log(generalLocations);