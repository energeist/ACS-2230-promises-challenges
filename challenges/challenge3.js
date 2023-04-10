/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 * JS in non-blocking, async functions run alongside other code and utilize concurrency to execute multiple tasks at the same time.
 * An async function will return a Promise which will be resolved with either:
 * 1) `undefined` if there is no return value from the Promise,
 * 2) the value returned by the async function,
 * 3) a Promise, or 
 * 4) rejection with an exception thrown from, or uncaught within, the async function.
 * One or more await blocks can follow an async statement, and they will behave as though they are synchronous code, waiting for the async block
 * (and preceeding await blocks) to resolve before executing.
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 * When the code is executed as a normal function, a Promise object with pending resolution is logged, i.e. the console output is Promise { <pending> }.
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * When the code is executed like a Promise, it will actually output the fully resolved Promise chain, i.e. the console output is HELLO THERE, DUCKY.
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name);
    uppercasedGreeting = await uppercaser(greeting);
    spacedGreeting = await spacer(uppercasedGreeting);
    return spacedGreeting
}

async function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      typeof str === 'string'
      ? resolve(str.split("").join(" "))
      : reject('Argument to spacer must be a string')
    }, 1500);
  });
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })