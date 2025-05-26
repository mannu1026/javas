// forin loop 

// for object---------------------------------------
const myObj = {
    js: "javascript",
    py: "python",
    cpp : "C++",
    rb: "ruby",
}

for (const key in myObj) {
    // console.log(key) -> to print keys
    // console.log(myObj[key]) -> to print key's value
    // console.log(`${key} is a shortcut key of ${myObj[key]}`)
}


// for Array---------------------------------------
const arr = ["jb", "py", "cpp", "rb"]
for (const key in arr) {
    // console.log(key) -> to retrieve index no(because keys for array are their index no)
    // console.log(arr[key]) -> to retrieve values at keys accordingly
    // console.log(`${key}, is a key for element ${arr[key]}`)
}


// for maps
// const map1 = new Map()

// map1.set("IN", 'INDIA');
// map1.set("USA", "UNITED STATES OF AMERICA");
// map1.set("UK", "UNITED KINGDOM");

// for (const key in map1) {
//     console.log(key)  
// }

