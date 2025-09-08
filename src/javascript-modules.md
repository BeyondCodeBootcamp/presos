# You Don't Know ESM

<small><a href="https://beyondcodebootcamp.github.io/presos/javascript-modules/">beyondcodebootcamp.github.io/presos/javascript-modules/</a></small>

---

# JavaScript Modules

---

## AJ ONeal

<aj@therootcompany.com> <br>

Deep-Learner <br> Dangerous Wrong Thinker

---

# Gun for Hire

<br>

🐹 Go 📦 Proxmox 💽 TrueNAS

🛜 Net 🔐 Sec 🐧 POSIX

(and Node.js)

---

## Like, Sub, Follow, & Share

[@\_beyondcode](https://x.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86) <br>
[github.com/therootcompany](https://github.com/therootcompany/)

---

## "JavaScript" Modules

https://www.youtube.com/watch?v=Wt46wuoVZT8

---

# "JavaScript"

ESM, WHATWG, JS Foundation

---

Syntax v. Implementation

```js
import "...";
```

---

TC39 ECMAScript Modules

<https://tc39.es/ecma262/#sec-modules>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export>

---

WHATWG (import map)

<https://html.spec.whatwg.org/multipage/webappapis.html#import-map>

---

package.json (server entry points)

<https://nodejs.org/api/packages.html#package-entry-points>

---

jsconfig.json (linting paths)

<https://www.typescriptlang.org/tsconfig/#paths> <br>
<https://www.typescriptlang.org/docs/handbook/modules/reference.html#paths>

---

# Module

1. use code from another file
2. use code from another package

---

2025: The year of ESM

> You can publish a package as a module without breaking downstream
> dependencies.

<https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap>
<br> <https://nodejs.org/en/blog/release/v22.12.0>

---

## TL;DR

- 3 syntaxes (that work)
- 3 import path configs

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

##### Full Export

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

##### Not ESM

```js
import "./foo";
import "./style.css";
import "./data.json";
```

ESM is for _JavaScript_

---

##### Cautiously ESM

```js
# ⚠️ requires importmap, etc
import "foobar";
```

```js
# ⚠️ not for packages
await Foo.bar();
```

---

##### ESM FUD

The rumors are NOT true...

- async module loading
- tree shaking
- ALL-THE-CONFERENCE-SLIDES!

---

LIES!!

```js
// ❌ stuttering
import { createFoo, getFoo } from "./stuttering-foo.js";
```

Truths!

```sh
# ✅
grep -r -F 'Foo.'
```

---

## Browser + NPM

```js
let Foo = {};

Foo.create = function () {
  /* ... */
};

export default Foo; // for import
export let create = Foo.create; // for require()
```

---

# Module _Packages_?

- index.html
- package.json
- jsconfig.json (tsconfig.json)

---

##### index.html

```html
<form method="dialog" onsubmit="FooUI.submit(window.event);">...</form>
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
  "name": "foo",
  "type": "module",
  "imports": {
    "foo": "./foo.js",
    "foo/": "./lib/",
    "baz": "./vendor/baz.js"
  },
  "exports": {
    ".": "foo.js",
    "./*": "./lib/*"
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
let Foo = await import("./foo.js");
```

---

### \_\_dirname

```js
import Path from "node:path";

let modulePath = import.meta.url.slice("file://".length);
let moduleDir = Path.dirname(modulePath);
```

---

END

---

## Q&A

AJ ONeal

<aj@therootcompany.com>

🐹 Go 📦 Proxmox 💽 TrueNAS

🛜 Net 🔐 Sec 🐧 POSIX

(and Node.js)

<small><a href="https://beyondcodebootcamp.github.io/presos/javascript-modules/">beyondcodebootcamp.github.io/presos/javascript-modules/</a></small>
