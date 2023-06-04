//Q1 - check weather the age of user lies between 10 or 20 using logical operators
//Solution
const prompt=require("prompt-sync")({sigint:true});
let age = prompt('Enter your age: ');
if(age>=10 && age <=20)
{
    console.log("The age lies between 10 to 20");
}
else{
    console.log("Not lies between 10 to 20");
}

//Q2 - Demonstrate the switch case statement in java script
//solution
let fav_colour = prompt("Enter Your Favorite Colour: ")
switch(fav_colour){
    case "blue":
        console.log("Blue is a good one!!");
        break;
    case "green":
        console.log("green is also good");
        break;
    case "red":
        console.log("red is kinda danger sign");
        break;
}


//Q3 - Java Script Program check the number is divisible by 2 or 3
//solution
let num1 = prompt("Enter The Number: ");
if (num1%2==0 && num1%3==0){
    console.log("Number is Divisible By 2 and 3");
}
else if(num1%2==0)
{
    console.log("Number is divisible By 2");
}
else if(num1%3 == 0)
{
    console.log("Number is divisible By 3");
}

else{
    console.log("Number is not divisible by 2 and 3");
}