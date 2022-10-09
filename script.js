const inputField = document.querySelector('#input-text');
const outputField = document.querySelector('#output-text');

const convertBtn = document.querySelector('#convert');

function btnPress() {
    outputField.value = inputField.value;
}

convertBtn.addEventListener('click', btnPress);
