//Decrypter

let alphabets = "abcdefghijklmnopqrstuvwxyz";
const prompt = require('prompt-sync')();
let encode = "apobxbundefinedhp"
let decode;
for (let key = 1; key <= 25; key++) {
    decode = "";
    for (let letter of encode) {
        if (alphabets.includes(letter) == -1) {
            decode += letter;
            continue;
        }
        position = (alphabets.indexOf(letter) - key + 26) % 26;
        decode += alphabets[position];
    }
    console.log(`Trying key: ${key} Decoded message: ${decode}`);
}



// Encrypted 


