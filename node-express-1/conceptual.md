### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, async/await, promises.
- What is a Promise?
  An object that represents the eventual completion (or reject) of an async operation and the resulting value it gives.
- What are the differences between an async function and a regular function?
  Async and await keywords enable asynchronous, promise-based behaviour to be written in an easy to read style, avoiding the need for redundant promise chains.
- What is the difference between Node.js and Express.js?
  Node is an open-source Javascript code that runs on servers, while Express is a web application framework for Node.
- What is the error-first callback pattern?
  It is a function which either returns an error object or the successful data from the function in question.
- What is middleware?
  Middleware is a function that runs between request and response cycles, hence middle ware.
- What does the `next` function do?
  It is a function in the express router which executes middleware succeeding the current middleware being executed.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

-getUsers() reads more like get all users and is only getting 3 users.
-The function is making 3 requests instead of one request to get all the users
-There is no try and catch so if one fails they all fail, no error handling
-There is no description, unclear what it is accomplishing
