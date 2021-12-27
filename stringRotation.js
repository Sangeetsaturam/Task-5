//Write a JavaScript program to rotate the string 'Programming' in right direction by periodically 
//removing one letter from the end of the string and attaching it to the front.

var today = new Date();
var day = today.getDay();
var days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + days[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var timing = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && timing===' PM ')
{
if (minute===0 && second===0)
{
hour=12;
timing=' Noon';
}
else
{
hour=12;
timing=' PM';
}
}
if (hour===0 && timing===' AM ')
{
if (minute===0 && second===0)
{
hour=12;
timing=' Midnight';
}
else
{
hour=12;
timing=' AM';
}
}
console.log("Current Time : "+hour + timing + " : " + minute + " : " + second);

// output:
// Today is : Monday.
// Current Time : 6 PM  : 57 : 48