// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 ');
if (gnum == num)
   console.log('Good Work');
else
   console.log('Not matched ' + gnum);

//    output:
//  3
//  Not matched 7
// undefined