[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# TODOS

- Where do `nullish` best fit?
  - optional params and props vs undefined
- ## Tips and Tricks

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

- [JSDoc: Tags: @type](https://jsdoc.app/tags-type)
- [TypeScript: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

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

## JS with Types

[comment]: # "!!! data-auto-animate"

## JS with Types

Why Go 🐹 and Zig ⚡️ developers shouldn't give up on
JavaScript

[comment]: # "!!! data-auto-animate"

## Static Types are a Lie!

[comment]: # "!!! data-auto-animate"

## Static Types are a Lie!

Types have always been in the tooling.

[comment]: # "!!! data-auto-animate"

## Static Types are a Lie!

Types have always been in the tooling.

Exhibit: C

[comment]: # "!!! data-auto-animate"

## Static Types are a Lie!

Safe languages have always been dynamically-typed.

[comment]: # "!!! data-auto-animate"

## Static Types are a Lie!

Safe languages have always been dynamically-typed.

Runtime checks. Reflection. Etc.

[comment]: # "!!! data-auto-animate"

## JavaScript is...

[comment]: # "!!! data-auto-animate"

## JavaScript is...

### Duck-Typed

[comment]: # "!!! data-auto-animate"

## JavaScript is...

### Duck-Typed

(typed for JIT-optimization)

[comment]: # "!!! data-auto-animate"

## Types of Types

<table>
<tr>
<th><small>Single-Value</small></th>
<th><small>Multi-Value</small></th>
<th><small>Collection</small></th>
<th><small>Meta</small></th>
</tr>

<tr>

<td><small>
<ul>
<li>Primitives<ul>
  <li>Booleans</li>
  <li>Number</li>
  <li>String</li>
  <li>BigInt*</li>
  <li>Int/Uint*</li>
</ul></li>
<li>Function</li>
<li>Null<em>ish</em><ul>
  <li><code>null</code></li>
  <li><code>undefined</code></li>
  <li><code>not defined</code></li>
</ul></li>
</ul>
</small></td>

<td><small>
<ul>
  <li>Struct</li>
  <li>Tuple</li>
  <li>WeakMap*</li>
  <li>WeakSet*</li>
</ul>
</small></td>

<td><small>
<ul>
  <li>Map<br>(key-value pairs)</li>
  <li>List<br>(indexed values)</li>
</ul>
</small></td>

<td><small>
<ul>
<li>newtypes</li>
<li>type aliases<br>(marker types)</li>
<li>value enums<br>(C-style)</li>
<li>type enums<br>(functional-style)</li>
<li>mixins<br>(unions)</li>
<li>templates</li>
<li>utilities</li>
</ul>
</small></td>

</tr>
</table>

[comment]: # "!!! data-auto-animate"

### Reference Material

- [JSDoc: Tags: @type](https://jsdoc.app/tags-type)
- [TypeScript: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

[comment]: # "!!! data-auto-animate"

# CAVEAT

[comment]: # "!!! data-auto-animate"

# CAVEAT

💩, because slides.

[comment]: # "!!! data-auto-animate"

# CAVEAT

💩, because slides.

- non-alphabetized `name, age` vs `age, name`
- backwards naming `BasePerson` vs `PersonBase`
- etc

(optimized for speakability, not diffability, engineering)

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [1-99]
/**
 * ...
 */
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [1]
/**
 * ...
 */
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [2]
/**
 * ...
 */
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [3]
/**
 * ...
 */
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [1]
/** ... */
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [1]
/** @type {FooPerson} */
var person;
```

[comment]: # "!!! data-auto-animate"

### Type Syntax

```js [3-4]
/**
 * A great person
 * @typedef {Object} FooPerson
 * @prop {Number} fooAge
 */
```

```js [3-4]
/**
 * Greet with great kindness
 * @callback FooGreeter
 * @param {FooPerson} other
 */
```

[comment]: # "!!! data-auto-animate"

## 1. Single-Value Types

[comment]: # "!!! data-auto-animate"

### Primitives

[comment]: # "!!! data-auto-animate"

### Primitives

```js [1-9]
/** @type {String} */
let name = "Hello World!";

/** @type {Number} */
let answer = 42;

/** @type {Boolean} */
let alive = true;
```

[comment]: # "!!! data-auto-animate"

### Primitives

```js [1-2]
/** @type {String} */
let name = "Hello World!";

/** @type {Number} */
let answer = 42;

/** @type {Boolean} */
let alive = true;
```

[comment]: # "!!! data-auto-animate"

### Primitives

```js [4-5]
/** @type {String} */
let name = "Hello World!";

/** @type {Number} */
let answer = 42;

/** @type {Boolean} */
let alive = true;
```

[comment]: # "!!! data-auto-animate"

### Primitives

```js [7-9]
/** @type {String} */
let name = "Hello World!";

/** @type {Number} */
let answer = 42;

/** @type {Boolean} */
let alive = true;
```

[comment]: # "!!! data-auto-animate"

### Primitives

```js
/** @type {Boolean?} */
let alive = null;

/** @type {Boolean?|undefined} */
let cat;
```

<small>(more on `null`*ish*ness later...)</small>

[comment]: # "!!! data-auto-animate"

### Primitives

```js [1-99]
/**
 * @param {String} name
 * @param {Number} answer
 * @param {Boolean} alive
 */
function doScience(name, age, alive) {
  // ...
}
```

[comment]: # "!!! data-auto-animate"

### ⚠️ Primitives++

```js
/** @type {BigInt} */
let debt = 1_000_000_000_000n;

/** @type {Uint8Array} */
let answers = Uint8Array.from([11, 37, 42]);

/** @type {Buffer|ArrayBuffer} */
let bytes = Buffer.from([255, 255, 255, 255]);
```

[comment]: # "!!! data-auto-animate"

### ⚠️ Built-Ins

```js
/** @type {Date} */
let matcher = Date.parse("2022-09-22T15:05:00.000-0600");

/** @type {RegExp} */
let matcher = /^abc$/;
```

[comment]: # "!!! data-auto-animate"

### Functions

```js [1-99]
/**
 * Greet another Person
 * @callback Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

### Functions

```js [3]
/**
 * Greet another Person
 * @callback Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

### Functions

```js [1-99]
/** @type {Greeter} */
function greet(other) {
  return `Hello, ${other.name}!`;
}
```

[comment]: # "!!! data-auto-animate"

### Functions

```js [1]
/** @type {Greeter} */
function (other) {
    return `Hello, ${other.name}!`;
}
```

[comment]: # "!!! data-auto-animate"

### ❌ `@function`

```js [1-99]
/**
 * Greet another Person
 * @function Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

### ❌ `@function`

```js [3]
/**
 * Greet another Person
 * @function Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

### ❌ `@typedef {Function}`

```js [1-99]
/**
 * Greet another Person
 * @typedef {Function} Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

### ❌ `@typedef {Function}`

```js [3]
/**
 * Greet another Person
 * @typedef {Function} Greeter
 * @param {Object} other
 * @param {String} other.name
 */
```

[comment]: # "!!! data-auto-animate"

## 🪲

<small><a href="https://github.com/microsoft/TypeScript/issues/50274" target="_blank">github.com/microsoft/TypeScript/issues/50274</a></small>

[comment]: # "!!! data-auto-animate"

### Functions

```diff [1-99]
  /**
   * Greet another Person
-  * @callback Greeter
   * @param {Object} other
   * @param {String} other.name
   */
-
- /** @type {Greeter} */
  function (other) {
      return `Hello, ${other.name}!`;
  }
```

[comment]: # "!!! data-auto-animate"

### Functions

```js [1-99]
/**
 * Greet another Person
 * @param {Object} other
 * @param {String} other.name
 */
function (other) {
    return `Hello, ${other.name}!`;
}
```

[comment]: # "!!! data-auto-animate"

## Side Note

⚠️ Syntax vs Semantics

[comment]: # "!!! data-auto-animate"

## Side Note

⚠️ Syntax vs Semantics

- "Object" _notation_: {}
- "Array" _notation_: []

[comment]: # "!!! data-auto-animate"

## Side Note

⚠️ Syntax vs Semantics

- "Object" _notation_: {}
- "Array" _notation_: []

(no intention / meaning)

[comment]: # "!!! data-auto-animate"

## 2. Multi-Value Types

[comment]: # "!!! data-auto-animate"

### Structs & Tuples

[comment]: # "!!! data-auto-animate"

### Structs

POJO

[comment]: # "!!! data-auto-animate"

### Structs

POJO

(Plain-Old JSON Object)

[comment]: # "!!! data-auto-animate"

### Structs

<small>(a blast from the recent past)</small>

```js [1-99]
/**
 * Greet another Person
 * @callback Greeter
 * @param {Object} other
 * @param {String} other.name
 * @param {Number} other.age
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [4-6]
/**
 * Greet another Person
 * @callback Greeter
 * @param {Object} other
 * @param {String} other.name
 * @param {Number} other.age
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [3]
/**
 * A great human being
 * @typedef {Object} Person
 * @param {String} other.name
 * @param {Number} other.age
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [4-6]
/**
 * A great human being
 * @typedef {Object} Person
 * @prop {String} name
 * @prop {Number} age
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [2]
/**
 * A great human being
 * @typedef {Object} Person
 * @prop {String} name
 * @prop {Number} age
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```diff [2-3]
  /**
-  * Greet another Person
+  * A great human being
-  * @callback Greeter
+  * @typedef {Object} Person
+  * @prop {String} name
+  * @prop {Number} age
-  * @param {Object} other
-  * @param {String} other.name
-  * @param {Number} other.age
   */
```

[comment]: # "!!! data-auto-animate"

### Structs

```diff [4-5]
  /**
-  * Greet another Person
+  * A great human being
-  * @callback Greeter
+  * @typedef {Object} Person
+  * @prop {String} name
+  * @prop {Number} age
-  * @param {Object} other
-  * @param {String} other.name
-  * @param {Number} other.age
   */
```

[comment]: # "!!! data-auto-animate"

### Structs

```diff [6-10]
  /**
-  * Greet another Person
+  * A great human being
-  * @callback Greeter
+  * @typedef {Object} Person
+  * @prop {String} name
+  * @prop {Number} age
-  * @param {Object} other
-  * @param {String} other.name
-  * @param {Number} other.age
   */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [6]
/**
 * A great human being
 * @typedef {Object} Person
 * @prop {String} name
 * @prop {Number} age
 * @prop {Array<Person>} friends
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [6]
/**
 * A great human being
 * @typedef {Object} Person
 * @prop {String} name
 * @prop {Number} age
 * @prop {Array<Person>} friends - mutual follows
 */
```

[comment]: # "!!! data-auto-animate"

### Structs

```js [7]
/**
 * A great human being
 * @typedef {Object} Person
 * @prop {String} name
 * @prop {Number} age
 * @prop {Array<Person>} friends - mutual follows
 * @prop {Greeter} greet
 */
```

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

```js [1-99]
/**
 * @callback Greeter
 * @param {Person} other
 */
```

```js [1-99]
/**
 * @typedef {Object} Person
 * @prop {Person} other
 */
```

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

```js [1-99]
/**
 * @callback Greeter
 * @param {Person} other
 */
```

```js [1-99]
/**
 * @typedef {Object} Person
 * @prop {Person} other
 */
```

<small>(I mix up <code>@prop</code> and <code>@param</code>
all the time... 🪲)</small>

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

Why can't <code>@param</code> just be an <em>alias</em> of
<code>@prop</code>?

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

```js [1-99]
/**
 * @callback Greeter
 * @param {Person} other
 * @prop {Person} other
 */
```

```js [1-99]
function greet(other) {
  // ...
}
greet.other = person;
```

[comment]: # "!!! data-auto-animate"

### ⚠️ `@prop` vs `@param`

```js [3-4]
/**
 * @callback Greeter
 * @param {Person} other
 * @prop {Person} other
 */
```

```js [4]
function greet(other) {
  // ...
}
greet.other = person;
```

[comment]: # "!!! data-auto-animate"

### Tuples

[comment]: # "!!! data-auto-animate"

### Tuples

WAT!?

[comment]: # "!!! data-auto-animate"

### Tuples

Struct...

[comment]: # "!!! data-auto-animate"

### Tuples

Struct...

but _indexed_, rather than _named_

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
/**
 * @typedef {[Person, Error]} PersonResult
 */
```

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
/**
 * @typedef {[Person, Error]} PersonResult
 */
```

```js [1-99]
let [person, err] = await Person.getById(37);
```

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
/**
 * @typedef {[Person, Error]} PersonResult
 */
```

```js [1-99]
let [person, err] = await Person.getById(37);
```

<small>(Go and Rust devs get this)</small>

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
let [person, err] = await Person.getById(37);
```

```js [1-99]
let { person, error } = await Person.getById(37);
```

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
let { person, error } = await Person.getById(37);
```

<small>(JavaScript devs get this)</small>

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
/**
 * @typedef {[EventName,EventData]} SocketIoResult
 */
```

[comment]: # "!!! data-auto-animate"

### Tuples

```js [1-99]
/**
 * @typedef {[EventName,EventData]} SocketIoResult
 */
```

```js [1-99]
/** @type {SocketIoResult} */
let result = ["follow", { "source": ... }]
```

[comment]: # "!!! data-auto-animate"

## 3. Collection Types

[comment]: # "!!! data-auto-animate"

## 3. Collection Types

A bunch of <em>things</em>

[comment]: # "!!! data-auto-animate"

## 3. Collection Types

A bunch of <em>things</em>

of the same (or <em>like</em>) type(s)

[comment]: # "!!! data-auto-animate"

### Maps & Lists

[comment]: # "!!! data-auto-animate"

### Lists

[comment]: # "!!! data-auto-animate"

### Lists

```js [1-99]
/** @type {Array<String>} */
let fruits = ["apple", "banana", "grape"];
```

[comment]: # "!!! data-auto-animate"

### Lists

```js [1]
/** @type {Array<String>} */
let fruits = ["apple", "banana", "grape"];
```

[comment]: # "!!! data-auto-animate"

### Lists

```js [1]
/** @type {Array<String>} */
let fruits = ["apple", "banana", "grape"];
```

(but that's moot - it's already inferred)

[comment]: # "!!! data-auto-animate"

### Lists

```js [1-99]
/** @type {Array<Fruit>} */
let fruits = [
  { name: "apple", calories: 90 },
  { name: "banana", calories: 105 },
];
```

[comment]: # "!!! data-auto-animate"

### Lists

```js [1]
/** @type {Array<Fruit>} */
let fruits = [
  { name: "apple", calories: 90 },
  { name: "banana", calories: 105 },
];
```

[comment]: # "!!! data-auto-animate"

### Lists

```js [1,3]
/** @type {Array<Fruit>} */
let fruits = [
  { name: "apple", calories: 90 },
  { name: "banana", calories: 105 },
];
```

🦆 Quack!

[comment]: # "!!! data-auto-animate"

### Lists

⚠️

[comment]: # "!!! data-auto-animate"

### Lists

⚠️

```js [1-99]
/**
 * @typedef {Array<String>} Fruits
 */
```

[comment]: # "!!! data-auto-animate"

### Lists

⚠️

```js [1-99]
/**
 * @typedef {Array<String>} Fruits
 */
```

<small>(type the <em>things</em>, not the
collections)</small>

[comment]: # "!!! data-auto-animate"

### Maps

[comment]: # "!!! data-auto-animate"

### Maps

```js [1-99]
/** @type {Object.<String, Fruit>} */
let fruits = [
  "apple": {
    calories: 90,
    colors: ["green", "yellow", "red"] ,
  },
];
```

[comment]: # "!!! data-auto-animate"

### Maps

```js [1]
/** @type {Object.<String, Fruit>} */
let fruits = [
  "apple": {
    calories: 90,
    colors: ["green", "yellow", "red"] ,
  },
];
```

[comment]: # "!!! data-auto-animate"

### Maps

```js [1-99]
/** @type {Object.<String, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

```js [1-99]
/** @type {Object.<String, Fruit>} */
```

```js [1-99]
/** @type {Record<String, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

```js [1-99]
/** @type {Object.<String, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

❌

```js [1]
/** @type {Object.<Number, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

❌

```js [1]
/** @type {Object.<Number, Fruit>} */
```

(Object keys are _always_ strings)

[comment]: # "!!! data-auto-animate"

### Maps

✅

```js [1-99]
/**
 * @typedef {String} FruitNames
 */

/** @type {Object.<FruitNames, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

✅

```js [1-99]
/**
 * @typedef {"apple"|"banana"|"grape"} FruitNames
 */

/** @type {Object.<FruitNames, Fruit>} */
```

[comment]: # "!!! data-auto-animate"

### Maps

✅

```js [1-99]
/**
 * @typedef {"apple"|"banana"|"grape"} FruitNames
 */

/** @type {Object.<FruitNames, Fruit>} */
```

(kinda tuple-ish 🤷‍♂️)

[comment]: # "!!! data-auto-animate"

### Maps

⚠️

```js [1-99]
/** @type {Object.<String, any>} */
```

(for a cache or some such?)

[comment]: # "!!! data-auto-animate"

### Maps

⚠️

```js [1-99]
/** @type {Object.<String, any>} */
```

(will the IDs overlap?)

[comment]: # "!!! data-auto-animate"

### Maps & Lists

- List for when the _order_ (or _index_) is meaningful
- Map for when the _id_ is more meaningful
  - Cache

[comment]: # "!!! data-auto-animate"

## 4. Meta Types

[comment]: # "!!! data-auto-animate"

### Enums

[comment]: # "!!! data-auto-animate"

### Enums

- Value Enums

[comment]: # "!!! data-auto-animate"

### Enums

- Value Enums
- Type Enums

[comment]: # "!!! data-auto-animate"

### Enums

- Value Enums
- Type Enums
- Implied? Enums

[comment]: # "!!! data-auto-animate"

### Value Enums

```go
const (
  NONE = 0 // falsy, defaulty
  VIEWER = 1
  EDITOR = 2
  OWNER = 3
)
```

[comment]: # "!!! data-auto-animate"

### ~~Value~~ Weak Sauce Enums

```go
const (
  NONE = 0 // falsy, defaulty
  VIEWER = 1
  EDITOR = 2
  OWNER = 3
)
```

❌ (C-style)

[comment]: # "!!! data-auto-animate"

### ~~Value~~ Weak Sauce Enums

`@enum` 🤷‍♂️

[comment]: # "!!! data-auto-animate"

### Value Enums

TODO - Note to self - do enums before type aliases!

```js
/** @typedef {"apple"|"banana"|"grape"} FruitNames */
```

[comment]: # "!!! data-auto-animate"

### Value Enums

```js
/** @typedef {"apple"|"banana"|"grape"} FruitNames */
```

```js
/** @type {FruitNames} */
let fruit = "monkey";
```

[comment]: # "!!! data-auto-animate"

### Value Enums

```js
/** @typedef {"apple"|"banana"|"grape"} FruitNames */
```

```js
/**
 * @param {FruitNames} fruitName
 */
function smashFruit(fruitName) {
  // ...
}

smashFruit("monkey");
```

[comment]: # "!!! data-auto-animate"

### Type Enums

[comment]: # "!!! data-auto-animate"

### Type Enums

```js
/** @typedef {Array|Uint8Array|Buffer} Bytes */
```

[comment]: # "!!! data-auto-animate"

### Type Enums

```js
/** @typedef {Person|Human} PersonLike */
```

[comment]: # "!!! data-auto-animate"

### Type Enums

💩 (code smell)

```js
/** @typedef {String|Number|BigInt} BigNumber */
```

[comment]: # "!!! data-auto-animate"

### Type Enums

🤷‍♂️ (legacy code)

```js
/**
 * @param {Object|Function} [opts]
 * @param {Function} [cb]
 */
function getImages(opts, cb) {
  // ...
}
```

[comment]: # "!!! data-auto-animate"

### Type Enums

🤷‍♂️ (legacy code)

```js
/**
 * @param {WidgetOpts|WidgetCallback} [opts]
 * @param {WidgetCallback} [cb]
 */
function getImages(opts, cb) {
  // ...
}
```

[comment]: # "!!! data-auto-animate"

### Implied Enums

[comment]: # "!!! data-auto-animate"

### Implied Enums

> If it fits it ships!

[comment]: # "!!! data-auto-animate"

### Implied Enums

TODO - a superset also fits

[comment]: # "!!! data-auto-animate"

### Type Alias

[comment]: # "!!! data-auto-animate"

### Type Alias

a.k.a. Marker Type

[comment]: # "!!! data-auto-animate"

### Type Alias

```js [1-99]
/** @typedef {Number} Dollars */
```

[comment]: # "!!! data-auto-animate"

### Type Alias

```js [1-99]
/** @typedef {Number} Dollars */
```

(improve documentation)

[comment]: # "!!! data-auto-animate"

### Type Alias

(improve documentation)

```js [1-99]
/** @typedef {Number} Dollars */

/** @type {Dollars}
let salary = 1_000_000;
```

[comment]: # "!!! data-auto-animate"

### Type Anti-Aliasing

[comment]: # "!!! data-auto-animate"

### Type Guard

Distinguish between similar types

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [1-99]
/**
 * @typedef {File | Folder | Symlink | Pipe} DirEntry
 */

/**
 * @param {DirEntry} dirEntry
 * @returns {dirEntry is File}
 */
function isFile(dirEntry) {
  return "file" === dirEntry.type;
}
```

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [2]
/**
 * @typedef {File | Folder | Symlink | Pipe} DirEntry
 */

/**
 * @param {DirEntry} dirEntry
 * @returns {dirEntry is File}
 */
function isFile(dirEntry) {
  return "file" === dirEntry.type;
}
```

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [6-7]
/**
 * @typedef {File | Folder | Symlink | Pipe} DirEntry
 */

/**
 * @param {DirEntry} dirEntry
 * @returns {dirEntry is File}
 */
function isFile(dirEntry) {
  return "file" === dirEntry.type;
}
```

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [9-11]
/**
 * @typedef {File | Folder | Symlink | Pipe} DirEntry
 */

/**
 * @param {DirEntry} dirEntry
 * @returns {dirEntry is File}
 */
function isFile(dirEntry) {
  return "file" === dirEntry.type;
}
```

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [2-3]
/**
 * @param {Animal} animal
 * @returns {animal is Duck}
 */
function isDuck(animal) {
  return "file" === animal.sound;
}
```

(obligatory example)

[comment]: # "!!! data-auto-animate"

### Type Guard

```js [2-3]
/**
 * @param {Animal} animal
 * @returns {animal is Fox}
 */
function isFox(animal) {
  throw new Error("What does the fox say?");
}
```

(dad... joke?)

[comment]: # "!!! data-auto-animate"

### ❌ NewType

[comment]: # "!!! data-auto-animate"

### ❌ NewType

```js [1-2]
/** @type {Dollars} */
let salary = 1_000_000;
let payPeriods = 24; // Number
let pay = salary / payPeriods;
// 💣 Error!
```

[comment]: # "!!! data-auto-animate"

### ❌ NewType

```js [3]
/** @type {Dollars} */
let salary = 1_000_000;
let payPeriods = 24; // Number
let pay = salary / payPeriods;
// 💣 Error!
```

[comment]: # "!!! data-auto-animate"

### ❌ NewType

```js [4]
/** @type {Dollars} */
let salary = 1_000_000;
let payPeriods = 24; // Number
let pay = salary / payPeriods;
// 💣 Error!
```

[comment]: # "!!! data-auto-animate"

### ❌ NewType

```js [4-5]
/** @type {Dollars} */
let salary = 1_000_000;
let payPeriods = 24; // Number
let pay = salary / payPeriods;
// 💣 Error!
```

[comment]: # "!!! data-auto-animate"

🦆 Quack!

[comment]: # "!!! data-auto-animate"

### Mixins

[comment]: # "!!! data-auto-animate"

### Mixins

Unions

[comment]: # "!!! data-auto-animate"

### Mixins

Polymorphism

[comment]: # "!!! data-auto-animate"

### Mixins

Polymorphism

😬

[comment]: # "!!! data-auto-animate"

### Mixins

/\*\*

- A great human being
- @typedef {Object} BasePerson
- @param {String} other.name
- @param {Number} other.age \*/

[comment]: # "!!! data-auto-animate"

### Mixins

```js [1-4]
/**
 * @typedef {Object} WithFriends
 * @prop {Array<Person>} friends
 */

/**
 * @typedef {BasePerson & WithFriends} PersonWithFriends
 */
```

[comment]: # "!!! data-auto-animate"

### Mixins

```js [6-9]
/**
 * @typedef {Object} WithFriends
 * @prop {Array<Person>} friends
 */

/**
 * @typedef {BasePerson & WithFriends} PersonWithFriends
 */
```

[comment]: # "!!! data-auto-animate"

### Mixins

```js [1-4]
/**
 * @typedef {Object} WithPosts
 * @prop {Array<Post>} ramblings
 */

/**
 * @typedef {BasePerson & WithPosts} PersonWithPosts
 */
```

[comment]: # "!!! data-auto-animate"

### Mixins

```js [6-9]
/**
 * @typedef {Object} WithPosts
 * @prop {Array<Post>} ramblings
 */

/**
 * @typedef {BasePerson & WithPosts} PersonWithPosts
 */
```

[comment]: # "!!! data-auto-animate"

### Mixins

Full Person

```js [1-99]
/**
 * @typedef {BasePerson & WithFriends & WithPosts} FullPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Templates

<small><a href="https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#template" target="_blank">JSDoc
Reference: @template</a></small>

[comment]: # "!!! data-auto-animate"

### Templates

Generics

/

Utility Functions

[comment]: # "!!! data-auto-animate"

### Templates

```js [1-99]
/**
 * @template T
 * @param {Array<T>} arr
 * @returns T
 */
function last(arr) {
  return arr[arr.length - 1];
}
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [2]
/**
 * @template T
 * @param {Array<T>} arr
 * @returns T
 */
function last(arr) {
  return arr[arr.length - 1];
}
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [3,6]
/**
 * @template T
 * @param {Array<T>} arr
 * @returns T
 */
function last(arr) {
  return arr[arr.length - 1];
}
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [4,7]
/**
 * @template T
 * @param {Array<T>} arr
 * @returns T
 */
function last(arr) {
  return arr[arr.length - 1];
}
```

[comment]: # "!!! data-auto-animate"

### Templates

"Like" Types

[comment]: # "!!! data-auto-animate"

### Templates

```js [1-99]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */
Person.sanitize = function (p) {
  if (p.ssn) {
    p.ssn = "***-**-" + p.ssn.slice(-4);
  }
  return p;
};
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [2]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */
Person.sanitize = function (p) {
  if (p.ssn) {
    p.ssn = "***-**-" + p.ssn.slice(-4);
  }
  return p;
};
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [2,7-9]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */
Person.sanitize = function (p) {
  if (p.ssn) {
    p.ssn = "***-**-" + p.ssn.slice(-4);
  }
  return p;
};
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [3,6,11]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */
Person.sanitize = function (p) {
  if (p.ssn) {
    p.ssn = "***-**-" + p.ssn.slice(-4);
  }
  return p;
};
```

[comment]: # "!!! data-auto-animate"

### Templates

```js [4,10]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */
Person.sanitize = function (p) {
  if (p.ssn) {
    p.ssn = "***-**-" + p.ssn.slice(-4);
  }
  return p;
};
```

[comment]: # "!!! data-auto-animate"

### Type Utils

[comment]: # "!!! data-auto-animate"

### Type Utils

a.k.a. "[Utility Types][utility-types]"

[utility-types]:
  https://www.typescriptlang.org/docs/handbook/utility-types.html

<!-- -->

[comment]: # "!!! data-auto-animate"

### Type Utils

"Set Operations for Types"

[comment]: # "!!! data-auto-animate"

### Type Utils

"lodash for types"

[comment]: # "!!! data-auto-animate"

### Type Utils

How to create a "Like" type

[comment]: # "!!! data-auto-animate"

### Type Utils

How to create a "Like" type

```js [1-5]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */

/**
 * @typedef {Partial<Person>} PersonLike
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

How to create a "Like" type

```js [1-5]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */

/**
 * @typedef {Partial<FullPerson>} PersonLike
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

How to create a "Like" type

```js [7-9]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */

/**
 * @typedef {BasePerson | PersonWithFriends | FullPerson>} PersonLike
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

How to create a "Like" type

```js [8]
/**
 * @template {PersonLike} T
 * @param {T} p
 * @returns T
 */

/**
 * @typedef {Partial<FullPerson>} PersonLike
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [2]
/**
 * @typedef {Partial<FullPerson>} PersonLike
 * @typedef {Required<FullPerson>} PerfectPerson
 * @typedef {NonNullable<FullPerson>} SteelPerson
 * @typedef {Pick<BasePerson, "name" | "age">} MiniPerson
 * @typedef {Omit<BasePerson, "ssn">} PublicPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [3]
/**
 * @typedef {Partial<FullPerson>} PersonLike
 * @typedef {Required<FullPerson>} PerfectPerson
 * @typedef {NonNullable<FullPerson>} SteelPerson
 * @typedef {Pick<BasePerson, "name" | "age">} MiniPerson
 * @typedef {Omit<BasePerson, "ssn">} PublicPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [4]
/**
 * @typedef {Partial<FullPerson>} PersonLike
 * @typedef {Required<FullPerson>} PerfectPerson
 * @typedef {NonNullable<FullPerson>} SteelPerson
 * @typedef {Pick<BasePerson, "name" | "age">} MiniPerson
 * @typedef {Omit<BasePerson, "ssn">} PublicPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [5]
/**
 * @typedef {Partial<FullPerson>} PersonLike
 * @typedef {Required<FullPerson>} PerfectPerson
 * @typedef {NonNullable<FullPerson>} SteelPerson
 * @typedef {Pick<BasePerson, "name" | "age">} MiniPerson
 * @typedef {Omit<BasePerson, "ssn">} PublicPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [6]
/**
 * @typedef {Partial<FullPerson>} PersonLike
 * @typedef {Required<FullPerson>} PerfectPerson
 * @typedef {NonNullable<FullPerson>} SteelPerson
 * @typedef {Pick<BasePerson, "name" | "age">} MiniPerson
 * @typedef {Omit<BasePerson, "ssn">} PublicPerson
 */
```

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [2]
/**
 * @param {ReadOnly<PersonLike>} p
 * @returns {String}
 */
Person.hash = function (p) {
  // ...
};
```

[comment]: # "!!! data-auto-animate"

### Type Utils

# ⚠️

[comment]: # "!!! data-auto-animate"

### Type Utils

# ⚠️

> Just because you _can_ \
> doesn't mean you _should_

[comment]: # "!!! data-auto-animate"

### Type Utils

# ⚠️

> Flat is Better than Nested -
> [Zen of Python](https://github.com/ewjoachim/zen-of-python)

### Type Utils

# ⚠️

> Avoid Hasty Abstractions -
> [Kent C. Dodds](https://kentcdodds.com/blog/aha-programming)

[comment]: # "!!! data-auto-animate"

### Type Utils

# ⚠️

> People aren't great at recursion - _Every Juan, Ever_

[comment]: # "!!! data-auto-animate"

### Type Utils

```js [1-99]
/**
 * @typedef BasePerson
 * @prop {String} name
 * @prop {Number?} age
 */
```

```js [1-99]
/**
 * @typedef FullPerson
 * @prop {String} name
 * @prop {Number} age
 * @prop {Array<Person>} friends
 * @prop {Array<Post>} ramblings
 */
```

[comment]: # "!!! data-auto-animate"

TODO

[comment]: # "!!! data-auto-animate"

```js
/**
 * @typedef {Perennial|Annual} Plant
 */
```

[comment]: # "!!! data-auto-animate"
[comment]: # "!!! data-auto-animate"

### TODO

- `@typedef (optional) {Object} <name>`
- types are file-scope, not package-scope
- alphabetize for better diffs
- FruitLike

### LATER - Multi-value

```js
/**
 * @param {Object} other
 * @param {String} other.name
 */
```

```js [1-99]
@callback Greeter - Greets a new user
@param {Person} other
function greet(other) {
    return `Hello, ${other.name}!`;
}
```

[comment]: # "!!! data-auto-animate"

### Null*ish*

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
