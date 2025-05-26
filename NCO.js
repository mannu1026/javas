// NULLISH COALESCING OPERTAOR (??): null and undefined

let val1;
// val1 = 5 ?? 10 -> 5
// val1 = null ?? 10 -> 10
// val1 = undefined ?? 15 -> 15
val1 = null ?? 12 ?? 23


// console.log(val1);







// terinary operator (if-else in short)
// syntax
//   condition ? true : false

const iceTeaPrice = 70
iceTeaPrice >= 80 ? console.log("more than or equal to 80") : console.log("less than 80") 