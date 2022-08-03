# [Beyond Code Presos](https://github.com/BeyondCodeBootcamp/presos/)

- Index: <https://beyondcodebootcamp.github.io/presos/>
- Sources: <https://github.com/BeyondCodeBootcamp/presos/>
- Example:
  <https://beyondcodebootcamp.github.io/presos/example/>

Presentation Slides + Videos:

  <!-- [2022-07-26 15:59:21 -0600] Shadowing -->

- ⚡️ [Variable Shadowing](./variable-shadowing/)
  <!-- [2022-07-20 04:41:53 -0600] MVC is Dead -->
- 📦 [MVC is Dead](./long-live-mvc/)
  <!-- [2022-07-14 19:46:54 -0600] JS Promises -->
- 🦴
  [The Anatomy of Promises - Utah JS - July 14th, 2022](./js-promises/)
  <!-- [2022-04-21 14:32:00 -0600] Go Proverbs -->
- 🧙‍♂️
  [Go Proverbs for JavaScript - Utah Node.js - May 4th, 2022](./go-proverbs-for-js/)
  <!-- [2022-03-23 01:38:54 -0600] AJ's BYU 2022 Lecture Series -->
- [Software Engineering's Greatest Hits - BYU - March 23rd, 2022](https://beyondcodebootcamp.github.io/presos/byu-2022/)
    <!-- [2022-03-23 01:03:02 -0600] Software Engineering's <br>Greatest Hits -->
  - [On Software Engineering](https://beyondcodebootcamp.github.io/presos/on-software-engineering/)
    <!-- [2022-03-23 05:18:18 -0600] On Node.js -->
  - [On Node Js](https://beyondcodebootcamp.github.io/presos/on-node-js/)
    <!-- [2022-03-23 05:18:18 -0600] Node.js Tooling -->
  - [On Js Tooling](https://beyondcodebootcamp.github.io/presos/on-js-tooling/)
  <!-- [2022-03-17 15:05:11 -0600] Deploying -->
- [Deploying Node.js in 2022 - Utah Node.js - March 17th, 2022](https://beyondcodebootcamp.github.io/presos/deploying-nodejs-in-2022/)
  <!-- [2022-02-18 02:13:05 -0700] Navigating -->
- [Navigating Node.js in 2022 - Utah Node.js - February 18th, 2022](https://beyondcodebootcamp.github.io/presos/navigating-nodejs-in-2022/)
  <!-- [2022-01-24 23:44:42 -0700] The 2 Hardest Things -->
- [Hardest Things in CS - Beyond Code - January 24th, 2022](https://beyondcodebootcamp.github.io/presos/hardest-things-in-cs/)
  <!-- [2022-01-16 02:17:42 -0700] `const`, `let`, `var` -->
- [const, let, var - Beyond Code - January 16th, 2022](https://beyondcodebootcamp.github.io/presos/const-let-var/)
  <!-- [2021-12-13 02:10:19 -0700] Classless JavaScript -->
- [Classless JavaScript - Utah Node.js - December 13th, 2022](https://beyondcodebootcamp.github.io/presos/classless-javascript/)
  <!-- [2021-08-12 18:01:43 -0600] All The Concurrency Models of the Rainbow 🌈 -->
- [The Concurrency Rainbow - Utah Rust - August 12th, 2022](https://beyondcodebootcamp.github.io/presos/concurrency-rainbow/)
  <!-- [2021-07-28 05:11:36 -0600] My Best Advice -->
- [My Best Advice for Bootcamp Grads - July 28th, 2022](https://beyondcodebootcamp.github.io/presos/bootcamp-grads/)
  <!-- [2021-07-28 01:43:19 -0600] Whole Numbers<br>in Programming -->
- [Integer Division - July 28th, 2022](https://beyondcodebootcamp.github.io/presos/integer-division/)

<!-- TODO
  Nothings of JavaScript
  MVC
-->

## Quick Start to Render

```bash
watchexec -e md -w "YOUR_PRESO.md" -- mdslides "YOUR_PRESO.md"
```

# These slides are built with [_Markdown Slides_][mds]

[mds]: https://github.com/dadoomer/markdown-slides

You'll need:

- python 3.10.1
- mdslides
- a single markdown file

## How to Install Pyenv + Python

See https://webinstall.dev/pyenv

### Install pyenv

```bash
curl -sS https://webinstall.dev/pyenv | bash
```

If you see
`WARNING: Can not proceed... remove '~/.pyenv' first`, then
you already have `pyenv` installed. No worries. Carry on.

### Install the latest python 3

Check the latest version:

```bash
pyenv update
pyenv install --list | grep -vi '[a-z]' | tail -n 1
```

You can install that or, if you want to have the exact setup
as I have, use 3.10.1:

```bash
pyenv install -v 3.10.1
```

Then set that to the current version for your user:

```bash
pyenv local 3.10.1
python --version
```

### Install Markdown Slides with pip

```bash
python -m pip install git+https://gitlab.com/da_doomer/markdown-slides.git
```

## Create Slides

See
[presentation.md](https://github.com/dadoomer/markdown-slides/blob/master/example/presentation.md)
and the
[reveal.js cheat sheet](https://revealjs.com/markdown/).

Slides look like this: \
See [example.md](/example.md).

````md
[comment]: # "THEME = white"
[comment]: # "CODE_THEME = zenburn"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Great Title

A great slide

[comment]: # "!!!"

# A Second Slide

Another great slide

[comment]: # "!!! data-auto-animate"

# An Animated Slide

A really WOW slide

[comment]:
  #
  "!!! data-auto-animate data-background-color='aquamarine'"

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

<!-- .element: data-id="code" -->

[comment]: # "!!! data-auto-animate"

```js [5]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
c(5);
```

<!-- .element: data-id="code" -->

[comment]: # "!!! data-auto-animate"
````

Note:

- The `[comment]: # (!!!)` bits signify the END of a slide
  and contain metadata pertaining to the slide above them.
- DO NOT use `prettier` on the slides (it will ruin the
  comments)
  ```bash
  echo '**/*.md' >> .prettierignore
  ```

It's basically reveal.js, but with the nasty html taken out
of your way.

- Slide Themes: https://revealjs.com/themes/ (ex: white)
- Code Themes: https://highlightjs.org/ (ex: zenburn)
- Slide Configuration: https://revealjs.com/config/

## Render Slides

1. Navigate to the directory for your presentation:
   ```bash
   mkdir ./my-presentation
   pushd ./my-presentation
   ```
2. Render the slides

- as html
  ```bash
  mdslides ./slides.md
  ```
- or as a pdf
  ```bash
  mdslides --pdf ./slides.md
  ```
- include additional assets as needed
  ```bash
  mdslides --include ./img --include ./js ./slides.md
  ```

3. The website directory will be the markdown file
   ```bash
   open ./slides/index.html
   ```
