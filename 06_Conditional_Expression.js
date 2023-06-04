//Expression : Some time we try to execute a block of code based on some condition
//prompt: It is used to get input from the user in javascript
//if... , if..else.. and else.. --> Confditonal Statement

const prompt=require("prompt-sync")({sigint:true});

let num = prompt("Enter any Number: ");
console.log(typeof(num)); // The type first is string and after converting it
num = Number.parseInt(num) //Change the data type of num STRING -> INT :parseInt is function which can do that!
console.log(typeof(num)); 
if (num<0){
    console.log("Num is Negative");
}
else if(num>0 && num >= 18){
    console.log("Num is Positive And you can drive");
}
else{
    console.log(num);
}