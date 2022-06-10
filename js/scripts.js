
//Business Logic
function beepBoop(number) {
  let finalArray = [];
  for (let i = 0; i <= number; i ++) {
      const beepBoopString = i.toString();
      const beepBoopStringArray = beepBoopString.split('');
    let newWords = i;
    for (let n = 0; n < beepBoopStringArray.length; n++) 
    {
      if (beepBoopStringArray[n] === '3') {
        newWords = "Won't you be my neighbor?";
      } else if (beepBoopStringArray[n] === '2') {
        newWords = 'Boop!';
      } else if (beepBoopStringArray[n] === '1') {
        newWords = 'Beep!';
      }
    }
    finalArray.push(newWords);
  }
  return finalArray;
}
//User interface logic

$(document).ready(function () {
  $('form#question').submit(function (event) {
    event.preventDefault();

    $('#output').text('');

    const userNumber = $('#userInput').val();
    $('#output').text(beepBoop(userNumber));
  });
});