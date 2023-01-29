// if((1<3) && (1<4)){// AND opertor
// //do soething
// }
// if((1<3) || (1>0)){// OR Operator
// //do something
// }

// let height = 0;

// height = height ?? 1;// ternary operator


// //Looping structures 
// let counter = 1;
// while(counter<6){
//     //code that can be again and again and again .......
//     console.log("Sit")
//     counter = counter +1;//1st appraoch
//     counter++;//2nd approach
//     counter+=1;//3rd appraoch
// }

/*
const prompt = require("Prompt-sync")();

let p1 = prompt("Player 1 Choose R P S  ");
p1.toUpperCase();
let p2 = prompt("Player 2 Choose R P S  ");
p2.toUpperCase();
if(p1 == 'P' &&  p2 == 'R'){
console.log("Player is winner")

}
else if(p1 == 'R' &&  p2 == 'P'){
    console.log("Player 2 in winner ")
}
else if(p1 == 'S' &&  p2 == 'P'){
    console.log("Player 1 in winner ")
}
else if(p1 == 'P' &&  p2 == 'S'){
    console.log("Player 2 in winner")
}
else if(p1 == 'R' &&  p2 == 'S'){
    console.log("Player 1 in winner")
}
else if(p1 == 'S' &&  p2 == 'R'){
    console.log("Player 2 in winner")
}

else if(p1 == 'P' &&  p2 == 'P'){
    console.log("Match Draw")
}
else if(p1 == 'R' &&  p2 == 'R'){
 
    console.log("Match Draw")
}
else if(p1 == 'S' &&  p2 == 'S'){
    console.log("Match Draw")
}
else{
    console.log("Invalid key")
}
*/



let toffes = "imastring"

// length = length -1
let reverse_toffes = " "

//some while loop
let counter= toffes.length -1;
while(counter>=0)
{
    reverse_toffes += toffes[counter]
    counter--
}
console.log(reverse_toffes)
