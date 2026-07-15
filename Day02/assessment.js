//Largest Number 
let num1 = 34;
let num2 = 89;
let num3 = 98;
if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
//Reverse a string
let str = "Java Script";
let rev = "";
for(let i = str.length-1;i>=0;i--){
    rev += str[i];
}
console.log(rev);
//Grade Calculator
let mark = 35;
if(mark>90){
    console.log("A");
}
else{
    if(mark>70){
        console.log("B");
    }
    else{
        if(mark>60){
            console.log("C");
        }
        else{
            console.log("D");
        }
    }
}
//print 1 - 100
for(let i=1;i<=100;i++){
    console.log(i);
}
//object creation
let Student ={
    Name : "Gopal",
    Age : 24,
    Course : "Java FSD"
}
console.log(Student);