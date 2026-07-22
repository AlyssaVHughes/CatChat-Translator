// function renderText() {
//     //get the current question object from the questions array using the currentQuestionIndex variable.
//     const current = questions[currentQuestionIndex];

// //update the text content of the element with the id "question-title" to be the title of the current question object.
// document.getElementById("result-text").textContent = current.title;

// //use the typeWriter function to animate the question text in the element with the id "quiz-box-text". The text that will be animated is the question property of the current question object.
// typeWriter(
//     document.getElementById("quiz-box-text"),
//     current.question
// );

// }

const winner = sessionStorage.getItem("winner");
const catName = sessionStorage.getItem("catName");
const catColor = sessionStorage.getItem("catColor");

console.log(winner);
console.log(catName);
console.log(catColor);

const nameText = document.getElementById("cat-name");
nameText.textContent = catName;

const personalityText = document.getElementById("cat-personality");
personalityText.textContent = "The " + winner;

const catImage = document.getElementById("cat-result");
const backgroundImage = document.getElementById("personality-background");

const catImages = {
    Dark: {
        "Angel Child": "../images/characters/angel_dark.png",
        "Aloof Philosopher": "../images/characters/aloof_dark.png",
        "Food Goblin": "../images/characters/goblin_dark.png",
        "Gentlecat": "../images/characters/gentle_dark.png",
        "Princess": "../images/characters/princess_dark.png",
        "Sweetie": "../images/characters/sweetie_dark.png"
    },

    Burnt: {
        "Angel Child": "../images/characters/angel_burnt.png",
        "Aloof Philosopher": "../images/characters/aloof_burnt.png",
        "Food Goblin": "../images/characters/goblin_burnt.png",
        "Gentlecat": "../images/characters/gentle_burnt.png",
        "Princess": "../images/characters/princess_burnt.png",
        "Sweetie": "../images/characters/sweetie_burnt.png"
    },

    Silver: {
        "Angel Child": "../images/characters/angel_silver.png",
        "Aloof Philosopher": "../images/characters/aloof_silver.png",
        "Food Goblin": "../images/characters/goblin_silver.png",
        "Gentlecat": "../images/characters/gentle_silver.png",
        "Princess": "../images/characters/princess_silver.png",
        "Sweetie": "../images/characters/sweetie_silver.png"
    },

    Light: {
        "Angel Child": "../images/characters/angel_light.png",
        "Aloof Philosopher": "../images/characters/aloof_light.png",
        "Food Goblin": "../images/characters/goblin_light.png",
        "Gentlecat": "../images/characters/gentle_light.png",
        "Princess": "../images/characters/princess_light.png",
        "Sweetie": "../images/characters/sweetie_light.png"
    }
};

const backgroundImages = {
    "Angel Child": "../images/decor/angel_background.png",
    "Aloof Philosopher": "../images/decor/book_background.png",
    "Food Goblin": "../images/decor/food_background.png",
    "Gentlecat": "../images/decor/food_background.png",
    "Princess": "../images/decor/food_background.png",
    "Sweetie": "../images/decor/sweetie_background.png"
}

catImage.src = catImages[catColor][winner];
backgroundImage.src = backgroundImages[winner];

const catDecor = { 
    
    sparkle: { decorA: "../images/decor/sparkle_1.png",
            decorB: "../images/decor/sparkle_2.png"},

    aloof: { decorA: "../images/decor/aloof_1.png",
             decorB: "../images/decor/aloof_2.png"},

    food: { decorA: "../images/decor/food_1.png",
              decorB: "../images/decor/food_2.png"},

    flower: { decorA: "../images/decor/flower_1.png",
             decorB: "../images/decor/flower_2.png"},

    heart: { decorA: "../images/decor/heart_1.png",
              decorB: "../images/decor/heart_2.png"},
}

const personalityDecor = {
    "Angel Child": "sparkle",
    "Aloof Philosopher": "aloof",
    "Food Goblin": "food",
    "Gentlecat": "heart",
    "Princess": "sparkle",
    "Sweetie": "flower"
};

const decorType = personalityDecor[winner];

const decorA = document.getElementById("decorImg_1");
const decorB = document.getElementById("decorImg_2");

decorA.src = catDecor[decorType].decorA;
decorB.src = catDecor[decorType].decorB;

