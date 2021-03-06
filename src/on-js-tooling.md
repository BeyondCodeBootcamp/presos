[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Node.js Tooling

[comment]: # "!!!"

## Part 3: On Tooling

[comment]: # "!!!"

### 0. Enums

[comment]: # "!!!"

Enums are for tooling.

```js
var People = modules.exports;

People.types = {
    GOOD: "GOOD",
    BAD: "BAD",
};
```

<small>(auto-complete, yada yada)</small>

[comment]: # "!!!"

No meta programming!

```js
// ❌
["GOOD", "BAD"].forEach(function (val) {
    People.types[val] = val;
});
```

<br>

<small>... because `tsc` (the TS hinter) doesn't know the first thing about JS... </small>

🤦‍♀️

[comment]: # "!!!"

[Navigating Node.js in 2022: Tools](https://beyondcodebootcamp.github.io/presos/navigating-nodejs-in-2022/#/42)

1. vim-essentials
2. Prettier
3. JSHint
4. JSDoc

[comment]: # "!!!"

### 5. Basetag

[comment]: # "!!!"

😓 Turn this:

```js
let balls = require("../../../../baseball/balls"); // ❌
```

🤯 Into this:

```js
let balls = require("$/baseball/balls"); // ✅
```

[comment]: # "!!!"

(again, top-level only)

[comment]: # "!!!"

### 6. Mono Repos

[comment]: # "!!!"

Why?

[comment]: # "!!!"

Don't break things that work!

-   `git tag`
-   `npm version`
-   `npm publish`
-   `package.json.homepage`
-   `package.json.version`

[comment]: # "!!!"

```bash
git submodule add <repo> <path>
```

```bash
git submodule add git@github.com:owner/repo.git ./repo
```

[comment]: # "!!!"

The Private Packages Cheat Sheet

https://coolaj86.com/articles/vanilla-devops-git-credentials-cheatsheet/

[comment]: # "!!!"

(local dev)

```js
export TOKEN=xxxxxxxx
git config --global url."https://api:$TOKEN@github.com/".insteadOf "https://github.com/"
git config --global url."https://ssh:$TOKEN@github.com/".insteadOf "ssh://git@github.com/"
git config --global url."https://git:$TOKEN@github.com/".insteadOf "git@github.com:"
```

https://github.com/settings/tokens

[comment]: # "!!!"

DevOps, see "The Silver Bullet":

https://coolaj86.com/articles/vanilla-devops-git-credentials-cheatsheet/

[comment]: # "!!!"

### 7. Testing

[comment]: # "!!!"

<img height="600px" src="https://i.imgur.com/v7vxWfU.png" />

[comment]: # "!!!"

-   baretest [github.com/volument/baretest](https://github.com/volument/baretest)
-   zora [github.com/lorenzofox3/zora/tree/master/zora](https://github.com/lorenzofox3/zora/tree/master/zora)

<small>(0 baggage)</small>

[comment]: # "!!!"

## Porty Time?

💩 🧃

[comment]: # "!!!"
