<h1 align="center"></h1>

Q. What will print out and how to fix it?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

Q. What's the order?

```js
async function asyncFunc() {
  console.log("A");
  return "B";
}

asyncFunc().then(x => console.log(`Resolved: ${x}`));
console.log("C");
```

Q. Implement debounce function

```js
// function to be called when user scrolls
function foo() {
  console.log("You are done scrolling!");
}

// wrap our function in a debounce to fire once 2 seconds have gone by
document
  .getElementById("container")
  .addEventListener("scroll", debounce(foo, 2000));
```

Q. What is virtual dom?

Q. Different ways to Hide Elements in CSS?

Q. What is the significance of keys in ReactJS?

Q. What's a Webhook?

Q. What is an Exponential Backoff?

Q. How to make NodeJs use More CPU Core or Multithreading Instead Single-thread?

Q. How to expose a local development server to the Internet?

Q. Design RESTful API

Q. What is the different between Status Code 401 and 403.

Q. What is the different between Status Code 400 and 500.
