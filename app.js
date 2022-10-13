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


// How to create variables:
var x; // var defines a variable
let y; // let defines a block variable 

// How to use variables:
x = 5;
y = 6;
let z = x + y;

/** A JavaScript name must begin with:
 * A letter (A-Z or a-z)
 * A dollar sign ($)
 * Or an underscore (_)
 * All JavaScript identifiers are case sensitive. 
 * use camelCase to name variables.
*/




let myString = 'Meganski'; // defines the string Meganski as a variable
let hisString = "Tomaso" // defines the string Tomaso as another variable

console.log(myString.length + hisString.length); // the .length property counts the number of characters in each variable. They are then added, and console.log puts the sum in the log.




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




