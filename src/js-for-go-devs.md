# JS for Go Devs

<small><a href="https://beyondcodebootcamp.github.io/presos/js-for-go-devs/">beyondcodebootcamp.github.io/presos/js-for-go-devs/</a></small>

---

# Dependency Management

---

Go: 10 Years <br> (2009 - 2019)

<small>(but perfect)</small>

---

JavaScript: 30 Years <br> (1995 - 2025)

<small>(and is... workable)</small>

<small><a href="https://git.rootprojects.org/root/walk.js/issues/1#issuecomment-9821">git.rootprojects.org/root/walk.js/issues/1</a></small>

---

#### JavaScript

<br>

a fundamentally good language \
with a fundamentally bad community.

---

#### Gopher Values

- Pathologically Simple
- Inferred, Duck-Typed

---

# Browser JS: Module Declaration

`go.mod` => `index.html`

# `index.html`

<carousel data-line-start="1" data-slides="1,9 | 4-6 | 4 | 5 | 6"></carousel>

```html
<script type="importmap">
  {
    "imports": {
      "@root/passkey": "./passkey.js",
      "@root/passkey/": "./lib/",
      "localstore": "./vendor/localstore.js"
    }
  }
</script>
```

---

# JS: Export Module

(one file of a Package)

<br>

```js
// filename: ./passkey.js

let Passkey = {};

// ...

export default Passkey;
```

---

#### ❌ (the other 12 ways)

---

# JS: Import Module

#### ✅

```js
import Passkey from "@root/passkey";
```

#### ❌

(the other 12 ways)

---

# Node JS: Module Declaration

`go.mod` => `package.json`

<carousel data-line-start="1" data-slides="4 | 5-8 | 2,10 | 9-13 | 14-16"></carousel>

```js
{
  "name": "@root/passkey",
  "main": "./passkey.js",
  "type": "module",
  "exports": {
    ".": "./passkey.js",
    "./*": "./*"
  },
  "imports": {
    "@root/passkey": "./passkey.js",
    "@root/passkey/": "./lib/",
    "localstore": "./vendor/localstore.js"
  },
  "dependencies": {
    "foo": "1.0.0"
  }
}
```

---

# JS Type Linter: Module Declaration

TSC's `go.mod` => `jsconfig.json`

```js
{
  "compilerOptions": {
    "paths": {
      "passkey": ["./passkey.js"],
      "passkey/*": ["./lib/*"],
      "localstore": ["./vendor/localstore.js"]
    }
  }
}
```

---

# Types

(are in the Tooling)

```sh
// init jsconfig.json that works
npx jswt init
```

---

# JS Types

<small>(they exist)</small>

---

```js
let person = {
  name: "AJ",
  age: 38,
};
```

---

```js
/**
 * @typedef Person
 * @prop {String} name
 * @prop {Number} age
 */
```

---

<carousel data-line-start="1" data-slides="1 | 2-5"></carousel>

```js
/** @type {Person} */
let person = {
  name: "AJ",
  age: 38,
};
```

---

<carousel data-line-start="1" data-slides="2 | 2-3 | 4 | 5 "></carousel>

```js
/**
 * @param {Object} opts
 * @param {String} opts.name
 * @param {Number} [opts.age]
 * @param {Person?} [opts.partner]
 */
function createPerson(opts) {
  let person = {};
  person.name = opts.name;
  person.age = opts.age;

  // ...

  return person;
}
```

---

<carousel data-line-start="1" data-slides="2 | 3"></carousel>

```js
/**
 * @callback {CreatePerson}
 * @param {Partial<Person>} opts
 */
```

---

# Utility Types

<carousel data-line-start="1" data-slides="2,5 | 3,12"></carousel>

```js
/**
 * @param {Partial<Person>}
 * @returns {Required<Person> & SoulMater}
 */
function complete(person) {
  let defaults = {
    name: "Unknown",
    age: -1,
    partner: null,
  };
  Object.assign(defaults, person);
  return person;
}
```

---

# JavaScript Types, Actually

<carousel data-line-start="1" data-slides="4 | 3 | 1 | 2"></carousel>

```js
/** @typedef {Number} Int32 */
/** @typedef {Number} UInt32 */ // ex: -1 >>> 0
/** @typedef {Number} Int53 */
/** @typedef {Number} Float64 */
```

---

# Go: Explicit Ignore

```go
func greet() string {
  return "Hello, World!";
}
```

```go
_ = greet()
```

---

# JS: Explicit Ignore

```js
function greet() {
  return "Hello, World!";
}
```

```js
void greet();
```

---

```diff
- void greet();
+ void greet()
```

---

# Go: Defer

```go
func doFileStuff(path) {
  f := os.Open(path);

  defer func () {
    f.Close()
  }()

  // ...
}
```

---

# JavaScript: Defer

```js
function doFileStuff(path) {
  try {
    let f = Fs.open(path);

    // ...
  } finally {
    f.close();
  }
}
```

<small>(better to have a new function than to nest)</small>
