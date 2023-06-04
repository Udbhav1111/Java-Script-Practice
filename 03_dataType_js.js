//Primitive-DataType : NN BB SS U
// n : number, n: null, b: boolean, b: bigint, s: symbol,s: string, u:Undefined
let a = 1;
let b = null;
let c = true;
let d = BigInt(250)+BigInt(250);
let e = Symbol("This is symbol");
let f = "Hello World";
let g = undefined;

//typeof() -> Used to tell the datatype
console.log("Seven Types of Primitive DATATYPE >NN,BB,SS,U<");
console.log("Number: ",a,typeof(a));
console.log("Null: ",b,typeof(b));
console.log("Boolean: ",c,typeof(c))
console.log("BigInt: ",d,typeof(d))
console.log("Symbol: ",e,typeof(e));
console.log("String: ",f,typeof(f));
console.log("Undefined: ",g,typeof(g));

//                          NON-PRIMITIVE DATATYPE(Object,arrays)

//Object in Javascript is kind a dictonary in Python having key and value pairs For Example:
const item={
    "udbhav":1,
    "luck":1,
    "Age":19
}

//access the value of Object by putting the key inside square brackets [] in a object -- For Example
//if the given key in [] not present in object than it will return an (undefined)

console.log("\n\nObject Item: key=udbhav,value=",item["udbhav"]); // this will give 1 in output

console.log("Key Not present in object: ",item["new"]);//it will return undefined
