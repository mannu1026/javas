// OBJECTS --------------------------------------
   
// two ways to declare objects
// -> Literals:     Singleton will not be created in this scenario.
// -> Constructors: Singleton will be created in this scenario. 


// Literals:-
// const User = {
//     userName : "Maninder",
//     "full_name " : "Maninder Singh",
//     age : 21,
//     Location : "Dehredun",
//     email : "maninder1026@gmail.com",
// //     isLoggedIn : "false",
// //     lastLogIn : ["Monday", "Friday"]
// // }

// // console.log(User.email)
// // console.log(User["email"])
// // console.log(User["full_name "])




// // Sumbol-> 

// const mySymbol = Symbol("Key1")

// const User = {
//     userName : "Maninder",
//     "full_name " : "Maninder Singh",
//     age : 21,
//     [mySymbol] : "myKey1",
//     Location : "Dehredun",
//     email : "maninder1026@gmail.com",
//     isLoggedIn : "false",
//     lastLogIn : ["Monday", "Friday"]
// }

// // console.log(User.email)
// // console.log(User["email"])
// // console.log(User["full_name "])
// // console.log(User[mySymbol])
// // console.log( typeof [mySymbol])

// // how to update values

// console.log(User.email = "Maninder2610@gmail.com") 
// // Object.freeze(User)
// User.email = "Mannu1026@gmail.com"

// console.log(User)


// // Simple Functions ->
  
// User.greeting  = function(){
//     console.log("Hello JS User")
// }
// User.greeting2  = function(){
//     console.log(`Hello JS User, ${this.userName}`)
// }

// console.log(User.greeting())
// console.log(User.greeting2())










// Lecture 17 (objects using constructors)










// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "22Man"
tinderUser.name = "Maninder"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Maninder",
            lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname)


const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = {obj1,obj2}                             
//     -> retrieve two differnet objects in an obj3.
// const obj3 = Object.assign({}, obj1, obj2)          
//      -> it retrieves same as above.
// const obj3 = {...obj1, ...obj2}
//      -> spread method to join two objects
// console.log(obj3) ;


// getting valus from objects ----------------------------------------
// a no. of objects in ana array

const UserArray = [
    {

    },
    {

    },
    {

    },
    {

    }
]

UserArray[2].email;


// to access keys of an Object

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// // if a value doesn't exist in an object/array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));








// 
// ------------------ Lecture 18 ----------------------
// 









// de-structure

const course = {
    coursename : "JS",
    price  : "999",
    courseInstructor : "Maninder"
}

// course.courseInstructor  -> accessing courseInstructor from course

 const {courseInstructor : Ins} = course 
//  console.log(courseInstructor)
 console.log(Ins)


// //  json object
// {
//     name: "Maninder",
//     coursename : "js code aor chai",
//     "price" : "free"
// }

// sometimes APIs are also seem in form of ARRAY as well as OBJECT