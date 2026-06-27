// ============================
// Question 1
// Current Date & Time
// ============================

let today = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

document.write("<h3>Question 1</h3>");
document.write("Today's Date: " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + "<br>");
document.write("Current Time: " + today.toLocaleTimeString() + "<br>");
document.write("Day: " + days[today.getDay()] + "<hr>");


// ============================
// Question 2
// Greeting According to Time
// ============================

let hour = today.getHours();

document.write("<h3>Question 2</h3>");

if (hour >= 5 && hour < 12) {
    document.write("Good Morning");
}
else if (hour >= 12 && hour < 17) {
    document.write("Good Afternoon");
}
else if (hour >= 17 && hour < 21) {
    document.write("Good Evening");
}
else {
    document.write("Good Night");
}

document.write("<hr>");


// ============================
// Question 3
// Days Passed in Current Year
// ============================

let startYear = new Date(today.getFullYear(), 0, 1);

let diff = today - startYear;

let passedDays = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write("<h3>Question 3</h3>");
document.write("Days Passed: " + passedDays);
document.write("<hr>");


// ============================
// Question 4
// Countdown to New Year
// ============================

let nextYear = new Date(today.getFullYear() + 1, 0, 1);

let remaining = nextYear - today;

let remainingDays = Math.ceil(remaining / (1000 * 60 * 60 * 24));

document.write("<h3>Question 4</h3>");
document.write("Days Remaining Until New Year: " + remainingDays);
document.write("<hr>");


// ============================
// Question 5
// Age Calculator
// ============================

let birthYear = parseInt(prompt("Enter your Birth Year"));

let age = today.getFullYear() - birthYear;

document.write("<h3>Question 5</h3>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Current Age: " + age + " Years");
document.write("<hr>");


// ============================
// Question 6
// Working Hours
// ============================

let start = parseInt(prompt("Enter Office Start Hour (24-hour format)"));
let end = parseInt(prompt("Enter Office End Hour (24-hour format)"));

let workHours = end - start;

document.write("<h3>Question 6</h3>");
document.write("Working Hours: " + workHours + " Hours");
document.write("<hr>");


// ============================
// Question 7
// Weekend Checker
// ============================

document.write("<h3>Question 7</h3>");

if (today.getDay() === 0 || today.getDay() === 6) {
    document.write("Today is Weekend.");
}
else {
    document.write("Today is a Working Day.");
}

document.write("<hr>");


// ============================
// Question 8
// Birthday Countdown
// ============================

let birthMonth = parseInt(prompt("Enter your Birth Month (1-12)"));
let birthDate = parseInt(prompt("Enter your Birth Date"));

let birthday = new Date(today.getFullYear(), birthMonth - 1, birthDate);

if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
}

let birthdayDiff = birthday - today;

let birthdayDays = Math.ceil(birthdayDiff / (1000 * 60 * 60 * 24));

document.write("<h3>Question 8</h3>");
document.write("Days Until Birthday: " + birthdayDays);
document.write("<hr>");


// ============================
// Question 9
// Digital Clock
// ============================

document.write("<h3>Question 9</h3>");
document.write("Current Time: " + today.toLocaleTimeString());
document.write("<hr>");


// ============================
// Question 10
// Parking Fee Calculator
// ============================

let entry = parseInt(prompt("Enter Entry Hour (24-hour format)"));
let exit = parseInt(prompt("Enter Exit Hour (24-hour format)"));

let totalHours = exit - entry;
let fee = totalHours * 50;

document.write("<h3>Question 10</h3>");
document.write("Parking Hours: " + totalHours + "<br>");
document.write("Parking Fee: Rs. " + fee);
document.write("<hr>");
