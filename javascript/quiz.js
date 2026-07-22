//bookmark that tracks the current question index
let currentQuestion = 0;
const answers = {}; 

const leftArrow = document.getElementById("left-arrow-container");
const rightArrow = document.getElementById("right-arrow-container");

function renderQuestion() {

//look inside of the questions array and get the question object that corresponds to the currentQuestion index. Store that question object in a variable called current.
    const current = questions[currentQuestion];

//update the text content of the element with the id "question-title" to be the title of the current question object.
    document.getElementById("question-title").textContent =
        current.title;

        //use the typeWriter function to animate the question text in the element with the id "quiz-box-text". The text that will be animated is the question property of the current question object.
        typeWriter(
            document.getElementById("quiz-box-text"),
            current.question
        );

    //call the renderInput function and pass in the current question object. This will render the appropriate input field (text input or radio buttons) based on the type of the current question.
    renderInput(current);
};

function renderInput(question) {

    //get the element with the id "answer-area" and store it in a variable called answerArea. This is where the input field will be rendered.
    const answerArea = document.getElementById("answer-area");
    const saveButton = document.getElementById("save-button");

    if (currentQuestion === questions.length - 1) {
        answerArea.innerHTML = `
            <div id="submit-button-container" class="button-container">
                <img class="submit-button" src="../images/buttons/button_f.png" alt="Restart Button">
                <img class="submit-button-hover" src="../images/buttons/button_f2.png">
                <h1 class="submit-button-text">Submit</h1>
            </div>
        `;
        const submitButton = document.getElementById("submit-button-container");
        submitButton.addEventListener("click", submitQuiz);  
        
        saveButton.style.display = "none";

    } else

    if (question.type === "text") {

        //if the type of the current question is "text", set the innerHTML of the answerArea element to be an input field of type text with the id "answer-input". This will allow the user to type in their answer.
        answerArea.innerHTML = `
        <input
            type="text" 
            id="answer-input"
            value="${answers[currentQuestion] || ""}">
    `;

        //if the type of the current question is "radio", create a string of HTML that contains radio buttons for each option in the options array of the current question object. Each radio button will have the name "quiz-answer" and the value of the option. The label for each radio button will display the option text. Finally, set the innerHTML of the answerArea element to be this string of HTML, which will render the radio buttons for the user to select their answer.
    } else if (question.type === "radio") {

        let html = "";
        let radioHtml = "";

        question.options.forEach(option => {
            radioHtml += `
                <label class="radio-option">
                    <input
                        type="radio"
                        name="quiz-answer"
                        value="${option.personality}">
                    ${option.text}
                </label>
            `;
        }); 

        if (currentQuestion === 1) {

            html = `
                <div class="color-layout">
        
                    <div class="color-reference">
                        <img src="../images/UI/Dark_color.png" alt="Dark">
                        <img src="../images/UI/Burnt_color.png" alt="Burnt">
                        <img src="../images/UI/Silver_color.png" alt="Silver">
                        <img src="../images/UI/Light_color.png" alt="Light">
                    </div>
        
                    <div class="radio-options">
                        ${radioHtml}
                    </div>
        
                </div>
            `;
        
        } else {
        
            html = `
                <div class="radio-options">
                    ${radioHtml}
                </div>
            `;
        
        }
        answerArea.innerHTML = html;

        const savedAnswer = answers[currentQuestion];
        saveButton.style.display = "block";

        //if there is a saved answer for the current question, find the radio button input element that has the same value as the saved answer and set its checked property to true.
        if(savedAnswer) {
            const radio = document.querySelector(
                `input[name="quiz-answer"][value="${savedAnswer}"]`
            );
            //if a radio button with the saved answer value is found, set its checked property to true, which will select that radio button and display it as the user's previously saved answer.
            if(radio) {
                radio.checked = true;
            }
        }
    }
    updateArrows();
    updateNavigation();
};

//call the renderQuestion function to display the first question when the page loads.
renderQuestion();

//save button logic
const saveButton =
    document.getElementById("save-button");


saveButton.addEventListener("click", saveQuestion);

function saveQuestion() {

    console.log("Save button clicked!");
    const question = questions[currentQuestion];

    if (question.type === "text") { 

        const input = document.getElementById("answer-input");
        answers [currentQuestion] = input.value;
    } else if (question.type === "radio") {

        //stores the object associated with the selected radio button
        const selected = document.querySelector(
            'input[name="quiz-answer"]:checked'
        );

        if (!selected) {
            alert("Please select an answer first.");
            return;
        }
        answers[currentQuestion] = selected.value;
    } 

    console.log (answers);
    updateNavigation();
    //nextQuestion();
}

//arrow button logic
leftArrow.addEventListener("click", previousQuestion);

rightArrow.addEventListener("click", nextQuestion);

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}


//show and hide the arrows based on the current question index
function updateArrows() {

    if (currentQuestion === 0) {
        leftArrow.style.visibility = "hidden";
    }
    else {
        leftArrow.style.visibility = "visible";
    }

    if (currentQuestion === questions.length - 1) {
        rightArrow.style.visibility = "hidden";
    }
    else {
        rightArrow.style.visibility = "visible";
    }
}

function updateNavigation() { 

    const markers = document.querySelectorAll(".position-marker");
    markers.forEach((marker,index) => { 

        if (index === currentQuestion) {
            if (answers[index]) {
                marker.src = "../images/UI/on_position_complete.png";
            }
            else {
                marker.src = "../images/UI/on_position_incomplete.png";
            }
        }
        else if (answers[index]) {
            marker.src = "../images/UI/marker_green.png";
        }
        
        else {
            marker.src = "../images/UI/marker_red.png";
        }

    });
}

//submit button logic
function submitQuiz() {

    const scores = {
        'Princess': 0,
        'Food Goblin': 0,
        'Sweetie': 0,
        'Aloof Philosopher': 0,
        'Angel Child': 0,
        'Gentlecat': 0,
        'None': 0

    };

    if (Object.keys(answers).length < questions.length - 1) {
        alert("Please answer all questions before submitting.");
        console.log(Object.keys(answers).length, questions.length);
        return;
    }
    for (const answer of Object.values(answers)) {

        scores[answer]++;
    }
    console.log(scores);

    const winner = getWinner(scores);
    const catName = answers[0];
    const catColor = answers[1];

    console.log("Winner:", winner);
    console.log("Name:", catName);
    console.log("Color:", catColor);

    // console.log(`Winner: ${winner} with a score of ${highestScore}`);
    sessionStorage.setItem("winner", winner);
    sessionStorage.setItem("catName", catName);
    sessionStorage.setItem("catColor", catColor);
    window.location.href = "../html/result.html";
    
}

function getWinner(scores) {
    let winner = "";
    let highestScore = 0;

    //loop through each personality in the scores object
    for (const personality in scores) {

        //check if the score for the current personality in the loop is greater than the highest score found so far. 
        if (scores[personality] > highestScore) {
    
            //if it is higher, update the highest score to be the score of the current personality and set the winner variable to be the current personality
            highestScore = scores[personality];
            winner = personality;
    
        }
    
    }
//return the personality with the highest score as the winner of the quiz.
    return winner;
}