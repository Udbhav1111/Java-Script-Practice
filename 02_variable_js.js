// Simple way to Display something on screen 
console.log("hello world");

// We can use 3 datatype to declare a variable (let,var,const)
//rules of creating variable NAME = (can be start from letter, and sign are allowed) BUT NUMBER AND WIDESPACE ARE NOT ALLOWED ALSO ANY KEYWORD
let a = 1;
console.log(a);

//starting variable with $ can allow
let $one = 2;
console.log($one);

//                                                      LET
// let = It is used as a block scope variable it will remain used in a specific block of function and can only access there For example;
// it's value can not be change in global environment but can be change in a particular box

//Using Global environment
let y = 10;
//Using in block
{
    let y = 20;
    console.log("y block",y)
}
//let y = 2;  //not Allowed through an error
console.log("y global",y);


//                                                      VAR
//this type of vraible can be overwrite  and change as compared to (let and const) For example
var i = "Jack";
console.log("Before change var",i);

var i = "Udbhav"
console.log("After change var",i);



//                                              CONST
//this type of variable can't be change in global environment or in block
const lak = "udbhav";
console.log("Consonant Variable",lak);

//const lak = "someone_else"   //gives an error..