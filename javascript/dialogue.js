let currentTimeout; 

function typeWriter(element, text, speed = 25) {

//if the element passed is invalid, stop the function from running
if (!element) return;

//at the beginning when the function runs, stop any animation already in progress
clearTimeout(currentTimeout); 

//reset the text content of the element to an empty string so that the new text can be typed out from the beginning
element.textContent = ""; 

//keep track of the current index of the character being typed out, starting from 0
let index = 0; 

//this is the function that will be called repeatedly to type out each character of the text. type() just types one letter at a time. The function just repeats until the whole text is typed out.
function type() {

    //The letter will type as long as the index is less than the length of the text. (until there is nothing left to type)
    if(index < text.length) { 
        //att the character/letter that correlates with the current index
        element.textContent += text.charAt(index);
        //go to the next index/next letter
        index++;
        //wait a little bit of time and then call the type() function again to type the next letter. The speed of the typing is determined by the speed variable, which is set to 25 milliseconds by default.
        currentTimeout = setTimeout(type, speed);
    }
}
//this is what initilly calls the function
type();

}
