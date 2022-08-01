let textInput = document.querySelector('#inputString');
let button = document.querySelector('.submit-btn');
let wordsToBeScrambled = document.querySelector('#words');
let character = document.querySelector('#character');
let scrambledText = document.querySelector('.scrambledText');


button.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(scrambler(textInput, wordsToBeScrambled, character));
});

let test = "Achebe is a boy boy";

function wordToList(wordsToScramble) {
    let words = wordsToScramble;
    try {
        words = wordsToScramble.split(" ");
    } catch (error) {
    }
    return words;
}

function wordLength(word) {
    return word.length;
}

function scrambler(textString, wordsToScramble, character) {
    textString = textString.value;
    wordsToScramble = wordsToScramble.value;
    character = character.value;
    let words = wordToList(wordsToScramble);

    for (let word of words) {
        let word_length = wordLength(word);
        re = new RegExp(`\\b${word}\\b`, 'gi');
        textString = textString.replace(re, `${character}`.repeat(word_length));
        
    }
    
    scrambledText.innerHTML = textString;
   
}




