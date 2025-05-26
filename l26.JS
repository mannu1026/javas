// CONTROL FLOW (LOGIC CONTROL) IN JS

// // IF
// if(conditions){
//     // arguments for js
// }




if(2 == "2"){
    // console.log("executed")

}



if(2 === "2"){
    // console.log("executed")
}
// console.log("not executed")




 const temperature  = 48
if(temperature > 50){
    // console.log("temperature is lowert than 50")
}
else{
    // console.log("temperature is greater than 50")
}



if (temperature != 48){
    // console.log("temp is not equal to 48")
}
else{
    // console.log("temp is equal to 48 ")
}




const score = 200
if(score > 100){
    const power = "fly"
    // console.log(`User Power; ${power}`)
}
// console.log(`User Power; ${power}`)



// short hand notation -------------------------------------------

const balance = 100
// if(balance>500) console.log("test");

if (balance < 500){
    // console.log("less than 500")
} 
else if(balance < 750){
    // console.log("less than 750")
}
else if(balance < 999){
    // console.log("less than 999")
}
else{
    // console.log("less than 1200")
}




const userLoggedIn = true
const chequeBook = false
const debitCard = false

if(userLoggedIn && debitCard && chequeBook ){
    // console.log("entry allowed ")
}
else{
    // console.log("entry not allowed")
}


if(userLoggedIn || debitCard || chequeBook ){
    // console.log("entry allowed ")
}
else{
    // console.log("entry not allowed")
}


 













// ---------------------------------------------------------------------
// -------------------------------------------------------------------

// SWITCH CASE ->  for checking a value with multiple conditions

// switch(){
//     case value:

//         break;

//     default:
//         break;
// }



const month = 5

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3: 
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("default case match")
        break;
}



 