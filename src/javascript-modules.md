# You Don't Know ESM

<small><a href="https://beyondcodebootcamp.github.io/presos/javascript-modules/">beyondcodebootcamp.github.io/presos/javascript-modules/</a></small>

---

# JavaScript Modules

---

## AJ ONeal

[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86) <br>
[github.com/therootcompany](https://github.com/therootcompany/)

<br>

Deep-Learner

Dangerous Wrong Thinker

---

# Gun for Hire

<br>

🐹 Go 📦 Node 🦎 Zig

🛜 Net 🔐 Sec 🐧 POSIX

<br>

<aj@therootcompany.com>

---

## TL;DR

- 3 syntaxes (that work)
- 3 import configs

Should you use it? 💯%

---

## Create / Export

---

##### Default Export

```js
let Foo = {};

Foo.noop = function () {};

export default Foo;
```

##### Default Import

```js
import Foo from "./foo.js";

void Foo.noop();
```

##### Default Require 🥴

```js
let FooMeta = require("./foo.js");
let Foo = FooMeta.default;

void Foo.noop();
```
---

##### Default Export

```js
let Foo = {};

Foo.noop = function () {};

export let noop = Foo.noop;
```

##### Full Import 🤕

```js
import * as Foo from "./foo.js";

void Foo.noop();
```

##### Full Require

```js
let Foo = require("./foo.js");

void Foo.noop();
```

---

The rumors are NOT true...

- async module loading
- tree shaking
- ALL-THE-CONFERENCE-SLIDES!

---

```sh
# ✅
grep -r -F 'Foo.'
```

```js
// ❌
import { createStutter, getStutter } from "./stuttering.js";
```

---

## Browser + NPM

```js
let Foo = {};

Foo.noop = function () {};

export let noop = Foo.noop; // for require()
export default Foo; // for import
```

---

# What about Module _Packages_?

- index.html
- package.json
- jsconfig.json (tsconfig.json)

---

##### index.html

```html
  <form method="dialog"
    onsubmit="FooUI.submit(window.event);"> ... </form>
  <script type="importmap">
    {
      "imports": {
        "foo": "./foo.js",
        "foo/": "./lib/",
        "bar": "./node_modules/bar/index.js"
      }
    }
  </script>
  <script type="module">
    import FooUI from "foo/ui.js";
    window.FooUI = FooUI;
  </script>
```

---

##### package.json

```json
{
  "type": "module",
  "imports": {
    "foo": "./foo.js",
    "foo/": "./lib/",
    "baz": "./vendor/baz.js"
  },
  "exports": {
    ".": "foo.js",
    "./*": "./foo/*"
  }
}
```

---

##### jsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "paths": {
      "foo/*": ["./lib/*"],
      "foo": ["./foo.js"],
      "baz": ["./vendor/baz.js"]
    }
}
```

---

## Things to Know...

---

### Ubër Async

```js
let Foo = await import('./foo.js')
```

---

### __dirname

```js
import Path from "node:path";

let modulePath = import.meta.url.slice("file://".length);
let moduleDir = Path.dirname(modulePath);
```

---

END

---

Q&A
