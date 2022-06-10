
//1st function will take a range of numbers inputted by the user and return 1's as "Beep!"

const input = ("input")





function beepBoopFunction(element) {

for (var i = 0; i <= input + 1; i + 1 ) {
  if(i === 3) {
      // console.log("Won't you be my neighbor?");
                print("Won't you be my neighbor?");
    } else if (i === 2) {
      // console.log("Boop!");
                print("Boop!"); 
    } else if (i === 1) {
      // console.log("Beep!");
                print("Beep!");
    } else { 
      $("#output").text(result);
    }
  }
};

// User interface logic

$(document).ready(function(event) {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const beepBoop = parseint($("input").val());
    const result = beepBoop
    });
    $("#output").text(result);
});