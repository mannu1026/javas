// strings can be defined both ways ("" , '') -------------------------------------------------
// examples

// let name = "string"
// let name2 = 'string'

// // two strings can be atached using '+' operator-------------------------------------------------
// // ex 

// "Hello" + "World" = HelloWorld;
// 'Hello' + 'World' = HelloWorld;


// Either of using this we prefer modern way such as: -------------------------------------------------
// aso we can perform such operations that can be peform on simpl e string/ -------------------------------------------------

// let firstName = "Maninder"
// let last_name = "Singh"

// console.log(`My name is $(firstName) and `$(last_name)`);

// let str1 = "Hello";
// let str2 = "World";
// console.log(`${str1} ${str2}`);

// let str3 = "Hello";
// let str4 = "World";
// console.log(` hii, ${str3} to the  ${str4}`);


// let name1 = "Manider"
// let lastName = "Singh"
// console.log(`My name is ${name1}  ${lastName}`)



//  another method to define strings using objects key-pair(as Noon- Primitive datatypes) ----------------------------------------

// const playerName = new String('Maninder')
// console.log(playerName[3]);
// console.log(playerName.__proto__);

// console.log(playerName.length);
// console.log(playerName.toUpperCase()); 

// to divide a string into sub-strings(slicing)

// const newString = playerName.substring(0,3)
// console.log(newString)


// const anotherNewString = playerName.slice(0,3)
// console.log(anotherNewString)

// const anotherNewString2 = playerName.slice(-7,3)
// console.log(anotherNewString2)

// TRIM-> used to remove unnecessary space just before and afyter the strings

// const name1 = "   Maninder   "
// console.log(name1 + " prints original string");
// console.log(name1.trim() + "remove spaces from start and end");
// console.log(name1.trimEnd() + "remove spaces from the end of the string");
// console.log(name1.trimStart() + "removes spaces at the beginning of the string");


// Replace-> operated on url typed script replace characters by which you want -------------------------------------------

// const url = "https://google.com/%20google"
// console.log(url.replace("%20",""))

// // .includes returns BOOLEAN Value(true, false)
// console.log(url.includes("com"))
// console.log(url.includes("!com"))

// String to Array (by using split) -------------------------------------------

const playerName = new String('Maninder/Singh/Buttar/Sikh')
console.log(playerName.split("/"))


