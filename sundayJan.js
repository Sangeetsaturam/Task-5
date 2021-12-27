//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
let start = 2014;
let end = 2050;

for(let current = start; current <= end; current++){
    if(new Date(current, 0, 1).getDay() === 0){
        console.log("years with January 1st as sunday:",current);
    }
}

// output:
// years with January 1st as sunday: 2017
// years with January 1st as sunday: 2023
// years with January 1st as sunday: 2034
// years with January 1st as sunday: 2040
// years with January 1st as sunday: 2045
