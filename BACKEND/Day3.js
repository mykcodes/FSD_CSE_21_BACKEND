//Promises:object
const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise is done");
})
promiseOne.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
    
});