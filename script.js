const textArea = document.querySelector(".text-area");
const copyArea = document.querySelector(".copy-area");
const asideImgArea = document.querySelector('.aside img');
const asideMsgArea = document.querySelector('.aside-msg-area');
const copyBtnArea = document.querySelector('.copy-button')
textArea.value = "";

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encryptBtn() {
  const encryptedText = encrypt(textArea.value);
  asideImgArea.style.display = 'none';
  asideMsgArea.style.display = 'none';
  copyArea.style.display = 'block';
  copyBtnArea.style.display = 'block';
  copyArea.value = encryptedText;
  textArea.value = '';
}

function encrypt(encriptedString) {
  let matrixCode = [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];

  encriptedString = encriptedString.toLowerCase();

  for(let i = 0; i < matrixCode.length; i++) {
    if(encriptedString.includes(matrixCode[i][0])) {
      encriptedString = encriptedString.replaceAll(matrixCode[i][0], matrixCode[i][1]);
    }
  }
  return encriptedString;
  }

function decryptBtn() {
  const encryptedText = decrypt(textArea.value);
  asideImgArea.style.display = 'none';
  asideMsgArea.style.display = 'none';
  copyArea.style.display = 'block';
  copyBtnArea.style.display = 'block';
  copyArea.value = encryptedText;
  textArea.value = '';
}

function decrypt(decriptedString) {
  let matrixCode =
    [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];

  decriptedString = decriptedString.toLowerCase();

  for(let i = 0; i < matrixCode.length; i++) {
    if(decriptedString.includes(matrixCode[i][1])) {
      decriptedString = decriptedString.replaceAll(matrixCode[i][1], matrixCode[i][0]);
    }
  }
  return decriptedString;
  }

function copyBtn() {
  let copyText = document.querySelector(".copy-area");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  // implementando funcionalidade de colar após copiar
  textArea.value = copyText.value;
  copyArea.value = "";
  textArea.focus();
}