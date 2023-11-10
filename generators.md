Generators in JavaScript are a special type of function that can be paused and resumed, allowing them to produced a sequence of results over time rather thant computing them all at once. They are defined using the <mark>function*</mark> syntax and can be used to create iterators for custom data types. [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

In the example above, <mark>idGenerator</mark> is a generator function that yields an infinite sequence of IDs. The <mark>gen</mark> object is a Generator that is created by calling <mark>idGenerator()</mark>. The next method of <mark>gen</mark> can be used to get the next ID in the sequence. [javascript.info](https://javascript.info/generators)

Generators can also be composed using the yield* syntax, which allows one generator to yield values from another generator. This is useful for creating complex iterators from simples ones. [javascript.info](https://javascript.info/generators)

```javascript
function* countTo(max) {
  for (let i = 1; i <= max; ++i) {
    yield i;
  }
}

function* countDownFrom(max) {
  yield* countTo(max);
  yield* countTo(max - 1);
  yield* countTo(max - 2);
}

for (let value of countDownFrom(5)) {
  console.log(value); // 1, 2, 3, 4, 5, 4, 3, 2, 1
}
```
