// summary of datatypes of JS

// Types ->

// 1) Primitive datatypes
// these are of 7 types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const name = "Maninder"

// const score = 3

// const isLoggedIn = true

// const outsideTemp = null

// let userEmail;

// const id= symbol('123')
// const anotherId= symbol('123')
// console.log(id === anotherId)

// const bigNumber = 2345564345343345n;
// console.log (typeof bigNumber)

// 2) Non-Primitive datatypes
//   such as: Arrays, Objects, Functions

//  array=>
 const Heroes = ["IronMan","Captain America", "Thor", "HawkEye", "BatMan"];


// object =>
 let myObj = {
    name: "Maninder",
    age: 21,
    add: "Dehradun"
 }

//  function =>
    const myFunction = function(){
        console.log("Hello World");
    }


    console.log (typeof Heroes);
    console.log (typeof myObj);
    console.log (typeof myFunction);