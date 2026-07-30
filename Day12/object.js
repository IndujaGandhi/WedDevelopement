let bag ={ 
    book : "JavaScript",
    pen : "Flair Blue Point pen",
    purse : "Chanel"
};
console.log(bag);
console.log(bag.book);
console.log(bag["pen"]);

bag.laptop = "HP Victus";
console.log(bag);

bag.pen= "XO Black point pen";
console.log(bag);

delete bag.purse;
console.log(bag);

console.log(bag.hasOwnProperty("book"));
console.log("laptop" in bag);






