function typeWriter(element, text, speed = 25) {

    if (!element) return;

    element.textContent = "";

    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

const boxText = document.getElementById("box-text");

if (boxText) {
    typeWriter(
        boxText,
        "Thank you for trusting me to translate the important words your buddy is trying to communicate. To start, I need to know more about the cat in question."
    );
}

const questionText = document.getElementById("quiz-box-text");

if (questionText) {
    typeWriter(
        questionText,
        "What is your cat's name?"
    );
}