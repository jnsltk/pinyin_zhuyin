const inputField = document.querySelector('#input-text');
const outputField = document.querySelector('#output-text');

const convertBtn = document.querySelector('#convert');

// const pinyinTones = ["1", "2", "3", "4", "5"];
const zhuyinTones = ["", "ˊ", "ˇ", "ˋ", "˙"]

function btnPress() {
    splitInputToWords(inputField.value);
    outputField.value = convertSentence(inputField.value);
}

function splitInputToWords(inputString) {
    return inputString.split(" ");
}

function convertSentence(wordsString) {
    let wordsArray = splitInputToWords(wordsString);
    let zhuyinSentence = "";
    for (let i = 0; i < wordsArray.length; i++) {
        zhuyinSentence += convert(wordsArray[i]) + " ";        
    }
    return zhuyinSentence;
}

function convert(word) {
    let zhuyinTone = getTone(word);
    let initial = getInitial(word);
    return word.replace(/.$/, zhuyinTone);
}

function getTone(word) {
    return zhuyinTones[parseInt(word.slice(-1)) - 1];
}

function getInitial(word) {

}

convertBtn.addEventListener('click', btnPress);
