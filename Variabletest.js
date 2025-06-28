
//Let Variable 
let a = 2 // Decleared a and assign value 2 to variable
{
    a = 5
    console.log(a); // Reassign value to same variable , updated value will be print inside block not outside output will be 5
     
}
console.log(a); // it will print 2

// Const Variable 
const b = 2 // Decleared a and assign value 2 to variable
{
   // b = 5
    console.log(b); // error Assignment to constant variable.
     
}
console.log(b);

// Var Functinal Scope
function example() {
  var message = "Hello"; // Accessible only inside this function
  console.log(message);  // Output: Hello
}
//console.log(message); // Error: message is not defined

example();


// Hoisting with let Const and Var
console.log(city); // Error: Cannot access 'city' before initialization - Hoisting
let city = "New York";

// Hoisting with Const
console.log(city); // Error: Cannot access 'city' before initialization - Hoisting
const city1 = "Delhi";

// Hoisting with Var
console.log(name); // Output: undefined (because of hoisting)
var name = "John";


// Test scope and Hoisting 
function testScope() {
  if (true) {
    var oldVar = "I am a var"; // function-scoped
    let newLet = "I am a let"; // block-scoped
    const constant = "I am a const"; // block-scoped
  }

  console.log(oldVar);  // Output: I am a var
  // console.log(newLet);  // Error: newLet is not defined
  // console.log(constant); // Error: constant is not defined
}

testScope();



