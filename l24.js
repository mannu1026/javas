// Immediately invoked function execution

(function chai (){
    console.log("DB Connected")
})();

// OR (by using arrow function)

((name) => {
    console.log(`DB Connected Successfully, ${name}` )
})("Maninder") 

