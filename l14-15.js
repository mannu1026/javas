// ARRAYS ------------------------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[3])

// //   add elements in array----------------------------
// myArr.push(6, 7)
// console.log(myArr)

// // delete elements from array ----------------------------
// myArr.pop()
// console.log(myArr)

//unshift -> add element in front of array ------------------------------
// myArr.unshift(7)
// console.log(myArr)

// // shift -> remove unshifted element -------------------------------
// myArr.shift()
// console.log(myArr)

// Methods-> retrieve boolean values---------------------------------
// console.log(myArr.includes(8))
// console.log(myArr.indexOf(4))
// console.log(myArr[4])


// JOIN -> changes representation from array to string and bind our data too

// const newArr = myArr.join()
// console.log(myArr)
// console.log( typeof myArr)
// console.log(newArr)
// console.log(typeof newArr)

// SLICE , SPLICE --------------------------------------------------------------------------------------------------
//  console.log("A", myArr)

//  const myNewArr1 = myArr.slice(1,3)
//  console.log(myNewArr1)
//  console.log("B", myArr)

// const myNewArr2 = myArr.splice(1,3)
//  console.log(myNewArr2)
//  console.log("C", myArr)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------  ARRAY PART 2    ------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const MCU_heroes = ["Thor","IronMan","CaptainAmerica","Vision"]
// const DC_heroes = ["SuperMan", "BatMan", "Flash", "AquaMan"]


// PUSH-> push a complete array into anpother as array like an element of that array
// MCU = MCU + DC----------------
// MCU_heroes.push(DC_heroes)
// // console.log(MCU_heroes)
// console.log(MCU_heroes[3])
// console.log(MCU_heroes[4])
// console.log(MCU_heroes[4][0])

// concat-> push elements of an array into another array
// NewCinematic = MCU + DC--------------
// const allHeroes = MCU_heroes.concat(DC_heroes)
// console.log(allHeroes)

// Spread->
// const allHeroes = [...MCU_heroes, ...DC_heroes]
// console.log(allHeroes)





// convert an array consisting another array , another array consisting an another array too and so on  into a REAL ARRAY ----------------
// const another_arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10], 11, 12 ], 13, 14]
// const real_another_arr = another_arr.flat(Infinity)

// console.log(real_another_arr)





// console.log(Array.isArray("Maninder"))
// // lets convert into an aaray--------------------------
// console.log(Array.from("Maninder"))
// console.log(Array.from(name1 = "Maninder"))




let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log (Array.of(score1, score2, score3, score4))
