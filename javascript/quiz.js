let currentQuestion = 0;

const questions = [
    {
        title: "Question 1",
        question: "What is your cat's name?",
        type: "text"
    },
    {
        title: "Question 2",
        question: "What color is your cat most similar to?",
        type: "radio",
        options: ["Dark", "Burnt", "Silver", "Light"]
    },
    {
        title: "Question 3",
        question: "Your cat sees you open the food cabinet. What is their reaction?",
        type: "radio",
        options: ["Waits Politely", "Screams for food", "Immediatley eats what it can", "Walks away unbothered", "", "Looks at you lovingly"]
    },
    {
        title: "Question 4",
        question: "You come home after a long day. What does your cat do when you arrive?",
        type: "radio",
        options: ["Barely acknowledges you", "Greets you calmly", "Cuddles you right away", "Yells dramatically", "Zooms around the house", "Gives a soft hello"]
    },
    {
        title: "Question 5",
        question: "You stop petting them... what do they do?",
        type: "radio",
        options: ["Gets up and leaves", "Accepts it gracefully", "Demands more", "Headbutts you gently", "Bites you", "Looks sad but stays"]
    },
    {
        title: "Question 6",
        question: "What is their favorite activity?",
        type: "radio",
        options: ["Sitting and observing", "Being adored", "Eating", "Sitting nicely beside you", "Cuddling", "Gently playing with toys"]
    },
    {
        title: "Question 7",
        question: "Do they ever knock anything off the table?",
        type: "radio",
        options: ["Never", "Only if necessary", "When searching for food", "Always on purpose", "Occasionally for attention", "Rarely, but mysteriously"]
    },
    {
        title: "Question 8",
        question: "How do they sleep?",
        type: "radio",
        options: ["Hidden and alone", "Perfectly curled up", "On your face", "Like royalty", "They don't", "Soft and tiny"]
    },
];

function renderQuestion() {
    const current = questions[currentQuestion];

    document.getElementById("question-title").textContent =
        current.title;

    document.getElementById("question-text").textContent =
        current.question;

    renderInput(current);
};

function renderInput(question) {

    const answerArea = document.getElementById("answer-area");

    if (question.type === "text") {

        answerArea.innerHTML = `
            <input type="text" id="answer-input">
        `;

    } else if (question.type === "radio") {

        let html = "";

        question.options.forEach(option => {
            html += `
                <label>
                    <input
                        type="radio"
                        name="quiz-answer"
                        value="${option}">
                    ${option}
                </label>
            `;
        });

        answerArea.innerHTML = html;
    }
};

renderQuestion();

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