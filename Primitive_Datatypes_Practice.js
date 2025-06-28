// nn bb ss u

a = null;
b = 123;
c = true
d = BigInt("567") + BigInt("3");
e = "Shruti";
f = Symbol("I am Symbole");
g = undefined;

console.log(a, b, c, d, e, f,g);
console.groupCollapsed(typeof d);


// Example of String - A string is used to represent textual data.
let name = "Shruti";
console.log(name);  // Output: Shruti 
console.log(typeof name);  // Output: string

//Example of  number - The number type is used for both integers and floating-point numbers.

let age = 30;
let price = 99.99;
console.log(age);  // Output: 30
console.log(price);  // Output: 99.99
console.log(typeof age);  // Output: number
console.log(typeof price);  // Output: number

// Example of boolean - A boolean type has two possible values: true or false. It is often used in conditional statements.

let isMarried = false;
console.log(isMarried);  // Output: false
console.log(typeof isMarried);  // Output: boolean

// Example of null - The null value represents an intentional absence of any object value. It is often used when an object or variable is expected to be empty.
let car = null;
console.log(car);  // Output: null
console.log(typeof car);  // Output: object (this is a quirk in JavaScript)

//Example of Undefined - A variable that has been declared but has not yet been assigned a value holds the value undefined.

let salary;
console.log(salary);  // Output: undefined
console.log(typeof salary);  // Output: undefined

//Example of Symbole - A symbol is a unique and immutable primitive value that is often used as the key for object properties.

let sym1 = Symbol("identifier");
let sym2 = Symbol("identifier");
console.log(sym1 === sym2);  // Output: false (symbols are always unique)
console.log(typeof sym1);  // Output: symbol


//Object in Js - Non Primitive Datatypes
const item = {
"Shruti" : true,
"ABC" : false,
"PQR" : 67,
"XYZ" : undefined,

}




