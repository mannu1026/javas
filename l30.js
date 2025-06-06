// FILTER, MAP, REDUCE

// const coding = ["javascript", "cpp", "python", "ruby", "java"]


//  const values = coding.forEach((item) => {
//     console.log(item);
// })
// console.log(values);



// const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = myNums.filter((num) => num > 4)

// const newNums = myNums.filter((num) => {
//    return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)



  const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
  ]

  let userBooks = books.filter((bk) => bk.genre === 'History')

  userBooks = books.filter((bk) => { 
    return bk.publish >= 1995  && bk.genre ==='History'
})

//   console.log(userBooks);









 

//  -----------------------------------------------------------------------------
//                     
// --------------------------------------------------------------------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {return num +10})


// CHAINING ----------------------------------

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 30)
// console.log(newNums)











// --------------------------------------------------
// ------------------------------------------------------

// REDUCE-> 






const myNums = [1, 2, 3, 4, 5, 6]

const myTotal = myNums.reduce((acc, currval) =>{
    // console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
}, 0)
// console.log(myTotal)








const shoppingCart = [
    {
        courseName : "JavaScript",
        coursePrice : 2999
    },
    {
        courseName : "Python",
        coursePrice : 999
    },
    {
        courseName : "C#",
        coursePrice : 2599
    },
    {
        courseName : "React",
        coursePrice : 3999
    },
    {
        courseName : "SQL",
        coursePrice : 1599
    }
]

const payablePrice = shoppingCart.reduce((acc, item) => acc + item.coursePrice,0)

console.log(payablePrice)