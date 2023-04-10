/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 * The code should execute the greet() function first with 'Ducky' as an argument, which should resolve successfully and return "Hello there, Ducky", which it does.
 * Next, it will execute the code in the .then() block which calls uppercaser() on "Make School is Awesome!!!" which should
 * resolve successfully and return the input string in allcaps, which it does.
 * 
 * This is indeed how the code executes.
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 *  If greet() fails and the Promise is rejected, it should trigger the .catch() block of the execution code, which will console.log "Received an error!".
 *  Next, the error that was caught will be printed, which will be the reject() block from the Promise in greet(), which returns the message "Name must be a string".
 *  Uppercaser() does not run because the first Promise in the promise chain has failed. The code skips to the .catch() block in the case of an error (rejected Promise).
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 * greet() will execute successfully and return "Hello there, Ducky", followed by the .catch() block receiving the rejected Promise text.  The .catch() block will
 * log "Received an error!", followed by logging the error, which is the .reject() block returning "Argument to uppercaser must be string".
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
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
      }, 1000);
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
        }, 1500);
    });
}

const spacer = (str) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      typeof str === 'string'
      ? resolve(str.split("").join(" "))
      : reject('Argument to spacer must be a string')
    }, 1500);
  });
}

name = 'Ducky'
my_str = 'Make School is Awesome!!!'
another_str = 'foo'

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(another_str);
    })
    .then((spacerResult) => {
      console.log(spacerResult)
    }).catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
