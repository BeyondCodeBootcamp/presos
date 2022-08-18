[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Express.js ProTips™

(a.k.a. The Basics)

[comment]: # "!!! data-auto-animate"

### Useful Links

<table>

<tr><td>
<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/">BeyondCodeBootcamp.GitHub.io/</a></small>
</td></tr>

<tr><td>
<small>Video:
<a href="https://www.youtube.com/watch?v=ID_GOES_HERE">youtu.be/ID_GOES_HERE</a></small>
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

[comment]: # "!!!"

JavaScript Jabber

Utah Node.js

Utah Rust

[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

<img src="https://i.imgur.com/I2xes3W.png" width="50%"><br /><span style="font-size: 1.5em">ProTips™</span>

<br />

(a.k.a. Master the Basics)

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if you find this useful, or entertaining)</small>

[comment]: # "!!! data-auto-animate"

My Top 12 Tips

<table>
<tr>
<td><small><ol>
 <li>Use <code>http</code></li>
 <li><code>npm run start</code></li>
 <li>Use <code>dotenv</code></li>
 <li>Use <code>express.Router</code></li>
 <li>Use express' Error Handler</li>
 <li>Use <code>await</code></li>
</ol></small></td>
<td><small><ol start="7">
 <li>Use <code>.json()</code></li>
 <li>The Power of Prefixes</li>
 <li>Top-level Routing</li>
 <li><code>app.use()</code> vs <code>app.get()</code></li>
 <li><code>jsdoc</code> / <code>tsc</code></li>
 <li><code>Caddyfile</code></li>
</ol></small></td>
</tr>

<tr>
<td><small><ul><li>basetag</li></ul></small>
</td>
<td>
<small><ul><li>Helpful resources</li></ul><small>
</td>
</tr>

</table>

[comment]: # "!!!"

### 0. `"use strict";`

[comment]: # "!!!"

> "Converting mistakes into errors"

<small><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode" target="_blank">MDN:
Strict Mode: Changes</a></small>

[comment]: # "!!!"

```diff [1]
+ "use strict";

  let express = require('express');

  // ...
```

[comment]: # "!!!"

Or automate that...

```sh
npm install --location=global be-strict
```

```sh
be-strict
```

[comment]: # "!!!"

Also:

- `prettier`
- `jshint`
- `tsc`

[comment]: # "!!!"

### 1. Use Node's `http`

[comment]: # "!!!"

<img
  alt="express.js Readme - don't do app.listen()"
  src="https://i.imgur.com/dnKJu6c.png"
  width="90%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />

<small><a href="https://github.com/expressjs/express">github.com/expressjs/express</a></small>

[comment]: # "!!! data-auto-animate"

# ❌

[comment]: # "!!! data-auto-animate"

# ❌

- breaks websockets

[comment]: # "!!! data-auto-animate"

# ❌

- breaks websockets
- useless abstraction

[comment]: # "!!! data-auto-animate"

# ❌

- breaks websockets
- useless abstraction
- confuses the reader

[comment]: # "!!! data-auto-animate"

# ✅

```js [1]
let http = require("http");

// ...

let httpServer = http.createServer(app);
httpServer.listen(3000);
```

[comment]: # "!!! data-auto-animate"

# ✅

```js [5]
let http = require("http");

// ...

let httpServer = http.createServer(app);
httpServer.listen(3000);
```

[comment]: # "!!! data-auto-animate"

# ✅

```js [6]
let http = require("http");

// ...

let httpServer = http.createServer(app);
httpServer.listen(3000);
```

[comment]: # "!!! data-auto-animate"

# ⚠️

```js [6]
require("http").createServer(app).listen(3000);
```

[comment]: # "!!! data-auto-animate"

### 2. `npm run start`

[comment]: # "!!!"

Name your "main" file `server.js`

```diff [2-3]
  my-project/
- ├── index.js
+ ├── server.js
  ├── lib/
  ├── package.json
  └── package-lock.json
```

[comment]: # "!!!"

```sh
npm run start
```

<small>(a nice common convention)</small>

[comment]: # "!!!"

⚠️ Fix node's `PATH`

```sh
npm config set scripts-prepend-node-path true
```

[comment]: # "!!!"

⚠️ Use `--` to pass flags and options

```sh
npm run start -- --port=3000
```

[comment]: # "!!!"

### 3. Don't Commit Config

(especially not secrets!)

[comment]: # "!!!"

<img
  alt="12 Factor App: Config"
  src="https://i.imgur.com/uJ2NW4O.png"
  width="90%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />
<small><a href="https://12factor.net/config" target="_blank">12factor.net/config</a></small>

[comment]: # "!!! data-auto-animate"

- ❌ security vulnerability &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-size: 0;">.</span>

[comment]: # "!!! data-auto-animate"

- ❌ security vulnerability &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-size: 0;">.</span>
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (even in private repos)

[comment]: # "!!! data-auto-animate"

- ❌ security vulnerability &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-size: 0;">.</span>
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (even in private repos)
- ❌ more difficult to share

[comment]: # "!!! data-auto-animate"

- ❌ security vulnerability &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <span style="font-size: 0;">.</span>
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (even in private repos)
- ❌ more difficult to share
- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (also more difficult to
  scale)

[comment]: # "!!!  data-auto-animate"

> <small>"Apps sometimes store config as constants in the
> code.<br /> This is a violation of twelve-factor" -
> [12factor.net](https://12factor.net)</small>

```js [6]
let http = require("http");

// ...

let httpServer = http.createServer(app);
httpServer.listen(3000);
```

[comment]: # "!!!"

Use `process.env` for config

```diff [1,8-9]
+ let port = process.env.PORT;

  let http = require("http");

  // ...

  let httpServer = http.createServer(app);
- httpServer.listen(3000);
+ httpServer.listen(port);
```

[comment]: # "!!!"

How to modify the ENVIRONMENT?

[comment]: # "!!!"

1. Create a `.env` with your config

```sh [1]
PORT='3000'
```

[comment]: # "!!!"

And secrets too!

```sh [2]
PORT='3000'
SECRET_API_KEY='abc123'
```

[comment]: # "!!!"

1. Update your `.gitignore`

```txt
.env
.env.*
```

<small>(many `.gitignore` templates include this)</small>

[comment]: # "!!!"

3. Update your code

```diff
+ let port = process.env.PORT;

// ...

- httpServer.listen(3000);
+ httpServer.listen(port);
```

[comment]: # "!!!"

#### 🎁 Bonus: `'json spaces'`

```js
let env = process.env.NODE_ENV;

if ("production" !== env) {
  server.set("json spaces", 2);
}
```

[comment]: # "!!!"

### ⚠️

Avoid global-ifying

<small><ul>

<li>limit <code>process.env</code> access to 1 or
2 files</li>
<li>favor <code>.create(opts)</code> or <code>.init(opts)</code> over <code>process.env</code></li></ul></small>

[comment]: # "!!!"

### `dotenv` vs `dotenv`

[comment]: # "!!!"

### vs "vault"

[comment]: # "!!!"

4a. Install the `dotenv` command

```sh
curl https://webinstall.dev/dotenv | bash
```

<small><a href="https://webinstall.dev/dotenv" target="_blank">webinstall.dev/dotenv</a></small>

[comment]: # "!!!"

5a. Run _whatever_ with `dotenv`

```diff
-        npm run start
+ dotenv npm run start
```

[comment]: # "!!!"

- ✅ follows the spec
- 🖥 allows `export` prefix
- 📝 allows multi-line strings

[comment]: # "!!!"

```sh
export PORT='3000'
export KEY='-- KEY START --
abc123abc123abc123abc123abc123
abc123abc123abc123abc123abc123
-- KEY END --'
```

[comment]: # "!!!"

4b. Install `dotenv` from _npm_

```sh
npm install --save dotenv
```

[comment]: # "!!!"

5b. Update top-level files to use it

```js [3]
"use strict";

require("dotenv").config({ path: ".env" });

// ...
```

[comment]: # "!!!"

`process.env` won't be overwritten

(first `.env` to load `PORT` wins)

[comment]: # "!!!"

(cloud services have their own thing)

[comment]: # "!!!"

### 4. Don't use `express()`

[comment]: # "!!!"

<img
  alt="express.js"
  src="https://i.imgur.com/CoZZXg8.png"
  width="90%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />

[comment]: # "!!!"

## ❌

`express()` is **NOT** _composable_

<small>(not reusable)</small>

[comment]: # "!!!"

<img
  alt="StackOverflow: difference between express.Router and app"
  src="https://i.imgur.com/H6cM25b.png"
  width="90%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />

<small><a href="https://stackoverflow.com/a/67168894" target="_blank">stackoverflow.com/a/67168894</a></small>

[comment]: # "!!!"

<img
  alt="express.js response about bad example"
  src="https://i.imgur.com/gCzSOPF.png"
  width="90%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />

<small><a href="https://github.com/expressjs/express/pull/4971" target="_blank">Express.js:
PR 4971</a></small>

[comment]: # "!!!"

```diff [1-12]
  let express = require("express");

- let app = express();
+ let app = express.Router();
+ let server = express();

+ server.use(app);

  // ...

- let httpServer = http.createServer(app);
+ let httpServer = http.createServer(server);
```

[comment]: # "!!! data-auto-animate"

```diff [3,11]
  let express = require("express");

- let app = express();
+ let app = express.Router();
+ let server = express();

+ server.use(app);

  // ...

- let httpServer = http.createServer(app);
+ let httpServer = http.createServer(server);
```

[comment]: # "!!! data-auto-animate"

```diff [4-5]
  let express = require("express");

- let app = express();
+ let app = express.Router();
+ let server = express();

+ server.use(app);

  // ...

- let httpServer = http.createServer(app);
+ let httpServer = http.createServer(server);
```

[comment]: # "!!! data-auto-animate"

```diff [7]
  let express = require("express");

- let app = express();
+ let app = express.Router();
+ let server = express();

+ server.use(app);

  // ...

- let httpServer = http.createServer(app);
+ let httpServer = http.createServer(server);
```

[comment]: # "!!! data-auto-animate"

```diff [12]
  let express = require("express");

- let app = express();
+ let app = express.Router();
+ let server = express();

+ server.use(app);

  // ...

- let httpServer = http.createServer(app);
+ let httpServer = http.createServer(server);
```

[comment]: # "!!! data-auto-animate"

## 🎁 Bonus: Composition

```js [1]
server.use(app);
app.use("/", subapp1);
app.use("/foo", subapp2);
app.use("/bar", [bazMw, quxMw]);
```

[comment]: # "!!! data-auto-animate"

## 🎁 Bonus: Composition

```js [2]
server.use(app);
app.use("/", subapp1);
app.use("/foo", subapp2);
app.use("/bar", [bazMw, quxMw]);
```

[comment]: # "!!! data-auto-animate"

## 🎁 Bonus: Composition

```js [3]
server.use(app);
app.use("/", subapp1);
app.use("/foo", subapp2);
app.use("/bar", [bazMw, quxMw]);
```

[comment]: # "!!! data-auto-animate"

## 🎁 Bonus: Composition

```js [4]
server.use(app);
app.use("/", subapp1);
app.use("/foo", subapp2);
app.use("/bar", [bazMw, quxMw]);
```

[comment]: # "!!! data-auto-animate"

### 5. Use Error Handlers

[comment]: # "!!!"

> "Let errors bubble until they burst \
> (correct, or classify, but do not catch)."

[comment]: # "!!!"

❌

```js [2,4-5,7]
app.get("/", function (req, res) {
  try {
    // ...
  } catch (e) {
    res.json({ message: "had a bad day..." });
    return;
  }

  // ...
});
```

[comment]: # "!!!"

- messy error handling
- all over the place

<small>(error handling is best centralized)</small>

[comment]: # "!!! data-auto-animate"

✅

```js [2,5-99]
app.get("/", function (req, res) {
  // ...
});

app.use("/", function (err, req, res, next) {
  // ...
  res.json({ message: "had a bad day..." });
});
```

[comment]: # "!!! data-auto-animate"

✅

```js [1,5]
app.get("/api/foo/bar", function (req, res) {
  // ...
});

app.use("/api/foo/bar", function (err, req, res, next) {
  // ...
  res.json({ message: "had a bad day..." });
});
```

[comment]: # "!!! data-auto-animate"

✅

```js [1,7-99]
app.get("/", getStuff, handleErrors);

function getStuff(req, res) {
  // ...
}

function handleErrors(err, req, res, next) {
  // ...
  res.json({ message: "had a bad day..." });
}
```

[comment]: # "!!! data-auto-animate"

✅

```js [3-6]
app.get("/", function (req, res) {
  // ...
  if (badDay) {
    let err = new Error("had a bad day...");
    throw err;
  }
});
```

[comment]: # "!!! data-auto-animate"

✅

```js [5]
app.get("/", function (req, res) {
  // ...
  if (badDay) {
    let err = new Error("had a bad day...");
    throw err;
  }
});
```

[comment]: # "!!! data-auto-animate"

⚠️

```js [5-6]
app.get("/", function (req, res, next) {
  // ...
  if (badDay) {
    let err = new Error("had a bad day...");
    next(err);
    return;
  }
});
```

[comment]: # "!!! data-auto-animate"

> "Let errors bubble until they burst \
> (correct, or classify, but do not catch)."

[comment]: # "!!! data-auto-animate"

> "Let errors bubble until they burst \
> (correct, or classify, but do not catch)."

### SIDENOTE

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

- Signup / Signin

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

- Signup / Signin
- Facebook / Google Sign In

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

- Signup / Signin
- Facebook / Google Sign In
- Username / Password

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

❌ User Already Exists!

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

❌ User Already Exists!

SRSLY!?!?!?

[comment]: # "!!! data-auto-animate"

### SIDENOTE

Imagine some bad signup UI...

```js
// ...

if ("USER_EXISTS" !== err.code) {
  throw err;
}
err = await User.login(req);
```

[comment]: # "!!! data-auto-animate"

### 6. Use `await` _correctly_

(and `await/catch`)

[comment]: # "!!! data-auto-animate"

❌ Don't use callbacks

[comment]: # "!!! data-auto-animate"

❌ Don't use callbacks

```js [2-6,9]
app.get("/api/auth", function (req, res, next) {
  User.loginWithCreds(req, function (err, user) {
    if (err) {
      next(err);
      return;
    }

    // ...
  });
});
```

[comment]: # "!!! data-auto-animate"

❌ Don't ignore errors

[comment]: # "!!! data-auto-animate"

❌ Don't ignore errors

```js [2]
app.get("/api/auth", async function (req, res) {
  let user = await User.loginWithCreds(req);
});
```

[comment]: # "!!! data-auto-animate"

❌ Don't ignore errors

```js [2]
app.get("/api/auth", async function (req, res) {
  let user = await User.loginWithCreds(req);
});
```

<small>(express v5 will _never_ happen)</small>

[comment]: # "!!! data-auto-animate"

❌ Don't `try` on `async`

[comment]: # "!!! data-auto-animate"

❌ Don't `try` on `async`

```js [2,4-6]
app.get("/api/auth", async function (req, res, next) {
  try {
    let user = await User.loginWithCreds(req);
  } catch (e) {
    next(e);
  }
});
```

[comment]: # "!!! data-auto-animate"

❌ Don't crazy catch

```js [2-5,7-10]
app.get("/api/auth", async function (req, res, next) {
  let user = await User.loginWithCreds(req).catch(next);
  if (!user) {
    return;
  }

  let stuff = await doMoreStuff().catch(next);
  if (!stuff) {
    return;
  }

  // ...
});
```

[comment]: # "!!! data-auto-animate"

✅ Poor man's express v5 upgrade

```js [2-3,7-8]
app.get("/api/auth", function (req, res, next) {
  Promise.resolve()
    .then(async function () {
      let user = await User.loginWithCreds(req);
      let stuff = await doStuff();
      let moreStuff = await doMoreStuff();
    })
    .catch(next);
});
```

[comment]: # "!!! data-auto-animate"

✅ Poor man's express v5 upgrade

```js [4-6]
app.get("/api/auth", function (req, res, next) {
  Promise.resolve()
    .then(async function () {
      let user = await User.loginWithCreds(req);
      let stuff = await doStuff();
      let moreStuff = await doMoreStuff();
    })
    .catch(next);
});
```

[comment]: # "!!! data-auto-animate"

✅
[`@root/async-router`](https://github.com/therootcompany/async-router)

[comment]: # "!!! data-auto-animate"

✅
[`@root/async-router`](https://github.com/therootcompany/async-router)

```sh
npm install --save @root/async-router
```

[comment]: # "!!! data-auto-animate"

✅
[`@root/async-router`](https://github.com/therootcompany/async-router)

```sh
npm install --save @root/async-router
```

```diff [1-2,7]
- app = express.Router();
+ app = require('@root/async-router').Router();

  // ...

  app.get("/api/auth", async function (req, res) {
      let user = await User.loginWithCreds(req);
  });
```

[comment]: # "!!! data-auto-animate"

### 7. Use `.json()`

[comment]: # "!!!"

## ❌

```js [2]
app.get("/api/hello", function (req, res) {
  res.send({ message: "Hello!" });
});
```

[comment]: # "!!!"

## ✅

```js [2]
app.get("/api/hello", function (req, res) {
  res.json({ message: "Hello!" });
});
```

[comment]: # "!!!"

- unambiguous
- communicates intent

### 8. The Power of Prefixes

[comment]: # "!!! data-auto-animate"

`/api/`

```js [1]
app.use("/api/", function (req, res) {
  // ...
});
```

[comment]: # "!!! data-auto-animate"

`/api/`

- cache control
- cookie & token control
- CDN & routing

<small>(+ `api.` subdomain for max effect)</small>

[comment]: # "!!! data-auto-animate"

> Gatekeepers at the gate, \
> Doorkeepers at the doors

[comment]: # "!!! data-auto-animate"

- `/api/public`

[comment]: # "!!! data-auto-animate"

- `/api/public`
- `/api/user`

[comment]: # "!!! data-auto-animate"

- `/api/public`
- `/api/user`
- `/api/sudo`

[comment]: # "!!! data-auto-animate"

> <span style="font-size: 0.7em;">"Use enough middleware so
> that \
> by the time the request gets to your handler, \
> all your preconditions are met."</span>
>
> <small>&dash; Ethan Garofolo, author of _Practical
> Microservices_</small>

[comment]: # "!!! data-auto-animate"

```js [1]
app.use("/api/user", mustUser);
app.get("/api/user/friends/:friend_id", mustHaveFriend);
```

[comment]: # "!!! data-auto-animate"

```js [2]
app.use("/api/user", mustUser);
app.get("/api/user/friends/:friend_id", mustHaveFriend);
```

[comment]: # "!!! data-auto-animate"

```js [1]
app.use("/api/assets", maybeUser, maybeBot);
app.get(
  "/api/assets/friend-pics/:friend_id",
  maybePicPublic,
  mustHaveFriend,
  mustViewPic,
  getUserPic,
);
```

[comment]: # "!!! data-auto-animate"

```js [2-10]
app.use("/api/assets", maybeUser, maybeBot);
app.get(
  "/api/assets/friend-pics/:friend_id",
  maybePicPublic,
  mustHaveFriend,
  mustViewPic,
  getUserPic,
);
```

[comment]: # "!!! data-auto-animate"

```js [1]
app.use("/api/sudo", ensureAuth, ensureSuperUser);
app.post(
  "/api/sudo/users/:user_id/drivers-license",
  validateDriversLicenseData,
  updateDriversLicense,
);
```

[comment]: # "!!! data-auto-animate"

```js [2-99]
app.use("/api/sudo", ensureAuth, ensureSuperUser);
app.post(
  "/api/sudo/users/:user_id/drivers-license",
  validateDriversLicenseData,
  updateDriversLicense,
);
```

[comment]: # "!!! data-auto-animate"

Reduce the surface area of gating errors

[comment]: # "!!!"

### 9. Top-Level Routing

[comment]: # "!!!"

<img
  alt="Mat Ryer - How I write HTTP services"
  src="https://i.imgur.com/HSlBoqo.png"
  width="100%"
  style="border: 1px solid grey; box-shadow: 3px 5px 1px 1px rgba(0,0,0,0.5);"
  />

<small><a href="https://youtu.be/rWBSMsLG8po?t=850" target="_blank">youtu.be/rWBSMsLG8po?t=850</a></small>

[comment]: # "!!! data-auto-animate"

```js [1,5]
let Profile = require("./profile/");
app.get("/api/user/me", Profile.get);
app.post("/api/user/me", Profile.update);

let Friends = require("./friends/");
app.get("/api/user/friends", Friends.list);
app.post("/api/user/friends", Friends.add);

// ...
```

[comment]: # "!!! data-auto-animate"

```js [2-3,6-7]
let Profile = require("./profile/");
app.get("/api/user/me", Profile.get);
app.post("/api/user/me", Profile.update);

let Friends = require("./friends/");
app.get("/api/user/friends", Friends.list);
app.post("/api/user/friends", Friends.add);

// ...
```

[comment]: # "!!! data-auto-animate"

## 10. `.get()` vs `.use()`

[comment]: # "!!!"

`.use('/', mw)`

- manages state
- for middleware
- for routers or _"mini apps"_
- _can_ respond (e.g. auth errors)

[comment]: # "!!!"

`.get('/', handler)`

- _some_ state resets
- _should_ respond

[comment]: # "!!!"

🚨 Danger! 🤖

```diff
- app.get(express.static('public'))
+ app.use(express.static('public'))
```

[comment]: # "!!!"

## 11. `JSDoc` & `tsc`

[comment]: # "!!!"

[JS with Types: JSDoc tsc Starter](https://github.com/BeyondCodeBootcamp/js-with-types-jsdoc-tsc-starter)

[comment]: # "!!!"

### `@types/express`

```js
npm install --save-dev @types/express
```

[comment]: # "!!!"

Middleware

```js [1-2]
/** @type {import('express').Handler} */
function handler(req, res, next) {
  // ...
}
```

[comment]: # "!!!"

Handlers

```js [1-2]
/** @type {import('express').Handler} */
function handler(req, res) {
  // ...
}
```

[comment]: # "!!!"

Error Handlers

```js [1-2]
/** @type {import('express').ErrorRequestHandler} */
function handler(err, req, res, next) {
  // ...
}
```

[comment]: # "!!!"

Special modifications

```js [3]
/** @type {import('express').ErrorRequestHandler} */
function mustUser(err, req, res, next) {
  if (!req.user) {
    throw new Error("must be logged in");
  }
  next();
}
```

[comment]: # "!!!"

#### `./types.js`

```js
/**
 * @typedef {MyUser}
 * @property {String} name
 */
```

[comment]: # "!!!"

#### `./typings/express/index.d.ts`

```js
declare namespace Express {
  export interface Request {
    user: MyUser;
  }
}
```

[comment]: # "!!!"

#### `./jsconfig.json`

```diff
- "typeRoots": [],
+ "typeRoots": [
+   "./typings",
+   "node_modules/@types"
+  ],
```

```diff
- "include": [ "src/**/*.js" ],
+ "include": [ "src/**/*.js", "./types.js" ],
```

[comment]: # "!!!"

## 12. `Caddyfile`

[comment]: # "!!! data-auto-animate"

```caddy [1,9]
https://localhost:3443 {
    handle /api/* {
        reverse_proxy localhost:3000
    }
    handle /* {
        root * ./public/
        file_server
    }
}
```

[comment]: # "!!! data-auto-animate"

```caddy [2-4]
https://localhost:3443 {
    handle /api/* {
        reverse_proxy localhost:3000
    }
    handle /* {
        root * ./public/
        file_server
    }
}
```

[comment]: # "!!! data-auto-animate"

```caddy [5-8]
https://localhost:3443 {
    handle /api/* {
        reverse_proxy localhost:3000
    }
    handle /* {
        root * ./public/
        file_server
    }
}
```

[comment]: # "!!! data-auto-animate"

## Honorable Mention: `basetag`

[comment]: # "!!!"

```diff
- let Person = require("../../../../person.js");
+ let Person = require("$/person.js");
```

[comment]: # "!!!"

```sh
npm install --save basetag
npx basetag rebase
```

[comment]: # "!!!"

```sh
npm set-script postinstall "npx basetag link"
npm set-script basetag "npx basetag link"
npm run basetag
```

[comment]: # "!!!"

## ⚠️

`basetag` solves a problem \
that you _shouldn't_ have...

[comment]: # "!!!"

## Helpful Resources

[comment]: # "!!!"

- JWTs: https://therootcompany.com/blog/how-to-parse-a-jwt/
- Cookies:
  https://beyondcode.duckdns.org/articles/express-cookies-cheatsheet/
- LibAuth: https://github.com/therootcompany/libauth.js

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Q&A

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
