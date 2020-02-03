//const promise = new Promise() // Creates a promise

//The Promise constructor function takes in a single argument, a (callback) function. This function is going to be passed two arguments, resolve and reject.

//resolve - a function that allows you to change the status of the promise to fulfilled.
//reject - a function that allows you to change the status of the promise to rejected.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve() // Change status to 'fulfilled'
//     }, 2000)
// })

// console.log("Promise before getting resolved", promise);

// setTimeout(() => {
//     console.log("Promise after getting resolved", promise);
// }, 3000)


// console.log("Promise after getting resolved1", promise);

// function onSuccess() {
//     console.log('Success!', promise)
// }

// function onError() {
//     console.log('Error', promise)
// }

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 2000)
})

// promise.then(onSuccess)
// promise.catch(onError)

promise.then(function () {
    console.log("Success")
})

promise.catch(function () {
    console.log("Error")
})