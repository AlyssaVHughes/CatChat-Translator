//bookmark that tracks the current question index
let currentQuestion = 0;

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


    if (question.type === "text") {

        //if the type of the current question is "text", set the innerHTML of the answerArea element to be an input field of type text with the id "answer-input". This will allow the user to type in their answer.
        answerArea.innerHTML = 
        `<input type="text" id="answer-input">`;

        //if the type of the current question is "radio", create a string of HTML that contains radio buttons for each option in the options array of the current question object. Each radio button will have the name "quiz-answer" and the value of the option. The label for each radio button will display the option text. Finally, set the innerHTML of the answerArea element to be this string of HTML, which will render the radio buttons for the user to select their answer.
    } else if (question.type === "radio") {

        let html = "";

        //for each option in the options array of the current question object, append a label element containing a radio button input and the option text to the html string. The radio button will have the name "quiz-answer" and the value of the option.
        question.options.forEach(option => {
            html += `
                <label class="radio-option">
                    <input
                        type="radio"
                        name="quiz-answer"
                        value="${option.personality}">
                    ${option.text}
                </label>
            `;
        });

        answerArea.innerHTML = html;
    }
};

//call the renderQuestion function to display the first question when the page loads.
renderQuestion();

//save button logic
const saveButton =
    document.getElementById("save-button");
const answers = {}; 

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
    nextQuestion();
}

//arrow button logic
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

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