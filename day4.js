/*

let toffes = "imastring"

// length = length -1
let reverse_toffes = " "

//some while loop
let counter= toffes.length -1;
while(counter>=0)
{
    if(toffes[counter] == 'm'){
continue; 
// counter--;
        break;
    }
    reverse_toffes += toffes[counter]
    counter--
}
console.log(reverse_toffes)




// length = length -1
let reverse_toffes1 = " "

//some while loop
// let counter= toffes.length -1;
while(counter>=0)
{
    if(toffes[counter] == 'm'){
// continue; 
counter--;
        break;
    }
    reverse_toffes += toffes[counter]
    counter--
}
console.log(reverse_toffes)
*/

console.log("Yes ")


// For loop
// why we use for when we have the while loop?

// let our_data = "qwerty"
// // counter initialize; condition; counter manage

// for(let index = 0; index< our_data.length; index++){
//     console.log(our_data[index]+ "data")
// }

let our_data =[0,2,3,4,67,35,786];

let num =0;
// one approch 

/*
for(let index = 0; index<our_data.length; index++){
    if(our_data[index]% 2==0){
       num = our_data[index] + num;
    }
}
console.log("Sum of all even numbers = " + num)
*/

// second approach 
/*
for(let index = 0; index<our_data.length; index++){
    if(our_data[index]% 2!=0){
    continue;
    }
    num = our_data[index] + num;
}
console.log("Sum of all even numbers = " + num)
*/

/*

for(let index =0; index< our_data.length;index++){

    for(let indexx =0; indexx< our_data.length;indexx++){
        if(our_data[indexx]% 2!=0){
            break;
            }
            num = our_data[indexx] + num;
    }   
}
console.log("Sum of all even numbers = " + num)
*/


// For of loop
/*
let num_2 = "1234567890"
for (let index of num_2) {
    
    if(index% 2==0){
    
        console.log(index)
        }
        // console.log(index);
    }
    */

    const prompt = require('prompt-sync')();
    let input = prompt("Enter Message ").toUpperCase();
    let decode = "";
    let value = prompt("Enter Positive No. ")

    for (letter of input) {
        decode += String.fromCharCode(letter.charCodeAt()+value)
    }
console.log(`Ecrypted Message ${input} = Decrypted Message ${decode}`);