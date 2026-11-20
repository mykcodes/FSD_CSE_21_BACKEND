//Synchronous and asynchronous programming
// console.log("JavaScript");
// function hello() {
//     console.log("Hello World");
// }
// hello ();
// console.log("This is synchronous programming");

// const hello = () => {
//     setTimeout (()=> {
//         console.log("Hello World");
//     }, 2000);
// }
// hello();
// console.log("This is Asynchronous programming")
//callback, promises, async/awatt

// function add (n1,n2,callback) {
//     console.log(n1+n2);
//     callback();
// }
// let a =10;
// let b=20;
// add (a,b,sayHi);
// add(a,b,hello);
// add(hello,sayHi);
// function sayHi() {
//     console.log("this is callback function");
// }
// function hello() {
//     console.log("Hello, World!");
// }

// Question 1 : create a function display(callback) that prints "Welcome to ABES", then call callback which prints learning "FSD in CSE21"

function display(callback) {
    console.log ("Welcome to ABES");
    callback();
}
function print() {
    console.log("Learning FSD in CSE 21");
}
display(print);