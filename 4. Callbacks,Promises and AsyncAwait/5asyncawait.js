// async function asyncAwaitTraining() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise; // wait until the promise resolves (*)

//     console.log(result); // "done!"
// }

// asyncAwaitTraining();


//Error Handling
//1.
// async function f() {
//     await Promise.reject(new Error("Whoops!"));
// }
// //2.
// async function f() {
//     throw new Error("Whoops!");
// }
//3. We can use try catch
// const fetch = require("node-fetch");
// async function f() {

//     try {
//         let response = await fetch('http://url-not-exists');
//     } catch (err) {
//         console.log(err); // failed to fetch
//     }
// }

//f();