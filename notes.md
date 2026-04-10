We are learning to become JavaScript developers.

JavaScript is a programming language used to build modern full-stack web applications.

Full web applications are made up of frontend, backend, and database systems. Building them requires both the coordination of internal systems within our project and the orchestration of external systems such as payment gateways, authentication providers, cloud storage, email services, and third-party APIs.

For many learners, understanding basic JavaScript OOP concepts such as constructors, classes, and object instances provides a strong foundation for understanding Promises. Understanding Promises then helps learners make sense of asynchronous JavaScript.

Although industry practice today may be more function-first, beginners still benefit from understanding objects, instances, and OOP foundations because JavaScript itself, along with many built-in APIs, still relies on object-based mental models.

Programming paradigms organize how code is written and how program logic is structured conceptually, while folder structure organizes where code lives physically in a project.

You can contrast them like this:

- **OOP / Functional programming** = how we think about and structure program logic
- **Folder structure** = how we arrange files in the codebase

`fetch()` is a function that **returns a Promise**.

So the relationship is:

- **Promise** = the JavaScript pattern/object for handling a value that arrives later
- **fetch()** = a built-in web API that uses that pattern to handle HTTP requests

A concise way to explain it:

> `fetch()` gives you a Promise that represents the future result of an HTTP request.

Example:

```js
const responsePromise = fetch("/api/products");
```

Here, `responsePromise` is a Promise.
Later, it will either:

- **resolve** with a `Response` object, or
- **reject** if the request fails badly, like a network error

That is why we use `.then()` or `await` with `fetch()`.

Basic anatomy:

```js id="xmkjz8"
fetch(url, options);
```

### 1. `url`

The endpoint you want to request.

```js id="z4k95m"
fetch("/api/products");
fetch("https://example.com/users");
```

### 2. `options`

An optional object that configures the request.

Common parts:

```js id="i8y2x6"
fetch(url, {
  method: "GET", // GET, POST, PUT, PATCH, DELETE
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data), // usually for POST/PUT/PATCH
});
```

### Full example

```js id="sdnh6n"
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Neeti",
    role: "Instructor",
  }),
});
```

### What it returns

`fetch()` returns a **Promise**:

```js id="ft96lu"
const promise = fetch("/api/products");
```

### Common usage pattern

```js id="mvg3b3"
fetch("/api/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

> `fetch(url, options)` sends an HTTP request and returns a Promise for the response.