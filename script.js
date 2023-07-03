// // The code snippet below is synchronous. It calls callback1 one time and callback2 three times. 
// // You must modify this code to make it asynchronous with the following rules:

// // callback1 must be called only one time, after 2 seconds.
// // callback2 must be called three times with an interval of 1 second.

// function job(callback1, callback2) {
//     callback1();
//     callback2();
// }

// function cb1(){
//     setTimeout(function(){
//         console.log("One time called after 2 seconds");
//     }, 2000)
// }

// function cb2() {
//     let cb = setInterval(function(){
//         console.log("Three times repeat after 1 second");
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(cb);
//       }, 4000);
// }

// job(cb1, cb2);


// The function job must return a promise object.
// The promise must resolve itself 2 seconds,
// after the call to job and must provide "hello world" in the data.

// let promise = new Promise((resolve, reject) => {
    // setTimeout(()=>{
    //     resolve("Hello World");
    // }, 2000);
// });

// promise.then((data)=> console.log(data));


// Your function must always return a promise
// If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// function prom(data) {
//   let promise = new Promise((resolve, reject) => {
//     if (isNaN(data)) {
//       reject("ERROR");
//     } else if (data % 2 === 0) {
//       setTimeout(() => {
//         resolve("EVEN");
//       }, 2000);
//     } else {
//       setTimeout(() => {
//         resolve("ODD");
//       }, 1000);
//     }
//   });

//   promise.then(
//     function (value) {
//       console.log(value);
//     },
//     function (error) {
//       console.log(error);
//     }
//   );
// }

// prom(7);