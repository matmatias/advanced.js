## Closures

Closures are functions that has access to it's own scope, the outer function's scope, and the global scope. They are generally used to encapsulate private data and are a fundamental part of Javascript's functional programming style. [Reference](https://zerotomastery.io/courses/advanced-javascript-concepts/)

```javascript
const bankAccount = (ownerName, initialBalance) => {
  const owner = ownerName;
  const balance = initialBalance;

  return {
    getOwner: function () {
      return owner;
    },
    getBalance: function () {
      return balance;
    },
  };
};

const account = bankAccount("John Doe", 1000);

console.log(account.getOwner()); // "John Doe"
console.log(account.getBalance()); // "1000"
```
