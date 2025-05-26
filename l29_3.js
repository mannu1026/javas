// forEach loop


// for array

const coding = ["javascript", "cpp", "python", "ruby", "java"]


// coding.forEach( function (items) {
//     console.log(items)
// })


// coding.forEach((items) => {
//     console.log(items)
// });


// function printMe(items){
//     console.log(items)
// }

// coding.forEach(printMe)



// coding.forEach((item, index, array) => {
//     console.log(item, index, array)
// })  











// for object inside the array

const coding1 = [{
    languageName : "JavaScript",
    languageFileName : "js"
},

{
    languageName : "Java",
    languageFileName : "java"
},

{
    languageName : "Python",
    languageFileName : "py"
},

{
    languageName : "Ruby",
    languageFileName : "rb"
}]

coding1.forEach((item) => {
    // console.log(item.languageName); 
    // console.log(item.languageFileName); 
    console.log(item.languageFileName, "->" , item.languageName); 
})