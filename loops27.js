// LOOPS

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number.")
    }
    // console.log(element);
}

// nested loops--------------------------------------------------------

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`)
   
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        // console.log(i + "*" + j + ' = ' + i*j );    
    }

    //  console.log("\n")
}


// loops on array ---------------------------------------------------------
let myArray = ["ironamn", "flash", "batman", "superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}



// keywords -----------------------------------------------------------
// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Detected 5")
        break;
    }
    // console.log(`Value of index is ${index}`)
    
}
console.log("\n")


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Detected 5")
        continue
    }
    // console.log(`Value of index is ${index}`)
    
}














// -----------------------------------------------------------------
// ---------      While loops       ---------------------------------
// ----------------------------------------------------------------

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`)
    index  = index + 2
}


// array using while loops
let myArray2 = ["ironamn", "flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is : ${myArray2[arr]}`)
    arr++ ;
}










// -----------------------------------------------------------------
// ---------       Do - While loops       ---------------------------------
// ----------------------------------------------------------------

let score = 11
do{
    console.log(`Score is ${score}`)
    score = score + 2
} 
while (score <= 10);