let a = [];
console.log(a);

let b = [10,20,30,40];
console.log(b);
console.log("Length of Array:",b.length);

let a1 = new Array(10,20,30);
console.log(a1);

let c = ["HTML", "CSS", "JS"];
let lst = c[c.length-1];
console.log("Last Item:",lst);

c[0] = "Bootstrap";
console.log("Updated Array:",c);
c.push("Node.js");
c.unshift("FSD");
console.log("Updated Array:",c);
console.log("\n");

let d = ["HTML", "CSS", "JS"];
let lst1 = d.pop();
console.log(d);
let fst = d.shift();
console.log(d);
d.slice(0,1);
console.log("Sliced Array:",d);

console.log("\n");
let e = ["HTML", "CSS", "JS"];
e.length = 7;
console.log(e);
e.length = 2;
console.log(e);

for(let i=0; i<e.length; i++){
    console.log(e[i]);
}

a.forEach(function myfunc(x){
    console.log(x);
});

let a2 = [10,20,30,40];
let b2 = [50,60,70,80];
let c2 = a2.concat(b2);
console.log(c2);

