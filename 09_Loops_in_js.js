//There are three types of loop 
// 1 - For Loop
// 2 - For In
// 3 - For Of 
// 4 - while Loop
// 5 - Do while
const prompt=require("prompt-sync")({sigint:true});

//Simple for Loop syntax -> for(initialization;condition;operation){ code to be execute }
for(let i = 0; i<5;i++){
    console.log(i);
}

//Factorial of a number 5 using simple for loop
let fac = 1;
for(let j=1;j<=5;j++){
    fac = fac*j
}
console.log("\n\nFactorial of 5 is: ",fac);

//Iteration of the object by using FOR IN Loop
let obj = {
    udbhav:90,
    harsh:90,
    harshit:90,
    lavin:90
}
console.log("\n\n\nFOR IN LOOP\n")

for(let a in obj){
    console.log("Marks of " + a + " is "+ obj[a]);
}

console.log("\n\n\nFOR OF LOOP\n")
//For OF loop Example
for(let b of "Harry"){
    console.log(b);
}


console.log("\n\n\nWHILE LOOP\n")
//WHILE LOOP
let i = 0
while(i<3){
    console.log(i);
    i++;//if you don't write i++ then it will become infinite loop
}


console.log("\n\n\nDO WHILE LOOP\n");
//DO WHILE LOOP
let k =1;
do{
    console.log(k);
    //this loop execute at once and than it check the condition
}while(k<0)//change the condition and see what happens after it!!