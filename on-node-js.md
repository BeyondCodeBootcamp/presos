[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Part 2: On Node.js

[comment]: # "!!!"

<img title="node.js: official logo" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="60%" />

https://nodejs.org/en/about/resources/

[comment]: # "!!!"

# Prelude

[comment]: # "!!!"

If you don't have a _really_ good reason to use Rust

🦀

[comment]: # "!!!"

... you should almost certainly be using Go.

🐹

[comment]: # "!!!"

### Why?

[comment]: # "!!!"

<img title="node.js: an absolute dumpster fire" src="https://i.imgur.com/OlolkHa.png" width=70% />

[comment]: # "!!!"

- Microsoft - C# (TS)
  [WikiPedia: TypeScript](https://en.wikipedia.org/wiki/TypeScript)
- Yahuda Katz - Ruby (Ember) https://yehudakatz.com
- CoffeeScript - Ruby
- Elm - Erlang (Elixer)
- JSX - OCaml (Reason)
  [React to the Future](https://www.youtube.com/watch?v=5fG_lyNuEAw)
- Straight-up Ignorance -
  [TC-39 Proposal: RegExp.escape (comment)](https://github.com/tc39/proposal-regex-escaping/issues/37#issuecomment-1056902176)

[comment]: # "!!!"

!["node.js: too many cooks"](https://i.imgur.com/GIKXLBA.png)

[comment]: # "!!!"

> The Problem with React is JavaScript <br>- Creator of
> React

<small>(paraphrased)</small>

[comment]: # "!!!"

React to the Future (2019)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5fG_lyNuEAw?start=114" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=5fG_lyNuEAw?t=114">https://youtube.com/watch?v=5fG_lyNuEAw?t=114</a></small>

<small>
<ul>
<li>1:54 - 2:14</li>
</ul>
</small>

[comment]: # "!!!"

If you stand for nothing, You will fall for anything.

💔

[comment]: # "!!!"

<img src="https://i.imgur.com/OwZqa2V.png" />

[comment]: # "!!!"

<img src="https://i.imgur.com/Ia6lnEj.png" />

[comment]: # "!!!"

!["classical learning curves"](https://i.imgur.com/RT2rUfV.png)

[comment]: # "!!!"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Uo3cL4nrGOk?start=323" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://youtu.be/Uo3cL4nrGOk?t=323

[comment]: # "!!!"

I _do_ love JavaScript...

but it's a minefield 💣

[comment]: # "!!!"

Y U No TypeScript!?!?

[comment]: # "!!!"

> When you mix two complex things together, you typically
> get the multiplication of their demerits, not the sum of
> their benefits

(again,
[WikiPedia: TypeScript](https://en.wikipedia.org/wiki/TypeScript))

[comment]: # "!!!"

# Node.js Gems

[comment]: # "!!!"

### 0. Install

[comment]: # "!!!"

Consistent, Conflict-free Install

<https://webinstall.dev/node>

[comment]: # "!!!"

- ~~brew~~
- ~~nvm~~
- ~~pkg~~
- ~~exe~~
- tar + webi

[comment]: # "!!!"

### 1. Less is More

[comment]: # "!!!"

JavaScript vs "The Good Parts"

<img width="600px" src="https://i.imgur.com/bxmJwGr.jpg" />

[comment]: # "!!!"

vs ECMAScript

<img width="600px" src="https://i.imgur.com/bxmJwGr.jpg" />

<img height="400px" src="https://i.imgur.com/3QYPIIb.jpg" />

[comment]: # "!!!"

### 2. Classless

[comment]: # "!!!"

[beyondcodebootcamp.github.io/presos/classless-javascript](https://beyondcodebootcamp.github.io/presos/classless-javascript/)

[comment]: # "!!!"

Classless JavaScript (2021)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-wz2Ued0Zkc?start=337" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=-wz2Ued0Zkc">https://youtube.com/watch?v=-wz2Ued0Zkc</a></small>

<small>
<ul>
<li>5:37 - 6:22</li>
</ul>
</small>

[comment]: # "!!!"

- "flat is better than nested" -
  [Zen of Python](https://github.com/ewjoachim/zen-of-python)
- serializable as JSON
- avoid shallow abstractions

[comment]: # "!!!"

Single, Package-level Export

```js
var Person = module.exports;
```

[comment]: # "!!!"

Simple, this-less "constructor"

```js
Person.create = function (p) {
  var person = {
    name: p.name || "Another Jane Doe",
    age: p.age || 0,
  };

  // ...

  return person;
};
```

[comment]: # "!!!"

Package-level public methods

```js
Person.save = async function (p) {
  return await request({
    url: `/api/person/${p.id}`,
    json: p,
  });
};
```

[comment]: # "!!!"

Private data via Closures

```js
Person.create = function (p) {
  var person = {
    /* ... */
  };

  person.creditCard = function () {
    return "****-****-****-" + p.creditCard.slice(-4);
  };

  // ...

  return person;
};
```

[comment]: # "!!!"

_"Composition over Inheritance"_

```js
function createApiRequester(baseUrl, key, secret) {
  return async function (url, data) {
    return await request({
      url: `${baseUrl}/${url}`,
      auth: { user: key, pass: secret },
      json: data,
    });
  };
}
```

[comment]: # "!!!"

```js
Person.api = createApiRequester(
  "https://example.co",
  "my-user",
  "my-token"
);

await Person.api("/api/person/1");

await person.api("/api/person/1", { name: "AJ" });
```

[comment]: # "!!!"

### 3. Array Methods

[comment]: # "!!!"

Don't

[comment]: # "!!!"

> Better to be absent of semantic meaning than to portray
> the **wrong** semantic meaning.

[comment]: # "!!!"

<img src="https://i.imgur.com/wBs4K8d.jpg" />

[comment]: # "!!!"

> `reduce` is for **lossy** aggregation

[comment]: # "!!!"

```js
[5, 4, 3, 2, 1].reduce(function (total, val) {
  return total + val;
});
```

<small>the sum of the whole cannot be represented as its
component parts</small>

[comment]: # "!!!"

~~When in doubt~~ Always, `forEach()`.

[comment]: # "!!!"

```js
var friendsMap = {};

friends.forEach(function (f) {
  friendsMap[f.id] = f;
});
```

[comment]: # "!!!"

### 4. ❌ Generics

[comment]: # "!!!"

Avoid useless abstractions

<small>(particularly `lodash`, syntax sugar)</small>

[comment]: # "!!!"

_"a little copying is better than a little dependency"_

```js
// ❌
leftpad(str, n, c);
```

```js
// ✅
String#padStart(n, c)
```

[comment]: # "!!!"

_"shallow abstractions do nothing in the fight against
complexity"_

```js
// ❌
_.map(arry, fn);
```

```js
// ✅
arr.map(fn);
```

[comment]: # "!!!"

Explicit over implicit (low-context over high-context)

```js
// ❌
[...arr];
```

```js
// ✅
arr.slice(0);
```

[comment]: # "!!!"

```js
// ❌
const foo = (x) => !x;
```

```js
// ✅
function foo(x) {
  return !x;
}
```

[comment]: # "!!!"

Ternaries are the devil's playground

```js
// ❌
let x = cond ? "special" : "default";
```

```js
// ✅ "make the zero value useful"
let x = "default";
if (cond) {
  x = "special";
}
```

[comment]: # "!!!"

No nesting templates

```js
// ❌ (contrived, but you get the point)
let greeting = `Hello, ${`${p.getTitle()} ${p.getName()}`}!`;
```

```js
// ✅
let title = p.getTitle();
let name = p.getName();
let greeting = `Hello, ${title} ${name}!`;
```

[comment]: # "!!!"

Stick to the built-in tooling <br><small>(unless you have a
<em>very</em> good reason not to!)</small>

- pnpm
- yarn
- ... 🤮

[comment]: # "!!!"

**5. AJScript**

[comment]: # "!!!"

_"The Missing Pieces"_, on Speed Dial

[github.com/coolaj86/AJScript/issues?q=label=std](https://github.com/coolaj86/AJScript/issues?q=label%3Astd)

[comment]: # "!!!"

- `Date._toLocalISOString()`
- `Promise._sleep()`
- `Promise._forEach()`
- `Promise._map()`
- `Math._randomInt()`
- `RegExp._escape()`

[comment]: # "!!!"

(for top-level packages only: don't include in libraries)

[comment]: # "!!!"

### 6. Nothingness

[comment]: # "!!!"

- null
- "not defined"
- `undefined`
- `delete`
- `false`
- `""`
- `0`

[comment]: # "!!!"

```js
// 🤷‍♂️
person.spouse = null;
// 'object' === typeof person.spouse
```

```js
// 🤷‍♂️
person.spouse = undefined;
```

```js
// 🤷‍♂️
delete person.spouse;
```

[comment]: # "!!!"

```js
if ("spouse" in person) {
  // ...
}
```

```js
if (person.spouse) {
  // ...
}
```

```js
JSON.stringify(person);
```

[comment]: # "!!!"

```js
if ("spouse" in person) {
  // ...
}
```

```js
Object.keys(person);
```

```js
{ ...person }
```

[comment]: # "!!!"

```js
person.felon = person.felon ?? true;
```

```js
person.felon = person.felon || true;
```

[comment]: # "!!!"

### 7. const, let, var

[comment]: # "!!!"

The TRUTH about const, let, & var (2022)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/snrAnYQ9NXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=snrAnYQ9NXE">https://youtube.com/watch?v=snrAnYQ9NXE</a></small>

[comment]: # "!!!"

const: No such thing.

```js
const person = { name: "AJ" };

person.name = "Mysterio";
```

[comment]: # "!!!"

ALL CAPS, or bust

```js
const PI = 3.141_592_653_589_793;
```

[comment]: # "!!!"

let go...

```js
{
  let x = 11;
  {
    let x = 37;
    {
      let x = 42;
    }
  }
  {
    let x = 42;
  }
}
```

[comment]: # "!!!"

let down... (temporal dead zone)

```js
switch (x) {
  case 11:
    {
      let y = 11;
    }
    break;
  default: {
    let y = 11;
  }
}
```

[comment]: # "!!!"

let me die...

```js
foo: {
  bar: "baz";
}
```

[comment]: # "!!!"

`var`: Just Works™

[comment]: # "!!!"

### 8. await / catch

[comment]: # "!!!"

Don't trade one pyramid of doom for another...

```js
// ❌
try {
  asyncable();
} catch (e) {
  // swallow error ??
}
```

```js
// ✅
await asyncable().catch(function (err) {
  // Correct or Classify, but do not Catch to silence...
  // (let errors bubble until they burst)
});
```

[comment]: # "!!!"

### 9. async router

(proper error handling in express)

[comment]: # "!!!"

https://github.com/therootcompany/async-router

[comment]: # "!!!"

Async, Await, and Promises in Express for Node.js

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XFn0SJmGYs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=XFn0SJmGYs4">https://youtube.com/watch?v=XFn0SJmGYs4</a></small>

[comment]: # "!!!"

```js
let server = express();
let app = new require("@root/async-router").Router();

app.get("/api/hello", async function (req, res) {
  // ...
});

server.use(app);
```

[comment]: # "!!!"

Alternatively...

```js
let server = express();
let app = express.Router();

app.get("/api/hello", function (req, res) {
  Promise.resolve()
    .then(async function (req, res) {
      // ...
    })
    .catch(next);
});

server.use(app);
```

[comment]: # "!!!"

Use the built-in error handler!

```js
app.use("/", function (err, req, res, next) {
  if (isSafe(err)) {
    res.json(err);
    return;
  }

  console.error(err);
  res.statusCode = 500;
  res.json({ message: "internal error" });
});
```

[comment]: # "!!!"

### 10. Buffers & Streams

[comment]: # "!!!"

Pipe, whenever possible.

```js
input.pipe(output);
```

```js
let rs = Fs.createReadStream(fullpath);
rs.name; // the file's name!
rs.pipe(res);
```

[comment]: # "!!!"

Never use `data`!

```js
rs.on("readable", function () {
  for (;;) {
    var chunk = rs.read();

    if (!chunk) {
      break;
    }

    // ...
  }
});
```

[comment]: # "!!!"

## Porty Time!

🥳 🚽

[comment]: # "!!!"
