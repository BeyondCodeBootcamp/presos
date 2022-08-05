[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# JavaScript with Types

A deep dive into TSC & JSDoc with Vanilla JS!

[comment]: # "!!! data-auto-animate"

Types without Transpilation

[comment]: # "!!! data-auto-animate"

### Useful Links

<table>

<tr><td>
<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/">https://beyondcodebootcamp.github.io/</a></small>
</td></tr>

<tr><td>
<small>Video:
<a href="https://www.youtube.com/watch?v=ID_GOES_HERE">https://youtu.be/ID_GOES_HERE</a></small>
</td></tr>

<tr><td>
<small>Slides Builder:
<a href="https://beyondcodebootcamp.github.io/presos/#quick-start-to-render">MD Slides</a></small>
</td></tr>

</table>

[comment]: # "!!!"

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[youtube.com/coolaj86](https://youtube.com/coolaj86)

[comment]: # "!!!"

Dangerous Wrong Thinker

Equal Opportunity Offender

Technophobic Technologist Extraordinairé

[comment]: # "!!! data-auto-animate"

Utah Node.js

Utah Rust

[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!! data-auto-animate"

I ❤️ 🐹

[comment]: # "!!! data-auto-animate"

I ❤️ 🐹

[#golang](https://creedsofcraftsmanship.com)

[comment]: # "!!! data-auto-animate"

## [Savvi.Legal](https://savvi.legal)

Business Lifecycle Platform \
for Founders & Investors

<small>System of Record, Deal Rooms</small>

<small>(we automate away the stuff founders hate)</small>

[comment]: # "!!! data-auto-animate"

## [Savvi.Legal](https://savvi.legal)

Wanted:

(Really Good) \
**Frontend Developer**

Contact:

**<aj@savvi.legal>**

[comment]: # "!!! data-auto-animate"

# JS with Types

TSC & JSDoc with Vanilla JS

[comment]: # "!!! data-auto-animate"

- https://github.com/giltayar/jsdoc-typing
- https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/
- https://www.stitcher.com/show/javascript-jabber/episode/typing-without-transpilation-the-beauty-of-jsdoc-jsj-489-84887083

[comment]: # "!!! data-auto-animate"

Write code that runs in Node, and Browsers.

[comment]: # "!!! data-auto-animate"

Code without comments looks too terse

[comment]: # "!!! data-auto-animate"

## The 💸💰🤑💵 💲lide

```js
curl https://webinstall.dev/vim-essential | bash

npm install --location=global tsc

npm init
tsc --init
mv tsconfig.json jsconfig.json
```

[comment]: # "!!! data-auto-animate"

```diff
-    // "typeRoots": [],
+    "typeRoots": ["./typings", "node_modules/@types"],
```

```diff
+  "include": ["types.js", "*.js", "lib/**/*.js", "lib/**/*.d.ts"],
+  "exclude": ["node_modules"]
```

[comment]: # "!!! data-auto-animate"

`basetag`

```diff
-    // "preserveSymlinks": true,
+    "preserveSymlinks": false,
```

[comment]: # "!!! data-auto-animate"

```diff
-    "target": "es2021" ,
+    "target": "esnext",
```

`target`: not useful

<small>(gotta check _caniuse_ anyway)</small>

[comment]: # "!!! data-auto-animate"

```diff
+    "allowJs": true,
+    "checkJs": true,
```

```diff
-    // "noImplicitAny": true,
+    "noImplicitAny": true ,
```

[comment]: # "!!! data-auto-animate"

## Why JavaScript?

[comment]: # "!!! data-auto-animate"

## Why JavaScript?

- simplicity (of language)

[comment]: # "!!! data-auto-animate"

## Why JavaScript?

- simplicity (of language)
- simplicity (of tooling)

[comment]: # "!!! data-auto-animate"

## Why JavaScript?

- simplicity (of language)
- simplicity (of tooling)
- simplicity (of type system)

[comment]: # "!!! data-auto-animate"

## Why NOT TypeScript?

- transpiling
- C# heritage (Factory Factory)

[comment]: # "!!! data-auto-animate"

## Why NOT ES Modules

- horrendous browser support
- horrendous node support

[comment]: # "!!! data-auto-animate"

## Types of Types

<table>
<tr>
<th><small>Basic</small></th>
<th><small>Collection</small></th>
<th><small>Meta</small></th>
</tr>

<tr>

<td><small>
<ul>
<li>primitives</li>
<li>struct</li>
<li>function</li>
</ul>
</small></td>

<td><small>
<ul>
  <li>key-value pairs</li>
  <li>list</li>
  <li>tuple</li>
</ul>
</small></td>

<td><small>
<ul>
<li>newtypes</li>
<li>type aliases (marker types)</li>
<li>value enums (C-style)</li>
<li>type enums (functional-style)</li>
<li>mixins (JS-style)</li>
</ul>
</small></td>

</tr>
</table>

[comment]: # "!!! data-auto-animate"

### Primitives

[comment]: # "!!! data-auto-animate"

### Primitives

- [JSDoc: Tags: @type](https://jsdoc.app/tags-type)
- [TypeScript: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

[comment]: # "!!! data-auto-animate"

### Primitives

- `"Hello, World!"`
- `0.0`
- `true`

[comment]: # "!!! data-auto-animate"

### Primitives

- `{BigInt}`
- `{Boolean}`
- `{Number}`
- `{String}`

[comment]: # "!!! data-auto-animate"

### Primitives

```js
/** @type {String} */
let name;

/** @type {Number} */
let age;

/** @type {Boolean} */
let human;
```

[comment]: # "!!! data-auto-animate"

### Primitives

- ⚠️ `{Buffer}`
- ⚠️ `{Integer}`

<small>(kinda, but not)</small>

[comment]: # "!!! data-auto-animate"

### Primitives

- `null`
- `undefined`
- _not defined_

[comment]: # "!!! data-auto-animate"

### Primitives

- `null`
- `undefined`
- _not defined_

[comment]: # "!!! data-auto-animate"

### Primitives

- `null` _Nullable_
- `undefined` _Optional_
- _not defined_ _Accessible_

[comment]: # "!!! data-auto-animate"

### Primitives

- `null` _Nullable_
- `undefined` _Optional_
- _not defined_ _Accessible_

(more a quality, not a type)

[comment]: # "!!! data-auto-animate"

### Primitives

- `null` _Nullable_
- `undefined` _Optional_
- _not defined_ _Accessible_

(we'll circle back)

[comment]: # "!!! data-auto-animate"

### Primitives

- _not defined_

```js [1-4]
let age;
let person = {
  age: age,
};

Object.keys(person);
if ('name' in person) { ... }
if ('age' in person) { ... }
for (key of person) { ... }
```

[comment]: # "!!! data-auto-animate"

### Primitives

- _not defined_

```js [6-10]
let age;
let person = {
  age: age,
};

Object.keys(person);
if ('name' in person) { ... }
if ('age' in person) { ... }
for (key of person) { ... }
```

[comment]: # "!!! data-auto-animate"

### Primitives

TitleCase vs lowercase

[comment]: # "!!! data-auto-animate"

### Primitives

TitleCase vs lowercase

```js
/**
 * @typedef {ParentType} ChildType
 */
```

[comment]: # "!!! data-auto-animate"

### Primitives

TitleCase vs lowercase

```js [1-2]
String(x); // casting
typeof x; // internal table look-up
```

[comment]: # "!!! data-auto-animate"

### Primitives

```js [1-5]
/**
 * @typedef {Object} Person
 * @property {String?} name
 * @property {Number} [age]
 */
```

[comment]: # "!!! data-auto-animate"

### Primitives

- ❌ Object
- ❌ Array
- ❌ Function

[comment]: # "!!! data-auto-animate"

### Primitives

- ❌ Buffer
  - <small><em>(ArrayBuffer)</em></small>
- ❌ RegExp
  - <small><em>(Object)</em></small>
- ❌ Date

[comment]: # "!!! data-auto-animate"

## newtypes

[comment]: # "!!! data-auto-animate"

## newtypes

_sub_-type safety

[comment]: # "!!! data-auto-animate"

## newtypes

```js [1]
let height = 1.87; // meters
let salary = 80_000; // dollars

height * salary;
```

[comment]: # "!!! data-auto-animate"

## newtypes

```js [2]
let height = 1.87; // meters
let salary = 80_000; // dollars

height * salary;
```

[comment]: # "!!! data-auto-animate"

## newtypes

```js [4]
let height = 1.87; // meters
let salary = 80_000; // dollars

height * salary;
```

[comment]: # "!!! data-auto-animate"

## newtypes

# 😢

No `newtype`s for you

[comment]: # "!!! data-auto-animate"

## newtypes

# 😢

No `newtype`s for you

... _yet_

[comment]: # "!!! data-auto-animate"

## Marker Types

[comment]: # "!!! data-auto-animate"

## Marker Types

<strong><code>Type `alias`es</strong>

[comment]: # "!!! data-auto-animate"

## Marker Types

<strong><code>Type `alias`es</strong>

(documentation only)

[comment]: # "!!! data-auto-animate"

## Marker Types

```js [1]
/** @typedef {Number} Meters */

/** @type {Meters} */
let height = 1.87;
```

[comment]: # "!!! data-auto-animate"

## Marker Types

```js [3-4]
/** @typedef {Number} Meters */

/** @type {Meters} */
let height = 1.87;
```

[comment]: # "!!! data-auto-animate"

## Marker Types

# 🥯🥖

a mixed bag

[comment]: # "!!! data-auto-animate"

## Marker Types

What if `newtype`s get support?

```js [7]
/** @type {Dollars} */
let salary = 80_000;

/** @type {Months} */
let months = 12;

let monthlyWage = salary / months;
```

[comment]: # "!!! data-auto-animate"

## Marker Types

And when documentation drifts?

```js [1-2]
/** @type {Dollars} */
let salary = 80_000_00;

/** @type {Months} */
let months = 12;

let monthlyWage = Number(salary) / Number(months);
```

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

```js [2-3]
/**
 * @typedef {Object} Person
 * @property {String} name
 */

/**
 * @typedef {Object} Human
 * @property {String} name
 */
```

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

```js [7-8]
/**
 * @typedef {Object} Person
 * @property {String} name
 */

/**
 * @typedef {Object} Human
 * @property {String} name
 */
```

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

```js [3,8]
/**
 * @typedef {Object} Person
 * @property {String} name
 */

/**
 * @typedef {Object} Human
 * @property {String} name
 */
```

<!-- to preload the image -->

<img src="https://i.imgur.com/yKclWMq.jpg" alt="Oprah's Everyone Gets a Car" width="0%" />

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

Everything's an Interface!

<img src="https://i.imgur.com/yKclWMq.jpg" alt="Oprah's Everyone Gets a Car" width="60%" />

[comment]: # "!!! data-auto-animate"

## 🦆 Duck Types

Everything's an Interface!

# 🐹

[comment]: # "!!! data-auto-animate"

## Why Types?

- avoid typos
- hinting (auto-completion)

```js
function getPerson(name) {
  return {
    name: name,
  };
}

let p = getPerson("name");
p.nmea = "James"; // 🚨 error
p.age = 42; // 🚨 error
```

```js
function getPerson(name) {
  return {
    name: name,
    age: 0,
  };
}

let p = getPerson("name");
p.name = "James";
p.age = 42;
```

```js
var answer = "42";
var answer = parseInt(answer, 10);
```

[comment]: # "!!! data-auto-animate"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Q&A

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
