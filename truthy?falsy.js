const userEmail = "man@gmail.com"

if(userEmail){
    console.log(`${userEmail}`)
}
else{
    console.log("no email found")
}

const userEmail2 = ""

if(userEmail2){
    console.log(`${userEmail2}`)
}
else{
    console.log("no email found")
}





// falsy values-> 
false , 0, -0, BigInt(0n), "", null, undefined, NaN

// rest of them are truthy value such as:
"0", "false", " ", [], {}, function(){}





// checking of empty arrays
const userEmail3 =[]
if(userEmail3.length === 0){
    console.log(" Array is empty")
}


// cehcking of empty objects
const emptyObj= {}
  
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
 