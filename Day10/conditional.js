console.log("Conditional Statements or Decision Making Statements");
console.log("\nIf Statement");
const age = 21;
if(age>=18){
    console.log("You are Adult");
}

console.log("\nIf-Else Statement");
if(age>=18){
    console.log("You are verified");
}
else{
    console.log("You are not verified");
}

console.log("\nIf-Else If -Else Statement");
const temp = 25;
if(temp>30){
    console.log("It's Hot");
}
else if(temp>20){
    console.log("It's Warm");
}
else{
    console.log("It's Cold");
}

console.log("\nSwitch Statement");
const day = "Sunday";
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the working Day");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Regular Day");
        break;
}