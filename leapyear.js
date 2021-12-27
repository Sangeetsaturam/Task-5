// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }
  console.log("Is the given year is leap year:",isLeapYear(2021));
 
  //output:
  //Is the given year is leap year: false