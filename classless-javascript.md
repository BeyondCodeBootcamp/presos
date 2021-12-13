[comment]: # "THEME = white"
[comment]: # "CODE_THEME = zenburn"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Classless JavaScript

AJ ONeal
<br>
[@\_beyondcode](https://twitter.com/@_beyondcode)
<br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

### a.k.a.

_JavaScript as the good Crockford intended_

[comment]: # "!!!"

# TL;DR

[comment]: # "!!!"

```js
var Person = module.exports;
```

```js
Person.create = function (p) {
    var person = {
        name: p.name || "Another Jane Doe",
        age: p.age || 0,
    };

    person.creditCard = function () {
        return "****-****-****-" + p.creditCard.slice(-4);
    };

    return person;
};
```

```js
Person.save = async function (p) {
    return await request({
        url: `/api/person/${p.id}`,
        json: p,
    });
};
```

[comment]: # "!!!"

> I made up the term 'object-oriented', and I can tell you I didn't have C++ in mind
>
> \- Alan Kay, OOPSLA '97

[comment]: # "!!!"

### Newsflash

JavaScript doesn't have classes.

[comment]: # "!!!"

Why would anyone _want_
<br>
to do classes in JavaScript?

[comment]: # "!!!"

## Benefits of JavaScript

[comment]: # "!!! data-auto-animate"

## Benefits of JavaScript

-   Serializable

[comment]: # "!!! data-auto-animate"

## Benefits of JavaScript

-   Serializable
-   Duck-Typed

[comment]: # "!!! data-auto-animate"

## Benefits of JavaScript

-   Serializable
-   Duck-Typed
-   Closures

[comment]: # "!!! data-auto-animate"

## Benefits of JavaScript

-   Serializable
-   Duck-Typed
-   Closures
-   Async

[comment]: # "!!! data-auto-animate"

## Benefits of JavaScript

-   Serializable
-   Duck-Typed
-   Closures
-   Async

Pretty much the same as Go and Rust.

[comment]: # "!!! data-auto-animate"

## Serializable, Hydratable

```json5
{
    name: "John Doe",
    age: 37,
}
```

JSON, APIs, Database

[comment]: # "!!!"

## Duct-Typed

```js
// if is Promise-like
if (o.then) {
    return await o;
}
return o;
```

Mix and match capabilities.

[comment]: # "!!!"

## Closures

```js
function createApiRequest(key, secret) {
    return async function (data) {
        return await request({
            auth: { user: key, pass: secret },
            json: data,
        });
    };
}
```

Composable, ad-hoc state.

[comment]: # "!!!"

## Async

```js
await Promise.all([
    //
    apiRequest(opts),
    fs.readFile(opts),
]);
```

Non-blocking event loop, without mutexes.

[comment]: # "!!!"

## Detriments of Classes

-   Awkward State (_this_-ness)
-   Inheritance
-   General Complexity

Pretty much the same as C#, C++, and Java.

[comment]: # "!!!"

## Factories & Value Objects

```js
var Person = module.exports;

Person.create = function (p) {
    var person = {
        name: p.name || "Another Jane Doe",
        age: p.age || 0,
    };

    // ...

    return person;
};
```

Plain-old functions & JSON.

[comment]: # "!!!"

## Static Methods

```js
Person.greet = function (p, other) {
    return `Hello ${other.name}! I'm ${p.name}!`;
};
```

Attach functions at the package (factory) level.

[comment]: # "!!!"

## Member Methods

```js
person.greet = function (other) {
    return `Hello ${other.name}! I'm ${person.name}!`;
};
```

[comment]: # "!!! data-auto-animate"

## Member Methods

```js
person.greet = function (other) {
    return `Hello ${other.name}! I'm ${person.name}!`;
};
```

Taints the object (too much like classes).

[comment]: # "!!! data-auto-animate"

## Realistic Static Method

```js
Person.save = async function (p) {
    return await request({
        url: `/api/person/${p.id}`,
        json: p,
    });
};
```

```js
await Person.save(p);
```

For "public" or "static" methods.

[comment]: # "!!!"

## Realistic Member Method

```js
Person.create = function (p) {
    let cc = p.creditCard;
    p.creditCard = null;

    // ...
};
```

[comment]: # "!!! data-auto-animate"

## Realistic Member Method

```js
Person.create = function (p) {
    let cc = p.creditCard;
    p.creditCard = null;

    // ...
};
```

```js
person.creditCard = function (expose) {
    if (expose) {
        return cc;
    }
    return "****-****-****-" + cc.slice(-4);
};
```

[comment]: # "!!! data-auto-animate"

## Realistic Member Method

```js
Person.create = function (p) {
    let cc = p.creditCard;
    p.creditCard = null;

    // ...
};
```

```js
person.creditCard = function (expose) {
    if (expose) {
        return cc;
    }
    return "****-****-****-" + cc.slice(-4);
};
```

If you want truly "private" member data. \
(or have data you need to scrub)

[comment]: # "!!!"

# Reappropriation

[comment]: # "!!!"

## prototype !== class

[comment]: # "!!!"

## prototype === polyfill

[comment]: # "!!!"
