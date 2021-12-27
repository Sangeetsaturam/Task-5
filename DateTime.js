//Write a JavaScript program to display the current day and time in the following format. 
const date = new Date();


const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);

// output:
// Date: Mon Dec 27 2021
// Time: 7:28:44 PM