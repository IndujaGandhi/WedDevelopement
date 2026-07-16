
// Global Scope
let a = 10;
console.log("Global Scope");
console.log("a = " + a);

function demo() {

    // Function Scope
    let b = 20;
    console.log("Function Scope");
    console.log("a = " + a);
    console.log("b = " + b);

    if (true) {

        // Block Scope
        let c = 30;
        console.log("Block Scope");
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("c = " + c);
    }

    // console.log(c); // Error (Block Scope)
}

demo();

// console.log(b); // Error (Function Scope)

console.log("Outside Function");
console.log("a = " + a);
