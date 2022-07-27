[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## MVC is Dead.

(Long Live MVC!)

[comment]: # "!!!"

### Useful Links

<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/long-live-mvc/">https://beyondcodebootcamp.github.io/</a></small>

<small>Video:
<a href="https://www.youtube.com/watch?v=bO7nynlX8a0">https://youtu.be/bO7nynlX8a0</a></small>

[comment]: # "!!!"

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[youtube.com/coolaj86](https://youtube.com/coolaj86)

[comment]: # "!!!"

Dangerous Wrong Thinker

Equal Opportunity Offender

Technophobic Technologist Extraordinairé

[comment]: # "!!!"

Utah Node.js

Utah Rust

Twitch.tv/coolaj86

[comment]: # "!!!"

## MVC is Dead.

(Long Live MVC!)

[comment]: # "!!!"

## What is MVC?

[comment]: # "!!!"

- MVC

[comment]: # "!!! data-auto-animate"

- MVC
- MVVM

[comment]: # "!!! data-auto-animate"

- MVC
- MVVM
- MVP

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `render()`, `log()`, 'res.json()'

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `render()`, `log()`, 'res.json()'
- Controller

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `render()`, `log()`, 'res.json()'
- Controller
  - **Business Logic** (Testable Stuff)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `render()`, `log()`, 'res.json()'
- Controller
  - **Business Logic** (Testable Stuff)
  - `if`, `for`, `throw`

[comment]: # "!!! data-auto-animate"

## MVC is Dead

[comment]: # "!!!"

## Models are Dead

❌ We don't _actually_ switch databases

[comment]: # "!!!"

## Views are Dead

❌ No more `{{ ... }}` on Rails!

[comment]: # "!!!"

## Controllers are Dead

❌ Generic "reusability" is a liability

[comment]: # "!!!"

## Categorganization is Dead

```txt
foobar5000/
├──❌ models/
│  ├── gizmos.db
│  └── widgets.db
├──❌ views/
│  ├── gizmos.fml
│  └── widgets.fml
└──❌ controllers/
   ├── gizmos.app
   └── widgets.app
```

[comment]: # "!!!"

> A design pattern is a crutch to use when you have either a
> mediocre team, or they have to work with other mediocre
> teams. - [TodPunk][todpunk]

[todpunk]: https://github.com/todpunk

<!-- -->

[comment]: # "!!!"

## Long Live MVC!

[comment]: # "!!!"

MVC is an _Emergent Design_

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - Get the right stuff, in the right shape

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - Get the right stuff, in the right shape
- ~~View~~

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - Get the right stuff, in the right shape
- ~~View~~
  - How to interact with the product

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - Get the right stuff, in the right shape
- ~~View~~
  - How to interact with the product
- ~~Controller~~

[comment]: # "!!! data-auto-animate"

- ~~Model~~
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
  - Get the right stuff, in the right shape
- ~~View~~
  - How to interact with the product
- ~~Controller~~
  - Business logic, Unique value

[comment]: # "!!!"

- Testability
- Throw-away-ability

[comment]: # "!!! data-auto-animate"

**Let's Consider Some (backend) Code**

[comment]: # "!!!"

```js [1-9]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

```js [1,9]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

```js [2]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

```js [3-5]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

```js [6-7]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

```js [8]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

Code is for Humans.

[comment]: # "!!!"

Code is for (dumb) Humans.

[comment]: # "!!! data-auto-animate"

We break ideas into paragraphs.

[comment]: # "!!!"

Code should read like paragraphs.

[comment]: # "!!!"

```js
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  res.result({ average });
});
```

[comment]: # "!!!"

Code needs comments...

[comment]: # "!!!"

```js
router.get("/api/gizmos/average-cost", function (req, res) {
  // Get stuff in the shape we need it
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  // Do what we need to do
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  // Present the API to the user
  res.result({ average });
});
```

[comment]: # "!!! data-auto-animate"

Code _shouldn't_ need comments!

[comment]: # "!!! data-auto-animate"

Code _shouldn't_ need comments!

(comments become out-of-sync)

[comment]: # "!!! data-auto-animate"

```js
Gizmos.data.getUpsideDownGizmos = async function () {
  let gizmos = await Db.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  return gizmos;
};
```

[comment]: # "!!!"

```js
Gizmos.ctrl.calculateAveragePrice = function (gizmos) {
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  return average;
};
```

[comment]: # "!!!"

```js
Gizmos.view.showAverageCost = async function (req, res) {
  let gizmos = await Db.getUpsideDownGizmos();
  let average = calculateAveragePrice(gizmos);
  res.result({ average });
};
```

[comment]: # "!!!"

```js
router.get(
  "/api/gizmos/average-cost",
  Gizmos.view.showAverageCost
);
```

[comment]: # "!!! data-auto-animate"

But 4 slides?

[comment]: # "!!! data-auto-animate"

But 4 slides?

Really??

[comment]: # "!!! data-auto-animate"

But 4 slides?

Really??

**_FOUR_** files to tab through!?

[comment]: # "!!! data-auto-animate"

Well... no.

[comment]: # "!!!"

`./lib/gizmos.js`:

```js
Gizmos.data.getUpsideDownGizmos = async function () {
  // ...
};

Gizmos.ctrl.calculateAveragePrice = function (gizmos) {
  // ...
};

Gizmos.view.showAverageCost = function (req, res) {
  // ...
};
```

`./router.js`:

```js
router.get(
  "/api/gizmos/average-cost",
  Gizmos.view.showAverageCost
);
```

[comment]: # "!!! data-auto-animate"

- Storage
- Component (Unit Testable)
  - Get the right stuff, in the right shape
  - Business logic, Unique value
- View-Controllers
  - Glue component pieces into presentation
- Global Router

[comment]: # "!!! data-auto-animate"

- Storage
- Component (Unit Testable)
  - Get the right stuff, in the right shape
  - Business logic, Unique value
- View-Controllers
  - Glue component pieces into presentation
- Global Router
- Libraries + Utilities
  - Generic, reusable stuff

[comment]: # "!!! data-auto-animate"

Components + Libs

```txt
└── lib/
   ├── storage.lib
   ├── averager.lib
   └── widgets.lib
```

View-Controllers

```
├── router/         # API
│  ├── widgets.app
│  └── serve.app
│
├── webapp/         # Web UI
│  └── store.html
│
└── bin/            # CLI
   └── foobar500
```

[comment]: # "!!! data-auto-animate"

Emergent Design

[comment]: # "!!! data-auto-animate"

Emergent Design

- 🎯 Red

[comment]: # "!!! data-auto-animate"

Emergent Design

- 🎯 Red
- ✅ Green

[comment]: # "!!! data-auto-animate"

Emergent Design

- 🎯 Red
- ✅ Green
- ⚙️ Refactor

<!-- Best refactor icon? ♺ ♻️ 🎨 🔨 🦄 ⚡️ 🚜 🚧 ⚙️  🌈 -->

[comment]: # "!!! data-auto-animate"

## Caveat

[comment]: # "!!!"

Circular Component Dependencies

[comment]: # "!!! data-auto-animate"

Don't overwrite `exports`:

[comment]: # "!!! data-auto-animate"

Don't overwrite `exports`:

```js [1-7]
// ✅
let Gizmos = exports;

Gizmos.foo = { ... };

// ❌
// exports = Gizmos;
```

[comment]: # "!!! data-auto-animate"

Don't overwrite `exports`:

```js [5-7]
// ✅
let Gizmos = exports;

Gizmos.foo = { ... };

// ❌
// exports = Gizmos;
```

[comment]: # "!!! data-auto-animate"

Don't overwrite `exports`:

```js [1-2]
// ✅
let Gizmos = exports;

Gizmos.foo = { ... };

// ❌
// exports = Gizmos;
```

[comment]: # "!!! data-auto-animate"

Don't destructure imports

[comment]: # "!!! data-auto-animate"

Don't destructure imports

```js [1-5]
// ❌
// let { view: GizmosView } = require('./lib/gizmos.js');

// ✅
let Gizmos = require("./lib/gizmos.js");
```

[comment]: # "!!! data-auto-animate"

Don't destructure imports

```js [1-2]
// ❌
// let { view: GizmosView } = require('./lib/gizmos.js');

// ✅
let Gizmos = require("./lib/gizmos.js");
```

[comment]: # "!!! data-auto-animate"

Don't destructure imports

```js [4-5]
// ❌
// let { view: GizmosView } = require('./lib/gizmos.js');

// ✅
let Gizmos = require("./lib/gizmos.js");
```

[comment]: # "!!! data-auto-animate"

(and use a directed graph of dependencies)

[comment]: # "!!!"

**Let's Consider Some (frontend) Code**

[comment]: # "!!! data-auto-animate"

```js [1-14]
app.route("/#/gizmos/:fn", function (location) {
  let gizmos = await Api.getGizmos();
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  app.render(
    './partials/gizmo-average.xjs.html',
    { gizmos: { cost: average } }
  );
});
```

[comment]: # "!!!"

```js
Gizmos.data.getUpsideDownGizmos = async function () {
  let gizmos = await api.get("/api/gizmos");
  gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  return gizmos;
};
```

[comment]: # "!!!"

```js
Gizmos.ctrl.calculateAveragePrice = function (gizmos) {
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  return average;
};
```

[comment]: # "!!!"

```js
Gizmos.route.showAverageCost = async function (location) {
  let gizmos = await Gizmos.data.getUpsideDownGizmos();
  let average = Gizmos.ctrl.calculateAveragePrice(gizmos);
  return { gizmos: { cost: average } };
};
```

[comment]: # "!!!"

`./router.js`:

```js
app.routeAndRender(
  "/api/gizmos/average-cost",
  Gizmos.route.showAverageCost
);
```

[comment]: # "!!! data-auto-animate"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
