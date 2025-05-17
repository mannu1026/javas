// lecture 6 --------------------------------------

// let score = 33;
 
// console.log(typeof score);
// console.log(typeof(score));

// datatype conversion----------------------------

// let score1 = "33";
 
// console.log(typeof score1);


// let valueInNumber = Number(score1);
// console.log(typeof valueInNumber);

// datatype conversion of real string

// let score2 ="maninder";

// let valueInNumber2 = Number(score2);
// console.log(typeof valueInNumber2);

// console.log(valueInNumber2);  :here valueInNumber2 is NaN(Not a number). meaans that JS successfully convert the string into number but forget to check typechecking.

// "33" => 33  
// "33acs" => NaN
// true => 1; false => 0


// decimal to boolean conversion---------------------------------------

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// let isLoggedIn2 = 0;
// let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2)

// let isLoggedIn3 = "";
// let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3)

// let isLoggedIn4 = "maninder";
// let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
// console.log(booleanIsLoggedIn4)

// string to number  actual conversion -----------------------------------------------------------

let number = 33
let stringNumber = String(number)
console.log(stringNumber)
console.log( typeof stringNumber)

