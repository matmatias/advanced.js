## Closures

Prototypes are a key part of JavaScript's objct-oriented programming model. They allow objects to inherit properties and methods from other objects. Understanding prototypes is crucial for understanding how JavaScript's object system works.
[zerotomastery](https://zerotomastery.io/courses/advanced-javascript-concepts/)

All objects inherit properties and methods from a prototype, this is known as prototypal inheritance. It's different from class-based inheritance found in languages like Java or C++, where classes are defined as blueprints for objects [digitalocean.com](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript).

Every function in JavaScript has a property named prototype. When an object is created using a function as a constructor, the prototype property of that function becomes the prototype of the newly created object [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes).

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}!`);
};

const john = new Person("John");
john.greet(); // "Hello, my name is John""
```

When a property of an object is accessed, the JavaScript enginle will first look for that property in the object itself. If it can't find it, it will look in the object's prototype, then in the prototype's prototype, and so on, until it either finds the property or reaches the end of the chain. (If Object.prototype is not found, the result will be undefined, marking the end of the chain). [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

```javascript
function Person(name) {
 this.name = name;
}

Person.prototype.greet = function() {
 console.log(`Hello, my name is ${this.name}!`);
};

const john = new Person("John");
console.log(john.name); // "John"
console.log(john.greet()); // "Hello, my name is John!"
console.log(john.toString()); // "[object Object]"
```

In this example, when john.toString() is called, the JavaScript engine first looks for a toString method in the john object itself. Since it does not find one, it loooks in the john object's prototype, which is Person.prototype. It does not find a toString method there either, so it looks in the prototype's prototype, which is Object.prototype. It finds a toString method there, so it uses that. [freecodecamp.org](https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/)
