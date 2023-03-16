/* 
    ToDo:

        + Make needed global variables
        + Build Fetch to test the API endpoint
        + Make an array variable to hold recipes
        + Connect to the DOM of the HTML (button in nav, divs for the cards)
        + Build a function to display random recipe card
        - Build a function to display the deck of recipes
*/

// Global Variable
const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "7cba6ededf3e4c0faa99e52dac68178d";
let buildURL = `${url}/?apiKey=${apiKey}`;
let storedRecipes = [];
// DOM Elements
const searchForm = document.querySelector("#search-form");

// Function to properly append children/elements
const removeElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

// Build function for Displaying Random Recipe single card
const displayRandomCard = recipe => {
    // console.log(recipe);
    // make variable for parent container
    const randomCard = document.querySelector(".random-card");

    // Will replace cards versus letting them stack
    removeElements(randomCard);

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');
    
    //* Set Attributes
    // Need to use BS class names to build elements
    card.className = 'card';
    card.style.width = '18rem';
    img.src = recipe.img; // using our obj to place the value.
    img.className = 'card-img-top';
    img.alt = recipe.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-success';
    btn.textContent = "Add Recipe";
    btn.onclick = () => {
        // When the button is clicked: push the recipe object to storedRecipe array
        storedRecipes.push(recipe);
        // Run the display stored function
        saveRecipeTable();
    };

    //* Attach Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);
};

// Build function for our saved our saved recipes
const saveRecipeTable = () => {
    // console.log("Saved Recipe Function: array - ", storedRecipes);

    let keptCards = document.getElementById("kept-cards");

    removeElements(keptCards);

    storedRecipes.map(recipeObj => {

    

    // Create Elements
    let div = document.createElement("div");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cBody = document.createElement("div");
    let cTitle = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");

    // Assign attributes
    div.className = "col";
    card.className = "card";
    img.className = "card-img-top";
    img.src = recipeObj.img;
    img.alt = recipeObj.title;
    cBody.className = "card-body";
    cTitle.className = "card-title";
    cTitle.textContent = recipeObj.title;
    p.className = "card-text";
    a.href = recipeObj.src;
    a.target = "_blank";
    a.textContent = "Link to Recipe";

    // Append
    p.appendChild(a);
    cBody.appendChild(cTitle);
    cBody.appendChild(p);
    card.appendChild(img);
    card.appendChild(cBody);
    div.appendChild(card);

    keptCards.appendChild(div);

    });

};

// Event Listener
searchForm.addEventListener("submit", e => {
    e.preventDefault(); // stops our page from refreshing due to default properties of our form

    // Fetch()
    fetch(buildURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            let recipe = data.recipes[0]; // pathway to target the individual recipe object

            let obj = {
                title: recipe.title,
                img: recipe.image,
                src: recipe.sourceUrl
            }

            displayRandomCard(obj); // Pass our new object as an argument to the display func
        })
        .catch(err => console.error(err));
});

