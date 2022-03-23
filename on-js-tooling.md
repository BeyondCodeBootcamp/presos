[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Part 3: On Tooling

[comment]: # "!!!"

### 0. Enums

[comment]: # "!!!"

```js
var People = modules.exports;

People.types = {
    GOOD: "GOOD",
    BAD: "BAD",
};
```

[comment]: # "!!!"

[Navigating Node.js in 2022: Tools](https://beyondcodebootcamp.github.io/presos/navigating-nodejs-in-2022/#/42)

1. Prettier
2. JSLint
3. JSDoc

[comment]: # "!!!"

### 4. Basetag

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

### 5. Mono Repos

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

### 6. Testing

[comment]: # "!!!"

<img src="https://i.imgur.com/v7vxWfU.png" />

[comment]: # "!!!"

-   baretest [github.com/volument/baretest](https://github.com/volument/baretest)
-   zora [github.com/lorenzofox3/zora/tree/master/zora](https://github.com/lorenzofox3/zora/tree/master/zora)

<small>(0 baggage)</small>

[comment]: # "!!!"

## Porty Time?

💩 🧃

[comment]: # "!!!"
