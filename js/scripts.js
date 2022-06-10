$(document).ready(function() {
const input = prompt("Enter a sentence");
  console.log(input);
});
//1st function will take a range of numbers inputted by the user and return 1's as "Beep!"







function beepBoop(input) {

for (var i = 0; i <= input + 1; i + 1 ) {
  if(i === 3) console.log("Won't you be my neighbor?");
                // return ("Won't you be my neighbor?");
  else if (i === 2) console.log("Boop!");
                // return ("Boop!"); 
  else if (i === 1) console.log("Beep!");
                // return ("Beep!");
  else console.log(i);
  }
};