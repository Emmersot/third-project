# _Mr.Roboger's Neighborhood_

#### By _**Tyler Emmerson**_

#### _Description_

_A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with certain substitutions.

## Technologies Used

* _CSS_
* _Javascript_
* _HTML_
* _jQuery_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) 2022 Tyler Emmerson(s)_

Tests

Test 1
Describe: Take number form input and create a string to that length

Test: "It should return an string of numbers from 0 index to the user's inputted max length"
Code: const beepBop = number.toString();
console.log ('digitsToString: ', digitsToString);
Expected Output: [0,1,2,3,4,5]
Input: 5

Test 2


Describe: Take a string and create an array with .split

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: const beepBop = number.toString().split('');
console.log ('digitsToStringSplit: ', digitsToStringSplit);
Expected Output: [0, 1, 2, 3, 4, 5]

Test 3

Describe: "Take an array and set values of '1' for 'Beep!'"

Test: "It should return 'Beep!' for all 1's used
Code: if (beepBoopStringArray[n] === '1') {
        newWords = 'Beep!';      }
Input:5
Expected Output: [0,'Beep!', 2, 3, 4, 5]

Test 4

Describe: "Take an array and set values of '1' for 'Beep!' and '2' for 'Boop!'"

Test: "It should return Beep and Boop for all 1's and 2's."
Code: if (beepBoopStringArray[n] === '2') {
        newWords = 'Boop!';
      } else if (beepBoopStringArray[n] === '1') {
        newWords = 'Beep!';      }
Input:5
Expected Output: [0, 'Beep!', 'Boop!', 3, 4, 5]

Test 5 

Describe: "Take an array and set values of '1' for 'Beep!' and '2' for 'Boop!' and '3' for "Won't you be my neighbor?"."

Test: "It should return Beep for all 1's Boop for all 2's and "Won't you be my neighbor" for all 3's.
Code:  for (let n = 0; n < beepBoopStringArray.length; n++) 
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

