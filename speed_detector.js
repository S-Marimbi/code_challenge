const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);
// Below 70 you are okay
// Case 1 you are 75
// 75 - 70 = 5
// 5/5 = 1

// Case 2 you are 80
// 80 - 70 = 10
// 10/5 = 2

function checkSpeed(speed) {
    if (speed<70){
        return "OK";
    }
    let diff = speed - 70;
    let point = Math.floor(diff/5);

    if (point > 12) {
        return "License Suspended";
    }

    return "Points deducted " + point;
}
function main() {
    rl.question("Enter your Speed\n ", (speed) => {
       let s = parseInt(speed);
       if(isNaN(s)) {
          console.log("Please enter a number\n");
          main();
          return;
 }
     console.log(checkSpeed(s));
     rl.close();
 });
 
 }
 
 main();