// THIS AND ARROW FUNCTION

const user = {
    username : "Maninder",
    Price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to tthis website`) 
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);





// function chai (){
//     let userName = "Hitesh"
//     console.log(this.userName)
// }


// const chai = function (){
//     let userName = "Hitesh"
//     console.log(this.userName)
// }




const chai = () => {
    let userName = "Hitesh"
    console.log(this)
}
// chai()



// ------------------------------------------
// arrow function representation: () => {}
// -------------------------------------------

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo (3,6))

// -------Or-----------


// const addTwo2 = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2 (3,6))

// if you try on object then should do wrap the object in curly braces

const addTwo3 = (num1, num2) => ({username: "Maninder"})
console.log(addTwo3 (3,6))




// representation with array
// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach(() => ())