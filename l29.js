// HIGH ORDER ARRRAY LOOPS;

// for of
// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    // console.log(i);
}

const greetings = "Maninder Singh"
for (const i of greetings) {
    // console.log(i);
}









// MAPS ------------------------------------------------------------
const map1 = new Map()

map1.set("IN", 'INDIA');
map1.set("USA", "UNITED STATES OF AMERICA");
map1.set("UK", "UNITED KINGDOM");
// map1.set("IN", 'INDIA');  -> remove redundancy
// console.log(map1)

for (const [m,n] of map1) {
//     console.log(m)
//     console.log(n)
//     console.log(m,":",n)
//     console.log("\n")
}








// Object ------------------------------------------------------------

 const myObj = {
    'game1': 'Asphalt 8 airborne',
    'game2': 'Ninja Takashi',
    'game3': 'Dr. Driving'
}

// for (const [no,name] of myObj) {
//     console.log(no, ":", name)
// }