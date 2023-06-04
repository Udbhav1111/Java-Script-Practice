const prompt=require("prompt-sync")({sigint:true});
let num = prompt("Enter Any Number");
num = Number.parseInt(num);
switch(num){
    case 12:
        console.log("this is even 12");
        break;
    case 20:
        console.log("This is 20");
        break;
    default:
        console.log(num);
}