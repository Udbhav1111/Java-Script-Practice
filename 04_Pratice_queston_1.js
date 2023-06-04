//Q1 - Create a variable of type string and try to add the value 1 in it
//Solution: 
var str1 = String("1")
console.log();


//Q2 - Use typeof function to display the datatype of any variable
console.log("\n\n -- ANSWER - 2")
var txt = "yo wasuup?";
console.log("By using TypeOf function -->",typeof(txt));


//Q3 - Create a const Object in js can you change it to hold a number later?
console.log("\n\n -- ANSWER - 3")
const items ={
    name:"udbhav",
    section:1,
    isprinciple:false
}

//items = 54; // Answer -> error
console.log("We can Not add A number later in a object having datatype CONST");



//Q4 Try to add the new key in the const Object in problem 3?
console.log("\n\n -- ANSWER - 4");
items["friend"] = "Alone";
console.log(items)

//Q5 - Wrtie a program to create Word Meaning  at least 5 words
console.log("\n\n -- ANSWER - 5 DICTONARY");
let dict = {
    Schadenfreude: "A German word referring to the feeling of pleasure or satisfaction derived from the misfortune or suffering of others.",
    Obstreperous: "Noisy, unruly, and difficult to control or manage.",
    Callipygian: "Having well-shaped or attractive buttocks.",
    Lachrymose: "Tearful or given to shedding many tears; mournful or melancholic.",
    Serendipity: "The occurrence of events by chance in a happy or beneficial way."
}

console.log(dict.Callipygian,"\n",dict.Schadenfreude,"\n",dict.Obstreperous,"\n",dict.Lachrymose,"\n",dict.Serendipity);