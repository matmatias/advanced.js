Higher-order functions in JavaScript are functions that perform operations on other functions. They can either take one or more functions as arguments or return a function as a result. In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, or returned from other functions [freecodecamp.org](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/)

Below is an example of a higher-order function that takes a function as an argument:

```javascript
function getCapture(camera) {
  // Invoke the passed function
  camera()
}
// Invoke the function by passing a function as an argument
getCapture(function() {
  console.log("Canon");
});
```

Below is an example of a higher-order function that returns a function:

```javascript
function returnFunc() {
  return function() {
    console.log("Hi");
  }
}
// Take the returned function in a variables
const fn = returnFunc();
// Now invoke the returned function
fn(); // Logs "Hi" in the console
// Alternatively - A bit odd syntax but good to know
returnFunc()();
```

Higher-order functions are widely used in JavaScript, especially in methods like map(), filter(), reduce() and find(). These methods take another function as an argument to aplly it to the elements of an array [dev.to](https://dev.to/atapas/higher-order-functionshof-in-javascript-explain-like-im-five-402f)

```javascript
const data = [1, 23, 45, 67, 8, 90, 43];
const result = data.filter(function(num){
   return (num % 2 === 0);
});
console.log(result); // [8, 90]
```

Higher-order functions can improve code ligibility by making it more concicse and easy to understand, and they help organize the code into smaller chinks, making it easier to mainte and extend [freecodecamp.org](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/)
