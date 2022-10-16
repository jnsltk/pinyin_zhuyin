// Pinyin to Zhuyin converter, based on Mark Wilbur's p2z converter
// https://github.com/logicmason/pinyin-to-zhuyin

const inputField = document.querySelector('#input-text');
const outputField = document.querySelector('#output-text');

const bpmf = {
    1: {
        "ㄧㄠ": "yao",
        "ㄧㄡ": "you",
        "ㄩㄝ": "yue",
        "ㄩㄥ": "yong",
        "ㄩㄢ": "yuan",
        "ㄧㄥ": "ying",
        "ㄩㄣ": "yun",
        "ㄧㄤ": "yang",
        "ㄧㄢ": "yan",
        "ㄧㄣ": "yin",
        "ㄨㄟ": "wei",
        "ㄨㄤ": "wang",
        "ㄨㄢ": "wan",
        "ㄨㄥ": "weng",
        "ㄨㄣ": "wen",
        "ㄨㄞ": "wai"
    },
    2: {
        "ㄧㄤ": "iang",
        "ㄧㄥ": "ing"
    },
    3: {
        "ㄧㄞ": "iai",
        "ㄧㄠ": "iao",
        "ㄧㄡ": "iu",
        "ㄧㄢ": "ian",
        "ㄧㄣ": "in"
    },
    4: {
        "ㄨㄞ": "uai",
        "ㄨㄤ": "uang",
        "ㄨㄢ": "uan",
        "ㄨㄚ": "ua",
        "ㄨㄛ": "uo",
        "ㄨㄟ": "ui",
        "ㄨㄣ": "un",
        "ㄩㄣ": "ün",
        "ㄩㄥ": "iong",
        "ㄨㄥ": "ong"
    },
    5: {
        "ㄩㄢ": "uan",
        "ㄩㄣ": "un",
        "ㄩㄥ": "ong",
        "ㄩㄝ": "ue"
    },
    6: {
        "ㄓ": "zhi",
        "ㄔ": "chi",
        "ㄕ": "shi",
        "ㄖ": "ri",
        "ㄤ": "ang",
        "ㄥ": "eng",
        "ㄞ": "ai",
        "ㄟ": "ei",
        "ㄠ": "ao",
        "ㄡ": "ou",
        "ㄦ": "er"
    },
    7: {
        "ㄢ": "an",
        "ㄣ": "en",
        "ㄨㄚ": "wa",
        "ㄨㄛ": "wo",
        "ㄨ": "wu",
        "ㄧㄚ": "ya",
        "ㄧㄝ": "ye",
        "ㄩ": "yu"
    },
    8: {
        "ㄧㄚ": "ia",
        "ㄧㄛ": "io",
        "ㄧㄝ": "ie"
    },
    9: {
        "ㄓ": "zh",
        "ㄔ": "ch",
        "ㄕ": "sh",
        "ㄗ": "zi",
        "ㄘ": "ci",
        "ㄙ": "si",
        "ㄖ": "r",
        "ㄧ": "yi",
        "ㄩㄝ": "üe"
    },
    10: {
        "ㄅ": "b",
        "ㄆ": "p",
        "ㄇ": "m",
        "ㄈ": "f",
        "ㄉ": "d",
        "ㄊ": "t",
        "ㄋ": "n",
        "ㄌ": "l",
        "ㄍ": "g",
        "ㄎ": "k",
        "ㄏ": "h",
        "ㄐ": "j",
        "ㄑ": "q",
        "ㄒ": "x",
        "ㄗ": "z",
        "ㄘ": "c",
        "ㄙ": "s",
        "ㄧ": "i",
        "ㄨ": "u",
        "ㄩ": "ü",
        "ㄚ": "a",
        "ㄛ": "o",
        "ㄜ": "e"
    }, 
    11: {
        "ㄩ": "v"
    }
};

const tones = {"1":"", "2":"ˊ", "3":"ˇ", "4":"ˋ", "5":"˙"};

function convert() {
    outputField.value = pinyinToZhuyin(inputField.value);
}

function pinyinToZhuyin(pinyin) {
    let output = pinyin;
    output = output.replace(/([a-z|A-Z])\s/g, "$15 "); // Handle fifth tone in of no number 5
    for (let i = 1; i<=Object.keys(bpmf).length; i++) {
        for (let j in bpmf[i]) {
            rexp = new RegExp(bpmf[i][j],"g");
            output = output.replace(rexp, j);
        }
    }
    output = output.replace(/(ㄐ|ㄑ|ㄒ)ㄨ/g, "$1ㄩ") // Handle ju,qu,xu words
    for (let k = 1; k <= Object.keys(tones).length; k++) {
        output = output.replace(new RegExp(k, "g"), tones[k]);
    }
    return output;
}

inputField.addEventListener('input', convert);
