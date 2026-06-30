let currentQuestion = 0;

function renderQuestion() {
    const current = questions[currentQuestion];

    document.getElementById("question-title").textContent =
        current.title;

    typewriter(
        document.getElementById("quiz-box-text").textContent =
        current.question
    );

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