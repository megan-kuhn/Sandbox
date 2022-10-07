'use strict';

let age = prompt('How old are you?');
let year = new Date()

if (age > 0) {
    alert(`You were born around ${year.getFullYear()-age}.`);
}

