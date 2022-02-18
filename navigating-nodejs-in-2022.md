[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

### Navigating

# Node.js

#### in 2022

<small>a (very opinionated) beginner's guide</small>

[comment]: # "!!!"

![](https://coolaj86.com/assets/media/coolaj86-2017.jpg)

AJ ONeal <br> [@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

Technophobic Technologist

Dangerous Wrong Thinker

Equal Opportunity Offender

[comment]: # "!!!"

<img title="node.js: official logo" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="60%" />

https://nodejs.org/en/about/resources/

[comment]: # "!!!"

<img title="node.js: an absolute dumpster fire" src="https://i.imgur.com/OlolkHa.png" width=70% />

[comment]: # "!!!"

!["node.js: too many cooks"](https://i.imgur.com/GIKXLBA.png)

[comment]: # "!!!"

!["classical learning curves"](https://i.imgur.com/RT2rUfV.png)

[comment]: # "!!!"

1. Why Node.js?
2. Install
3. Tools
4. Hello World
5. Web Server

[comment]: # "!!!"

When there's _great_ options out there...

[comment]: # "!!!"

<img title="Go: logo" src="https://user-images.githubusercontent.com/727262/40395108-6bcc327a-5e1e-11e8-9f76-3917983b8563.png" width="30%"/><img src="https://raw.githubusercontent.com/keygx/Go-gopher-Vector/fe01b920482f9ab2c6ec7d1928c3c617341e3841/svg/gopher03c.svg" title="Golang Gopher" width="20%" />

<small><a href="https://go.dev/blog/go-brand">https://go.dev/blog/go-brand</a><br><a href="https://go.dev/blog/gopher">https://go.dev/blog/gopher</a></small>

[comment]: # "!!!"

![](https://www.rust-lang.org/logos/rust-logo-256x256-blk.png)
<img title="happy ferris" src="https://rustacean.net/assets/rustacean-flat-happy.png" width="30%"/>

<small><a href="https://github.com/rust-lang/rust/issues/11562">https://github.com/rust-lang/rust/issues/11562</a><br><a href="https://rustacean.net/">https://rustacean.net/</a></small>

[comment]: # "!!!"

# 1. Why Node.js?

[comment]: # "!!!"

> "You're not paid to (ab)use _every_ feature of a language.
>
> You're paid to write _correct_ programs."

~ Douglas Crockford

[comment]: # "!!!"

### It is _possible_

### to be

# good

### at JavaScript

[comment]: # "!!!"

> "Perfection is achieved not when there is nothing more to add,
> but when there is nothing left to take away"

~ Antoine de Saint-Exupery

[comment]: # "!!!"

# less

### is

# more

[comment]: # "!!!"

# Benefits

[comment]: # "!!!"

-   **Single-Threaded Execution** \
    (no data races, like Rust) <br>

[comment]: # "!!!"

-   **Event-Oriented** \
    (high concurrency, like Go) <br>

[comment]: # "!!!"

-   **Modern ALL-the-THINGS** \
    (functional, duck-typed, pure-objects)

[comment]: # "!!!"

It's great for web services.

```js
let server = express();
let app = Router();

server.use("/", app);

Http.createServer(server).listen(3000);
```

<small><a href="https://www.npmjs.com/package/@root/async-router">https://www.npmjs.com/package/@root/async-router</a></small>

[comment]: # "!!!"

And quite usable for command line utilities.

```js
let { $, question, sleep } = await import("zx");

await $`ls -lah`;
```

<small><a href="https://github.com/google/zx">https://github.com/google/zx</a></small>

[comment]: # "!!!"

...

[comment]: # "!!!"

it's there

<small>a lot</small>

[comment]: # "!!!"

# Demerits

[comment]: # "!!!"

-   **Too Much Legacy** \
    (dumpster fire) <br>

[comment]: # "!!!"

-   **No Cohesion** \
    (too many cooks) <br>

[comment]: # "!!!"

...

[comment]: # "!!!"

-   **Really, REALLY Bad Docs** \
    (80/20 gone wrong)

[comment]: # "!!!"

Hold my MtnDew...

<img title="AJ with pink heart sunglasses" src="https://i.imgur.com/HPCzpnY.png" width="50%" />

[comment]: # "!!!"

# 2. Install

[comment]: # "!!!"

<img title="node.js ALL downloads" src="https://i.imgur.com/2Jw7pPc.png" width="80%" />

[comment]: # "!!!"

<img title="node.js BAD downloads" src="https://i.imgur.com/2kQ1Cne.png" width="80%" />

[comment]: # "!!!"

## `sudo`

<img title="sudo make me a sandwich" src="https://imgs.xkcd.com/comics/sandwich.png" width="37%" />

is _NOT_ your friend

[comment]: # "!!!"

<img title="node.js good downloads" src="https://i.imgur.com/AgWKZFu.png" width="80%" />

[comment]: # "!!!"

## `PATH`

is _NOT_ your friend

[comment]: # "!!!"

(and neither is `brew`)

[comment]: # "!!!"

`webi` is your friend

![](https://i.imgur.com/tlLp3NN.png)

[comment]: # "!!!"

<img title="node.js good downloads" src="https://i.imgur.com/AgWKZFu.png" width="80%" />

[comment]: # "!!!"

-   fastest (download)
-   fastest (setup)
-   conflict-free

[comment]: # "!!!"

and easy to remember

```sh
curl "https://webinstall.dev" | bash

webi node@lts
```

[comment]: # "!!!"

`+` cheat sheet

```bash
webi node@latest
```

```js
let Http = require("http");

let app = function (req, res) {
    res.end("Hello, World!");
};

Http.createServer(app).listen(8080, function () {
    console.info("Listening on", this.address());
});
```

[comment]: # "!!!"

# 3. Tools

[comment]: # "!!!"

Your brain is small.

[comment]: # "!!!"

And you suck at code.

[comment]: # "!!!"

(because you are human)

[comment]: # "!!!"

...

[comment]: # "!!!"

> "11 out of 10 dentists agree:
> typing is the leading cause of typos"

~ ADA

[comment]: # "!!!"

# Tools

0. vim-essentials
1. prettier
2. jshint (or eslint)
3. jsdoc
4. tsc

[comment]: # "!!!"

## vim-essentials

```bash
webi vim-essenntials
```

<https://webinstall.dev/vim-essentials>

[comment]: # "!!!"

## vim

learn how to use the computer already

[comment]: # "!!!"

(are you back-end or not?)

[comment]: # "!!!"

## VS Code

an acceptable alternative

[comment]: # "!!!"

### Spot Check

How beginner are we?

[comment]: # "!!!"

-   functions
-   events
-   primitives
-   variables
-   Promises
-   RegExp

[comment]: # "!!!"

-   require
-   process
-   module scope
-   Fs
-   Buffer

[comment]: # "!!!"

## Prettier

<https://prettier.io/docs/en/rationale.html>

[comment]: # "!!!"

0 BS

[comment]: # "!!!"

## Prettier

```bash
webi prettier
```

```bash
npm install -g prettier
```

[comment]: # "!!!"

## Prettier

`package.json`:

```bash
{
    "scripts": {
        "prettier": "npx prettier@2.x -w '**/*.{md,js,html,css}'"
    }
}
```

```bash
npm run prettier
```

[comment]: # "!!!"

## jshint

<https://jshint.com/about/>

[comment]: # "!!!"

> "jslint has taught me more than I ever taught it"

~ Douglas Crockford

[comment]: # "!!!"

## jshint

```bash
webi jshint
```

```bash
npm install -g jshint
```

[comment]: # "!!!"

## jshint

`package.json`:

```json
{
    "scripts": {
        "lint": "npx jshint@2.x -c ./.jshintrc *.js */*.js"
    }
}
```

```bash
npm run lint
```

[comment]: # "!!!"

## vs eslint

also good, but not as simple

[comment]: # "!!!"

## jsdoc

```bash
npm install -g jsdoc
```

(for type hinting)

[comment]: # "!!!"

## jsdoc

```js
/**
 * Starts the important thing with the stuff
 * @namespace Service
 * @param {Object} opts - all of the options
 * @param {String} opts.units - either 'meters' or 'feet'
 * @returns {Promise<Number>} - the process id
 */
Service.start = async function (opts) {
    // ...
};
```

[comment]: # "!!!"

## jsdoc

`package.json`:

```json
{
    "scripts": {
        "doc": "npx jsdoc@3.x --configure ./jsdoc.conf.json --destination ./docs --package ./package.json --readme ./README.md --access all --private --recurse ./index.js ./lib/"
    }
}
```

```bash
npm run doc
```

[comment]: # "!!!"

## tsc

```bash
npm install -g typescript
```

(for type hinting)

[comment]: # "!!!"

```js
let answer = "Hello, World!";

answer = 42;
// ❌ number is not a string
```

[comment]: # "!!!"

```js
let Widget = require("widget");

Widget.getGizmo();
// ❌ did you mean getGadget()?
```

[comment]: # "!!!"

<img title="type hinting in javascript" src="https://user-images.githubusercontent.com/122831/130662033-d730d789-93b3-44b3-87fd-360b1168a634.jpg" width="80%" />

<small><a href="https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter">https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter</a></small>

[comment]: # "!!!"

# et cetera

<https://webinstall.dev/>

[comment]: # "!!!"

## Why not Co-Pilot?

<img title="octo-co-pilot" src="https://i.imgur.com/Gm8JRzH.png" width="60%" />

[comment]: # "!!!"

# 🚽

[comment]: # "!!!"

<small>(you'll write enough bad code all on your own)</small>

[comment]: # "!!!"

## 4. Hello World

```js
console.info("Hello, World!");
```

[comment]: # "!!!"

<small>(console.log is for burning)</small>

[comment]: # "!!!"

A better hello world...

-   a useful function
-   a unit test
-   an export
-   an import
-   a package

[comment]: # "!!!"

```js
function greet(person) {
    return `Hello, ${person.name}!`;
}
```

❌ not useful

[comment]: # "!!!"

`messenger.js`

```js
"use strict";

let Messenger = module.exports;
```

[comment]: # "!!!"

`module`

`module.exports`

[comment]: # "!!!"

(🤯 don't overwrite `module.exports`!)

[comment]: # "!!!"

```js
Messenger.parseEmails = function (text) {
    let emailRe = /[\w\.+-]+@[a-z][0-9a-z-\.]+[a-z]/gi;

    let emails = {};
    for (;;) {
        let m = emailRe.exec(text);
        if (!m) {
            break;
        }
        let email = m[0].toLowerCase();
        emails[email] = true;
    }

    return Object.keys(emails);
};
```

just trust me...

[comment]: # "!!!"

```js
regexp.exec;
```

```js
for (;;)
```

```js
Object.keys;
```

[comment]: # "!!!"

Some sample input...

```txt
Hello, my email is coolaj86@gmail.com.
I like long messages from walks@beach.co
coolaj86+node.js@gmail.com is an alias of mine.
```

[comment]: # "!!!"

A little self-test...

```js
if (require.main === module) {
    let Assert = require("assert");

    let text = `
        Hello, my email is coolaj86@gmail.com.
        I like long messages from walks@beach.co
    `;
    let expected =
        "coolaj86@gmail.com,walks@beach.co,coolaj86+node.js@gmail.com";

    let emails = Messenger.parseEmails(text).join(",");
    Assert.equal(expected, emails);

    console.info("Pass"); // ✅ "Pass"
}
```

[comment]: # "!!!"

```js
require;
```

```js
require.main;
```

```js
Assert;
```

[comment]: # "!!!"

how to use in multiple files?

[comment]: # "!!!"

`bin/parse-emails.js`

```js
#!/usr/bin/env node

"use strict";

let Messenger = require("./messenger.js");
let text = process.argv.slice(2).join(" ");

let emails = Messenger.parseEmails(text);

emails.forEach(function (email) {
    console.info(email);
});
```

```bash
chmod a+x bin/parse-emails.js
ln -s parse-emails.js bin/parse-emails
```

[comment]: # "!!!"

```js
#!/usr/bin/env node
```

```js
chmod;
```

```js
ln - s;
```

[comment]: # "!!!"

How to share with others?

[comment]: # "!!!"

## npm

<img title="getting started with npm" src="https://i.imgur.com/ZTwFsAL.png" width="80%" />

<small><a href="https://i.imgur.com/ZTwFsAL.png">https://gist.github.com/coolaj86/1318304</a></small>

[comment]: # "!!!"

```bash
npm config set init.author.email "you@example.com"
```

```bash
npm adduser
```

```bash
npm publish --access=public @YOUR_NAME/messenger
```

[comment]: # "!!!"

## 5. SaaS-ify

[comment]: # "!!!"

`server.js`

```js
let Http = require("http");

let httpServer = require("http").createServer(app);

httpServer.listen(3000, function () {
    console.info("Listening on", httpServer.address());
});
```

[comment]: # "!!!"

```js
function app(req, res) {
    let text = "";
    req.on("readable", function () {
        for (;;) {
            let chunk = req.read()?.toString("utf8");
            if (!chunk) {
                break;
            }
            text += chunk;
        }
    });
    req.on("end", function () {
        let emails = Messenger.parseEmails(text).join(",");
        res.end(emails);
    });
});
```

[comment]: # "!!!"

```js
Http.createServer(app);
```

```js
req.on("readable");
```

[comment]: # "!!!"

```bash
npm run start
```

[comment]: # "!!!"

# Bonus Round

[comment]: # "!!!"

## telebit

<img title="telebit explainer" src="https://i.imgur.com/nCx70uV.png" width="80%" />

[comment]: # "!!!"

## caddy + duckdns

```caddy
example.duckdns.org {
    tls {
        dns duckdns xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx
    }

    log {
        output stdout
        format console
    }

    reverse_proxy /api/* localhost:3000

    root * /srv/example.com/public/
    file_server
}
```

[comment]: # "!!!"

> "if you use all of your intelligence to build the most complex thing you can, given there's a defect in there, by definition it's more complex than you can understand"

~ [Darryl Spencer](https://www.youtube.com/watch?v=OYMk4Zws-jE&t=3732s)
~ [Darryl Spencer](https://www.youtube.com/watch?v=OYMk4Zws-jE&t=3732s)
