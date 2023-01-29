/*
//for of loop 
// its only for specific use. Only for iterables.
// iterable are those data structure those jump from one to another variable. 
let numbers =[2,4,6,786];

for(let index=0;index<numbers.length;index++){
    const element = numbers[index]
}

for (let number of numbers) {
    let index = numbers.indexOf(number)

    // if we return index and element doesnt found it will return -1. 
}

//for in loop
//JSON
// if we have data in objects, dectionaries, or etc we can retrive data by giving unique keys.
let student_object= {
    'name' : 'abdul rafay',
    'age' : 12,
    'name1' : 'shabir',
    'age1' : 12,
}

for (let key in student_object) {
    
        console.log(student_object[key])
    
}
for (let index = 0; index < student_object.length; index++) {
    const element = student_object[index];
    console.log(student_object[index])
}
*/

//Fizz Buzz 
/*
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let index = 0; index < array.length; index++) {
    if(array[index]%3 == 0 && array[index]%5 == 0){
      array[index] = 'Fizz Buzz'
    }
    else if(array[index]%3 == 0){
      array[index] = 'Fizz'
    }
    else if(array[index]%5 == 0){
        array[index] = 'Buzz'
      }
}

console.log(array)
*/
/*
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (const index of array) {
    if(array[index]%3 == 0 && array[index]%5 == 0){
        array[index] = 'Fizz Buzz'
      }
      else if(array[index]%3 == 0){
        array[index] = 'Fizz'
      }
      else if(array[index]%5 == 0){
          array[index] = 'Buzz'
        }
}

console.log(array)
*/
/*
const prompt = require('prompt-sync')();

let input = prompt("Enter your Message ");
let decode = "";
    let value = prompt("Enter Positive No. ")

    for (letter of input) {
        decode += String.fromCharCode(letter.charCodeAt()+value)
    }
console.log(`Ecrypted Message ${input} = Decrypted Message ${decode}`);
*/

let alphabets = "abcdefghijklmnopqrstuvwxyz";
const prompt = require('prompt-sync')();
let input = prompt("Enter your Message ");
key=15;
let encode = "";
let decode = "";
for(let letter of input){
    if(alphabets.includes(letter)== -1){
        encode+= " ";
        continue;
    }
    position = (alphabets.indexOf(letter) + key+26) % 26;
    encode += alphabets[position];
}
console.log(`Encrpted code: ${encode}`)

/*
for(let letter of encode){
    position = (alphabets.indexOf(letter) - key+26) % 26;
    if(alphabets.indexOf(letter) == -1){
        continue;
    }
    decode += alphabets[position];
}
console.log(`Decrpted code: ${decode}`)
*/

for (let i = 1; i <= 25; i++) {
    decode = "";
    for (let letter of encode) {
        if (alphabets.includes(letter) == -1) {
            decode += letter;
            continue;
        }
        position = (alphabets.indexOf(letter) - i + 26) % 26;
        decode += alphabets[position];
    }
    console.log(`Trying key: ${i} Decoded message: ${decode}`);
}
