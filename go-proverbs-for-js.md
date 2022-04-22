[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Go Proverbs

(JavaScript Edition!)

[comment]: # "!!!"

## ~~Go~~ Node Proverbs

[comment]: # "!!!"

<https://beyondcodebootcamp.github.io/presos/go-proverbs-for-js/>

[comment]: # "!!!"

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

Dangerous Wrong Thinker

Equal Opportunity Offender

Technophobic Technologist Extraordinairé

[comment]: # "!!!"

Creeds of Craftsmanship

> The most important archaeological finds of the 22nd
> century.

[comment]: # "!!!"

- The Zen of Python
- The Go Proverbs
- ... (more to come)

[comment]: # "!!!"

Go Proverbs with Rob Pike

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PAAkCSZUG1c?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=PAAkCSZUG1c&t=0s">https://youtube.com/watch?v=PAAkCSZUG1c&t=0s</a></small>

<small><a href="https://creedsofcraftsmanship.com">Creeds of
Craftsmanship . com</a></small>

[comment]: # "!!!"

1\) Don't communicate by sharing memory, share memory by
communicating.

[comment]: # "!!!"

Don't communicate by sharing memory...

```js
var done = false;

if (done) {
  // ...
}
```

[comment]: # "!!!"

Share memory by communicating

```js
promise.then(...);
```

```js
$el.on('click', function () { ... });
```

[comment]: # "!!!"

2\) Concurrency is not parallelism.

[comment]: # "!!!"

Concurrency

```js
app.get("/api/hello", function (req, res) {
  // ...
  res.json({
    success: true,
  });
});
```

[comment]: # "!!!"

Parallelism

```js
Promise.all(photos.map(Resizer.resize));
```

[comment]: # "!!!"

3\) Channels orchestrate; mutexes serialize.

[comment]: # "!!!"

~~3\) Channels orchestrate; mutexes serialize.~~

3\) Promises & Events orchestrate; await serializes.

[comment]: # "!!!"

Orchestration

```js
await Promise.all([
  Promise.race(getMilk(), getSoy()),
  Promise.race(getEggs(), getApplesauce()),
  getDishes(),
  getUtensils(),
]);
```

[comment]: # "!!!"

Serialization (Chaining)

```js
await mix();
await bake();
await serve();
```

[comment]: # "!!!"

4\) The bigger the interface, the weaker the abstraction.

[comment]: # "!!!"

Small interface

```js
Database.engine = {
  get: async function (key) {
    let path = safeJoin(dir, key);
    return await fs.readFile(path, "utf8");
  },
  set: async function (key, text) {
    await fs.writeFile(key, text, "utf8");
  },
};
```

[comment]: # "!!!"

Big interface

```js
Database.engine = {
  get: function (/* ... */) {},
  set: function (/* ... */) {},
  index: function (/* ... */) {},
  remove: function (/* ... */) {},
  findBy: function (/* ... */) {},
  createCursor: function (/* ... */) {},
  createTransaction: function (/* ... */) {},
};
```

[comment]: # "!!!"

5\) Make the zero value useful.

[comment]: # "!!!"

Ugly:

```js
const foo = hasBaz ? "baz" : "bar";
```

[comment]: # "!!!"

Useful:

```js
let foo = "bar";
if (hasBaz) {
  foo = "baz";
}
```

[comment]: # "!!!"

~~5\) Make the zero value useful.~~

5b\) Make the unexpected value useful.

[comment]: # "!!!"

Dangerous

```js
let isExpired = token.expires > Date.now();
if (isExpired) {
  // ...
}
```

[comment]: # "!!!"

Safe

```js
let isFresh = token.expires < Date.now();
if (!isFresh) {
  // ...
}
```

[comment]: # "!!!"

6\) interface{} says nothing.

[comment]: # "!!!"

```js
// TODO
```

[comment]: # "!!!"

7\) Gofmt's style is no one's favorite, yet `gofmt` is
everyone's favorite.

[comment]: # "!!!"

~~7\) Gofmt's style is no one's favorite, yet `gofmt` is
everyone's favorite.~~

7\) Prettier's style is no one's favorite, yet `prettier` is
everyone's favorite.

[comment]: # "!!!"

`package.json`:

```json
{
  "scripts": {
    "fmt": "npx prettier@2 -w '**/*.{js,md}'"
  }
}
```

```js
npm run fmt
```

[comment]: # "!!!"

[The Prettier Rationale](https://prettier.io/docs/en/rationale.html)

<https://prettier.io/docs/en/rationale.html>

[comment]: # "!!!"

8\) A little copying is better than a little dependency.

[comment]: # "!!!"

## `leftPad`

[comment]: # "!!!"

## `lodash`

[comment]: # "!!!"

```js
Object.keys(obj).forEach(function (key) {
  let val = obj[key];
  // ...
});
```

[comment]: # "!!!"

9\) Syscall must always be guarded with build tags.

[comment]: # "!!!"

# 🤷‍♂️

[comment]: # "!!!"

10\) Cgo must always be guarded with build tags.

[comment]: # "!!!"

# 🤷‍♂️

[comment]: # "!!!"

11\) Cgo is not Go.

[comment]: # "!!!"

~~11\) Cgo is not Go.~~

- JSX is not JS.
- ECMAScript is not JavaScript.
- Babel is not ECMAScript.

[comment]: # "!!!"

12\) With the unsafe package there are no guarantees.

[comment]: # "!!!"

# 🤷‍♂️

[comment]: # "!!!"

13\) Clear is better than clever.

[comment]: # "!!!"

Clear:

```js
let foo = "bar";
if (hasBaz) {
  foo = "baz";
}
```

[comment]: # "!!!"

Clever:

```js
const foo = hasBaz ? "baz" : "bar";
```

[comment]: # "!!!"

14\) Reflection is never clear.

[comment]: # "!!!"

~~14\) Reflection is never clear.~~

14\) Meta programming is never clear.

[comment]: # "!!!"

```js
thing.count += 1;
```

[comment]: # "!!!"

```js
Object.defineProperty(thing, "count", {
  get: function () {
    return thing.count || 0;
  },
  writable: false,
});
```

[comment]: # "!!!"

```js
let thing = {
  count: 0,
};
```

[comment]: # "!!!"

15\) Errors are values.

[comment]: # "!!!"

Bad:

```js
try {
  await doStuff();
} catch (e) {
  // ...
}
```

[comment]: # "!!!"

Good:

```js
doStuff().catch(function (err) {
  // handle or rethrow
});
```

[comment]: # "!!!"

16\) Don't just check errors, handle them gracefully.

[comment]: # "!!!"

Check:

```js
doStuff().catch(function (err) {
  res.end("oops!");
});
```

[comment]: # "!!!"

Handler:

[comment]: # "!!!"

```js
doStuff().catch(function (err) {
  if (Db.noRecord === err) {
    return {};
  }
  throw err;
});
```

[comment]: # "!!!"

17\) Design the architecture, name the components, document
the details.

[comment]: # "!!!"

# 👍

[comment]: # "!!!"

18\) Documentation is for users.

[comment]: # "!!!"

# 📝

[comment]: # "!!!"

19\) Don't panic.

[comment]: # "!!!"

```js
await doStuff().catch(...);
```

[comment]: # "!!!"
