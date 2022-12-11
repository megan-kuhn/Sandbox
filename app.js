'use strict'; //always use strict


/** console.log
 * Press fn+12 to open dev tools. Whatever is in parentheis will display in console window.
 
 console.log(5 + 6);

 */


/** window.print 
 * Opens print dialog
 * Goes in HTML
 * JavaScript does not have any print object or print methods. 
 * You cannot access output devices from JavaScript.
 * The only exception is that you can call the window.print() method in the browser to print the content of the current window.
 
<button onclick="window.print()">Print this page</button>

*/


/** Alert
 * Modal appears on page load with prompt for age, then it calculates and presents approx. birth year
 
let age = prompt('How old are you?');
let year = new Date()

if (age > 0) {
    alert(`You were born around ${year.getFullYear()-age}.`);
}

 */


// How to create constants
const myConstant = 10; // const defines a constant. You must specify the constant value in the same statement in which it's declared

// How to create variables:
var myVariable; // var defines a variable
let myBlockVariable; // let defines a block variable 

// How to use constants and variables:
const x = 5;
const y = 6;
let z = x + y;

/** A JavaScript name must begin with:
 * A letter (A-Z or a-z)
 * A dollar sign ($)
 * Or an underscore (_)
 * All JavaScript identifiers are case sensitive
 * use camelCase to name variables
 * Be aware that certain words are reserved and can't be used
 * It's a good programming practice to declare all variables at the beginning of a script
*/




let myString = 'Meganski'; // declares the string Meganski as a variable
let hisString = 'Tomaso'; // declares the string Tomaso as another variable

let combinedStringLength = myString.length + hisString.length; // the .length property counts the number of characters in each variable. They are then added, and their sum is declared as the variable combinedStringLength

console.log(combinedStringLength); // console.log logs combinedStringLength in the console

let combinedStrings = myString + " " + hisString; // declares the concatenated strings as a variable. " " is a space
console.log(combinedStrings); // logs combinedStrings in the console




/** Tutorial: https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671 */

const scrollElements = document.querySelectorAll("js-scroll"); // Targets all js-scroll elements on the page

scrollElements.forEach((el) => {
  el.style.opacity = 0
}) // We use JS to set the default opacity instead of CSS so that users can see content if they have JS disabled

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= window.innerHeight || document.documentElement.clientHeight
  );
}; // Create elementInView function




