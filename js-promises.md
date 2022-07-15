[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Promises

<small><a href="https://beyondcodebootcamp.github.io/presos/js-promises/">https://beyondcodebootcamp.github.io/presos/js-promises/</a></small>

[comment]: # "!!!"

Helpful links:

- [Promise.\_map(arr)](https://github.com/coolaj86/AJScript/issues/14) -
  sequential execution
- [Promise.\_parallel(arr)](https://github.com/coolaj86/AJScript/issues/9) -
  batch execution
- [Crock on JS: Function the Ultimate](https://youtu.be/ya4UHuXNygM?list=PLxki0D-ilnqbtvVf7xKP0gmIgp5UPS9hu&t=2564)

[comment]: # "!!!"

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

Dangerous Wrong Thinker

Equal Opportunity Offender

Technophobic Technologist Extraordinairé

[comment]: # "!!!"

Utah Node.js

Utah Rust

twitch.tv/coolaj86

[comment]: # "!!!"

<img title="JavaScript: community logo" src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" width="60%" />

https://github.com/voodootikigod/logo.js/

[comment]: # "!!!"

<img title="node.js: official logo" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="60%" />

https://nodejs.org/en/about/resources/

[comment]: # "!!!"

- Anatomy
- Why?
- Usage
- Creation
- Gotchas

[comment]: # "!!!"

**What's a Promise?**

[comment]: # "!!! data-auto-animate"

```js [1]
let promise = {};
```

[comment]: # "!!! data-auto-animate"

```js [1]
let promise = {};
```

A promise is an object

[comment]: # "!!! data-auto-animate"

```js [2]
let promise = {
  _callbacks: [],
};
```

[comment]: # "!!! data-auto-animate"

```js [2]
let promise = {
  _callbacks: [],
};
```

with an array for success handlers <br> (callback functions)

[comment]: # "!!! data-auto-animate"

```js [4-6]
let promise = {
  _callbacks: [],

  then: function (fn) {
    promise._callbacks.push(fn);
  },
};
```

[comment]: # "!!! data-auto-animate"

```js [4-6]
let promise = {
  _callbacks: [],

  then: function (fn) {
    promise._callbacks.push(fn);
  },
};
```

and a `then` function. <br> <small>just a fancy
`arr.push()`</small>

[comment]: # "!!! data-auto-animate"

```js [3]
let promise = {
  _callbacks: [],
  _errbacks: [],

  then: function (fn) {
    promise._callbacks.push(fn);
  },
};
```

It also has an array for error handlers (errbacks)

[comment]: # "!!! data-auto-animate"

```js [8-10]
let promise = {
  _callbacks: [],
  _errbacks: [],

  then: function (fn) {
    promise._callbacks.push(fn);
  },
  catch: function (fn) {
    promise._errbacks.push(fn);
  },
};
```

[comment]: # "!!! data-auto-animate"

```js [8-10]
let promise = {
  _callbacks: [],
  _errbacks: [],

  then: function (fn) {
    promise._callbacks.push(fn);
  },
  catch: function (fn) {
    promise._errbacks.push(fn);
  },
};
```

and a `catch()` <br> <small>another fancy `arr.push()`
function</small>

[comment]: # "!!! data-auto-animate"

```js [7-11]
let promise = {
  _callbacks: [],
  _errbacks: [],

  // ...

  resolve: function (result) {
    promise._callbacks.forEach(function (fn) {
      fn(result);
    });
  },
};
```

[comment]: # "!!! data-auto-animate"

```js [7-11]
let promise = {
  _callbacks: [],
  _errbacks: [],

  // ...

  resolve: function (result) {
    promise._callbacks.forEach(function (fn) {
      fn(result);
    });
  },
};
```

The `resolve` function <br> <small>which calls the success
handlers</small>

[comment]: # "!!! data-auto-animate"

```js [12-16]
let promise = {
  _callbacks: [],
  _errbacks: [],

  // ...

  resolve: function (result) {
    promise._callbacks.forEach(function (fn) {
      fn(result);
    });
  },
  reject: function (err) {
    promise._errbacks.forEach(function (fn) {
      fn(err);
    });
  },
};
```

[comment]: # "!!! data-auto-animate"

```js [12-16]
let promise = {
  _callbacks: [],
  _errbacks: [],

  // ...

  resolve: function (result) {
    promise._callbacks.forEach(function (fn) {
      fn(result);
    });
  },
  reject: function (err) {
    promise._errbacks.forEach(function (fn) {
      fn(err);
    });
  },
};
```

And the `reject` function <br> <small>which calls the
success handlers</small>

[comment]: # "!!! data-auto-animate"

## Why?

[comment]: # "!!! data-auto-animate"

When you want to handle an event ONE _TIME_:

```js
document.addEventListener("click", handleClick);

function handleClick() {
  // ...

  document.removeEventListener("click", handleClick);
}
```

[comment]: # "!!! data-auto-animate"

When you want to handle an event in MANY _PLACES_:

```js
function doFoo() {
  // ...
  document.addEventListener("click", handleClick);
}

function doBar() {
  // ...
  document.addEventListener("click", handleClick);
}
```

[comment]: # "!!! data-auto-animate"

When you want to handle an event LATE:

```js
// click happens... NOW

function doFoo() {
  // ...
  document.addEventListener("click", handleClick);
}

// doFoo happens LATE
doFoo();
```

[comment]: # "!!! data-auto-animate"

## Usage

[comment]: # "!!! data-auto-animate"

Available in JavaScript since 1997

[comment]: # "!!! data-auto-animate"

```js
promise.then(function (result) {
  // do stuff
});
```

[comment]: # "!!! data-auto-animate"

```js
promise.catch(function (err) {
  if ("NOT_FOUND" === err.code) {
    return Foo.create();
  }

  throw err;
});
```

[comment]: # "!!! data-auto-animate"

```js
promise
  .catch(function (err) {
    if ("NOT_FOUND" === err.code) {
      return Foo.create();
    }

    throw err;
  })
  .then(function (result) {
    // do stuff
  });
```

[comment]: # "!!! data-auto-animate"

## Creation

[comment]: # "!!! data-auto-animate"

🔙 that thing back there

[comment]: # "!!! data-auto-animate"

Or, since 2015:

```js
async function getUsers() {
  return [];
}
```

[comment]: # "!!! data-auto-animate"

Or, since 2015:

```js
async function getUsers() {
  return [];
}
```

```js
getUsers().then(function (users) {
  // ...
});
```

[comment]: # "!!! data-auto-animate"

Or, since 2015:

```js
async function getUsers() {
  return [];
}
```

```js
getUsers().then(function (users) {
  // ...
});
```

```js
let users = await getUsers();
```

[comment]: # "!!! data-auto-animate"

# Gotchas

[comment]: # "!!! data-auto-animate"

Always `return await`.

```js
async function getUsers() {
  return await DB.Users.all();
}
```

[comment]: # "!!! data-auto-animate"

Always `await .catch()`.

```js
let user = Users.getOrCreate(email).catch(function (err) {
  if ("NOT_FOUND" === err.code) {
    return Foo.create();
  }

  throw err;
});
```

[comment]: # "!!! data-auto-animate"

## FIN

[comment]: # "!!! data-auto-animate"
