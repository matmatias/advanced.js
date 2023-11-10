Memoization is a technique used in programming to make applications more efficient and faster. It works by storing the results of expensive function calls and reusing them when the same inputs occur again, instead of recalculating these values every time. [freecodecamp.org](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/)

Memoization in JavaScript relies on two main concepts: Closures and Higher Order Functions. [freecodecamp.org](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/)

Below is a simple example of a memoized function in JavaScript:

```javascript
const memoizeAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    }
    else {
      console.log("Calculating result");
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached
```
