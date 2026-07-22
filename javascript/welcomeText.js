const welcomeText = document.getElementById("box-text");
const resultText = document.getElementById("result-text");
const blurbText = document.getElementById("blurb-text");

if (welcomeText) {
    typeWriter(
        welcomeText,
        "Thank you for trusting me to translate the important words your buddy is trying to communicate. To start, I need to know more about the cat in question."
    );
} else if (resultText) {
    typeWriter(
        resultText,
        "Thats all I needed to hear. Ive already got Jerimiah figured out. Something is telling me they look a little something like this:"
    );
} else if (blurbText) {
    typeWriter(
        blurbText,
        "What sound did your cat make?"
    );
}