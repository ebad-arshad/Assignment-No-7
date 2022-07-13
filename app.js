// Chp 26-30

// Q1

// var user = +prompt("Enter any Integer");

// if (!isNaN(user)){

//     document.write("Number: " + user); 
//     document.write("<br>")
//     document.write("Round off value: " + Math.round(user));
//     document.write("<br>")
//     document.write("Floor value: " + Math.floor(user));
//     document.write("<br>")
//     document.write("Ceil value: " + Math.ceil(user));

// }

// Q2

// var user = prompt("Enter a number");

// if (!isNaN(user)){

//     document.write("Number: " + user); 
//     document.write("<br>")
//     document.write("Round off value: " + Math.round(user));
//     document.write("<br>")
//     document.write("Floor value: " + Math.floor(user));
//     document.write("<br>")
//     document.write("Ceil value: " + Math.ceil(user));

// }

// Q3

// var user = prompt("Enter a number");
// document.write(Math.abs(user))

// Q4

// var random = Math.random() * 6;
// var diceNumber = Math.ceil(random);

// document.write("Random dice value: " + diceNumber);

// Q5

// var random = Math.random() * 2;
// var toss = Math.ceil(random);

// if (toss === 1) {
//     document.write(toss + "<br>" + "Random coin value: Heads")
// }
// else if (toss === 2) {
//     document.write(toss + "<br>" + "Random coin value: Tails")
// }

// Q6

// var random = Math.random() * 100;
// var randomNumber = Math.ceil(random);

// document.write("Random number between 1 and 100: " + randomNumber)

// Q7

// var user = prompt("Enter your Weight");
// var flag = "";
// var flag2 = true;

// if (user !== "") {

//     for (var i = 0; i < user.length; i++) {

//         if (!isNaN(user[i])) {
//             flag += user[i];
//             console.log(flag)
//         }
//         else if (user[i] === ".") {
//             flag += ".";
//             console.log(flag)
//         }

//     }

//     for (var j = 0; j < flag.length; j++) {
//         if (flag.slice(j,j+2) === "..") {
//             alert("Error! Not a Number")
//             flag2 = false;
//         }
//     }
//     if (flag2 === true) {
//         document.write("The weight of user is " + flag + " Kilograms");
//     }

// }
// else {
//     alert("Please enter your Weight")
// }

// Q8

// var user = +prompt("Enter a Number");
// var number = Math.random() * 10;
// var random = Math.ceil(number);


// if (!isNaN(user) && (user <= 10 && user >= 0)) {

//     if (user === random) {
//         alert("Congrats you guessed it right")
//     }
//     else {
//         alert("Try again!")
//     }

//     document.write("Guessed Number " + user + "<br>");
//     document.write("Mine Number " + random + "<br>");
// }
// else {
//     alert("Enter Integer number between 1 to 10")
// }













