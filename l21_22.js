// GLOBAL AND LEVEL SCOPE

// let a =19
// const b = 12
// var c = 5


// var c=300
let a=300
if(true){
    let a =19
    const b = 12
    
    // console.log("If stt. :", a)
  
}
// console.log(a)
// console.log(b)
// console.log(a)




// ======================@@@@22222@@@@@@@---------------------------------


function one(){
    const userName = "Maninder"

    function two(){
        const website = "Youtube"
        // console.log(userName)
    }
    // console.log(website); -> due to error found (because parent don't access child scopes)

    two();  
}

// one();

if(true){
    const userName = "Maninder"

    if (userName === "Maninder"){
        const website = "Youtube"
        // console.log(userName + website)
    }
    // console.log(website) : out of scope
}
// console.log(userName) : out of scope too






// -------------------------------------------------------------------
// -------------------------------------------------------------------interesting question -----------------------------
// -------------------------------------------------------------------
console.log(addOne(5))
function addOne(num){
    return num +1
}



console.log(addTwo(6))
const addTwo = function(num){
    return num + 2

}


