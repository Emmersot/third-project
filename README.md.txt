# _Mr.Roboger's Neighborhood_

#### By _**Tyler Emmerson**_

#### _Description_

_"Take a input number from the webpage. Use this number to create a string of numbers starting from 0 till that point. Changes that into an array where vaules will be able to be changed. Changes '1' for 'Beep!' and '2' for 'Boop!' and '3' for "Won't you be my neighbor?". Then returns the array back to the user with the replaced text."_

## Technologies Used

* _CSS_
* _Javascript_
* _HTML_
* _jQuery_
* _Bootstrap_
* _Git_
* _Markdown_
* _GitHub_

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of directory.
3. Open *index.html* in your browser.

## Known Bugs

* _Negatives don't work_

## License

_<p><a href="LICENSE.txt">MIT</a></p>_

Copyright (c) 2022 Tyler Emmerson(s)_

## Tests

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

