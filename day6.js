/*
why we use swtich?
1. can replace multiple 'if' checks.
2. more description way to compare value with multiple variants.
*/

const prompt = require("prompt-sync")()
let conditional_variable = prompt("Enter Color Number: ");
conditional_variable = Number.parseInt(conditional_variable);
switch (conditional_variable) {
    case 1:
        console.log("Green Color")
        break;
        case 2:
            console.log("Red Color")
            break;
            case 3:
                console.log("Yellow Color")
                break;

}