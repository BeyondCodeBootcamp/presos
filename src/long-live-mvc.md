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
<a href="https://beyondcodebootcamp.github.io/presos/long-live-mvc/">https://beyondcodebootcamp.github.io/presos/long-live-mvc/</a></small>

<small>Video:
<a href="https://youtube.com/coolaj86">https://youtu.be/VIDEO_GOES_HERE</a></small>

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

# MVC

[comment]: # "!!!"

**Let's Consider Some Code**

[comment]: # "!!!"

```js [1-9]
router.get("/api/gizmos/average-cost", function (req, res) {
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;
  res.result({ average });
});
```

[comment]: # "!!!"

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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
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
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  // Do what we need to do
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  // Present the API to the user
  res.result({ average });
});
```

[comment]: # "!!!"

Code _shouldn't_ need comments!

[comment]: # "!!!"

```js
Db.getUpsideDownGizmos = function () {
  let gizmos = Db.getGizmos();
  let gizmos = gizmos.filter(function (g) {
    return g.upsideDown;
  });

  return gizmos;
};
```

[comment]: # "!!!"

```js
Gizmos.calculateAveragePrice = function (gizmos) {
  let total = gizmos.reduce(pluckCost, 0);
  let average = total / gizmos.length;

  return average;
};
```

[comment]: # "!!!"

```js
GizmosApi.showAverageCost = function (req, res) {
  let gizmos = Db.getUpsideDownGizmos();
  let average = calculateAveragePrice(gizmos);
  res.result({ average });
};
```

[comment]: # "!!!"

```js
router.get(
  "/api/gizmos/average-cost",
  GizmosApi.showAverageCost
);
```

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

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
- View

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `{{.}}`, `console`, 'res.json()'

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `{{.}}`, `console`, 'res.json()'
- Controller

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `{{.}}`, `console`, 'res.json()'
- Controller
  - **Business Logic** (Testable Stuff)

[comment]: # "!!! data-auto-animate"

A _terrible_ name.

- Model
  - **Storage** (DB)
  - `find`, `getBy`
- View
  - **Presentation** (UI, CLI, API)
  - `{{.}}`, `console`, 'res.json()'
- Controller
  - **Business Logic** (Testable Stuff)
  - `if`, `for`, `throw`

[comment]: # "!!! data-auto-animate"

## MVC is Dead

[comment]: # "!!!"

We don't put Mustaches on Rails anymore!!!

\{\{...\}\}

[comment]: # "!!!"

## Models are Dead

❌ Changing between Databases

[comment]: # "!!!"

## Views are Dead

❌ \{\{...\}\}

[comment]: # "!!!"

## Controllers are Dead

❌ Generic Reusability

[comment]: # "!!!"

## MVC is Dead

[comment]: # "!!!"

> A design pattern is a crutch to use when you have either a
> mediocre team, or they have to work with other mediocre
> teams. - [TodPunk][todpunk]

[todpunk]: https://github.com/todpunk

<!-- -->

## Long Live MVC!

[comment]: # "!!!"
