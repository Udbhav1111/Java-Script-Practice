//Funtions is a group of instruction to perform some specific task
//basic syntax of a function
//function  FUNCTION_NAME(parameter){//code to be return}
let a = 1;
let b = 2;

let c = 10;
let d = 20;
function Avg(a,b){
    console.log("\nDone..")
    return (a+b)/2;
}

console.log(Avg(a,b));
console.log(Avg(c,d));


//Arrow Function
//Synatx of Writing Arrow Functiion is (let,const,var) function_name = (parameter) => {code to be executed}
const sum =(p,q) =>{
    console.log("\n\n Using Arrow FUnction the addition of two number is: ")
    return p+q;
}
console.log(sum(a,b));
console.log(sum(c,d));