/*
===========================================================================================
   PRACTICE EXERCISES — LOGIC CONSOLIDATION
===========================================================================================

Objective:
Consolidate knowledge of:
- loops
- arrays
- array methods
- string methods
- conditionals
*/

//=========================================================================================
// 01- Basic Loop
//=========================================================================================

// Print numbers from 1 to 10.

for ( i = 1; i <= 10; i++) {
    console.log(i);
}

// Print even numbers from 1 to 10.

for ( n = 1; n <= 10; n++) {
    if ( n % 2 === 0) {
        console.log(n);
    }
}

//=========================================================================================
// 02- Array Iteration
//=========================================================================================

// Create an array of 5 names.

const names = ["Tina", "Túlio", "Tânia", "Teresa", "Timóteo"];
console.log(names);

// Use a loop to print each name.

for (let name of names) {
    console.log(name)
}

//=========================================================================================
// 03- Filtering Values
//=========================================================================================

// Create an array of numbers.

let numbers = [35, 45, 55, 65, 75, 85];

// Print only the numbers greater than 50.

let greaterthan50 = numbers.filter(function (num) {
    return num > 50
});
console.log(greaterthan50);

//=========================================================================================
// 04- Search in Array
//=========================================================================================

// Create an array of fruits.

const fruits = ["Jaca", "Melão", "Acerola", "Pitaia"];

// Check if "apple" exists in the array.

const hasApple = fruits.includes ("apple");

console.log(hasApple);

// Print an appropriate message depending on the result.

if (hasApple) {
  console.log("There is apple in this array"); 
} else {
    console.log("There is no apple in this array");
}


//=========================================================================================
// 05- String Validation
//=========================================================================================

// Create a variable containing a user email.

const email = "developer.foundations@email.com"

// Check if the email contains "@" and ".".

const hasAtSymbol = email.includes("@");
const hasDot = email.includes(".");

// Print whether the email is valid or invalid.

if (hasAtSymbol && hasDot ) {
    console.log ("This email is valid.");
} else {
    console.log ("This email is invalid.");
}

//=========================================================================================
// 06- Transforming Data
//=========================================================================================

// Create an array of numbers.
// Create a new array containing the double of each number.


//=========================================================================================
// 07- Counting Elements
//=========================================================================================

// Create an array of numbers.
// Count how many numbers are greater than 10.
// Print the total.


//=========================================================================================
// 08- Remove Specific Value
//=========================================================================================

// Create an array of colors.
// Remove a specific color from the array (without creating a new array).


//=========================================================================================
// 09- Word Counter
//=========================================================================================

// Create a sentence.
// Count how many words it contains.


//=========================================================================================
// 10- Mini Challenge
//=========================================================================================

// Create an array of student grades.
// Calculate the average grade.
// Print whether the class is approved or not
// (consider 7 as the minimum passing grade).
