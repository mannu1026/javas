// Functions and Parameters ------------------------------------

// console.log("M")
// console.log("a")
// console.log("n")
// console.log("i")
// console.log("n")
// console.log("d")
// console.log("e")
// console.log("r")

function myName(){
    console.log("M")
    console.log("a")
    console.log("n")
    console.log("i")
    console.log("n")
    console.log("d")
    console.log("e")
    console.log("r")
}

// myName()


function addTwoNumbers(num1, num2){
    // num1 + num2;
    console.log(num1 + num2)

}

// addTwoNumbers(4,9)
// addTwoNumbers(4,"9")
// addTwoNumbers(4,"a")





// function addTwoNumbers(num1, num2){

//     let result =  num1 + num2
//     return result;
//     // nothing can print after "return" statement
   
// }

// const result = addTwoNumbers(4,9)
// console.log("Result : ", result)

// ------------------------------- OR --------------------------------


function addTwoNumbers(num1, num2){

    return  num1 + num2;
    // nothing can print after "return" statement
   
}

const result = addTwoNumbers(4,9)
// console.log("Result : ", result)





// DIFFERENT WAYS TO VALUES TO THE PARAMETERS IN A FUNCTION


// QUES : A welcome message for all user when they logged in
function logInUserMessage(userName = "Sam"){
    // if(userName === undefined)
    if(!userName){
        // console.log("Please enter a username.")
        return
    }
    return `${userName} just logged in.`
}

// console.log(logInUserMessage("Manider"))





// Ques: ADDING AMOUNT OF THINGS IN THE CART 

function calcCartPrice(val1, val2, ...num1){
    return  num1

}

// console.log(calcCartPrice(200, 400, 600, 200, 300))




// passing object in function------------------------------------------------------------------------
// const user = {
//     userName : "Maninder_1026",
//     price : 199
// }
// function handleObject(anyObject){
//     console.log(`Username is  ${anyObject.userName} and price ${anyObject.price}`)

// }
// handleObject(user)

// ------------------------OR----------------------------------------------

// const user = {
//     userName : "Maninder_1026",
//     price : 199
// }
function handleObject(anyObject){
    console.log(`Username is  ${anyObject.userName} and price ${anyObject.price}`)

}
// handleObject(user)
handleObject({
    userName : "Maninder_2610",
    price : "299"
})




// passing Array in function -----------------------------------------------

const arraarForFunction = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(arraarForFunction))
console.log(returnSecondValue([100, 200, 300, 400, 500]))