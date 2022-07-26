[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# `const`, `let`, `var`

<small>in JavaScript</small>

AJ ONeal <br> [@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

(that was alphabetical order)

[comment]: # "!!!"

# `var`, `const`, `let`

[comment]: # "!!! data-auto-animate"

# `var`, `const`, `let`

(that's the order in which we'll discuss them)

[comment]: # "!!! data-auto-animate"

# I'm AJ ONeal

(and I hate `const`)

[comment]: # "!!! data-auto-animate"

# `var`

[comment]: # "!!! data-auto-animate"

# `var`

- is _incredibly_ simple.

[comment]: # "!!! data-auto-animate"

# `var`

- is _incredibly_ simple.
- has _exactly_ ONE rule

[comment]: # "!!! data-auto-animate"

> Variables declared with **`var`** are scoped to the **_whole_ function** that
> contains them, **recursively**.

[comment]: # "!!!"

And _exactly_ NO exceptions.

[comment]: # "!!! data-auto-animate"

And _exactly_ NO exceptions.

Period.

[comment]: # "!!! data-auto-animate"

Example: Flat `var`s:

```js [1-11|2,8]
function foo() {
  var answer = 42;

  // ...
}

function bar() {
  var random = 4;

  // ...
}
```

[comment]: # "!!! data-auto-animate"

Example: Nested `var`s:

```js [1-11|1-2|1-2,4-5]
function foo() {
  var answer = 42;

  function bar() {
    var random = 4;

    // ...
  }

  // ...
}
```

[comment]: # "!!!"

Trick Question #1:

[comment]: # "!!! data-auto-animate"

Trick Question #1:

What's the scope of **`awkward`**?

[comment]: # "!!! data-auto-animate"

Trick Question #1:

What's the scope of **`awkward`**?

```js [10|1,4]
function foo() {
  var answer = 42;

  function bar() {
    var random = 4;

    // ...
  }

  var awkward = -0;

  // ...
}
```

[comment]: # "!!!"

Scope starts at the **function declaration**.

[comment]: # "!!! data-auto-animate"

Scope starts at the **function declaration**.

And is scoped to the _whole_ function.

[comment]: # "!!! data-auto-animate"

Scope starts at the **function declaration**.

And is scoped to the _whole_ function.

Recursively.

[comment]: # "!!! data-auto-animate"

```js [1,4,7]
function foo() {
  var answer = 42;

  function bar() {
    var random = 4;

    function baz() {
      var deep = 3;

      // ...
    }

    // ...
  }

  // ...
}
```

[comment]: # "!!!"

Trick Question #2

[comment]: # "!!! data-auto-animate"

Trick Question #2

How many scopes are there?

[comment]: # "!!! data-auto-animate"

Trick Question #2

How many scopes are there?

```js [1-13|2,4,5,10]
function foo() {
  var answer = 42;

  for (var i = 0; i < 10; i += 1) {
    var silly = i;

    // ...
  }

  var awkward = -0;

  // ...
}
```

[comment]: # "!!!"

## 1

[comment]: # "!!! data-auto-animate"

## 1

- One `function`.

[comment]: # "!!! data-auto-animate"

## 1

- One `function`.
- One scope.

[comment]: # "!!! data-auto-animate"

All **`var`** have **_whole-function_** scope.

[comment]: # "!!! data-auto-animate"

Trick Question #3:

[comment]: # "!!! data-auto-animate"

Trick Question #3:

What's the scope of **`nofunc`**?

[comment]: # "!!! data-auto-animate"

Trick Question #3:

What's the scope of **`nofunc`**?

```js [1]
var nofunc = Infinity;

function foo() {
  var answer = 42;

  function bar() {
    var random = 4;

    // ...
  }

  // ...
}
```

[comment]: # "!!! data-auto-animate"

# None

[comment]: # "!!! data-auto-animate"

# None

- No `function`.

[comment]: # "!!! data-auto-animate"

# None

- No `function`.
- No scope.

[comment]: # "!!! data-auto-animate"

# None

- No `function`.
- No scope.

<small>(it's **_global_**)</small>

[comment]: # "!!! data-auto-animate"

### `var` Conclusion:

[comment]: # "!!! data-auto-animate"

### `var` Conclusion:

`var` is _different_...

[comment]: # "!!! data-auto-animate"

### `var` Conclusion:

`var` is _different_...

but not _bad_.

[comment]: # "!!! data-auto-animate"

# `const`

[comment]: # "!!! data-auto-animate"

# `const`

... is tarded

[comment]: # "!!! data-auto-animate"

### Part A:

Appropriation

[comment]: # "!!! data-auto-animate"

### Part A:

Appropriation

(what's **STUPID**...)

[comment]: # "!!! data-auto-animate"

```js
const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062;
```

(what a `const` _should_ look like)

[comment]: # "!!! data-auto-animate"

> <small>"The `const` keyword declares the following item as constant. Constant
> items can be completely computed at compile time, and any code that refers to
> them is replaced with the constant's computed value during compilation.
>
> A constant has no memory or other storage associated with it (it is not a
> place). You can think of constant as a convenient name for a particular
> value." </small>

<small>"Rust for Rustaceans" by Jon Gjengset</small>

[comment]: # "!!! data-auto-animate"

Recap

[comment]: # "!!! data-auto-animate"

Recap

- `const` means `constant`.

[comment]: # "!!! data-auto-animate"

Recap

- `const` means `constant`.
- _constants_ can be computed at _compile_ time.

[comment]: # "!!! data-auto-animate"

Recap

- `const` means `constant`.
- _constants_ can be computed at _compile_ time.
- the value of a _constant_ doesn't change.

[comment]: # "!!! data-auto-animate"

And conventionally...

[comment]: # "!!! data-auto-animate"

And conventionally...

```js
const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062;
```

[comment]: # "!!! data-auto-animate"

And conventionally...

```js
const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062;
```

a `const` is `ALL_CAPS`

[comment]: # "!!! data-auto-animate"

... but not in EcmaScript.

[comment]: # "!!! data-auto-animate"

```js
function greet(name) {
  // variable!
  const greeting = `Hello ${name}!`;

  // ...
}
```

[comment]: # "!!! data-auto-animate"

```js
function greet(name) {
  // variable!
  const greeting = `Hello ${name}!`;

  // ...
}
```

Can't be computed ahead-of-time?

NOT a constant!

[comment]: # "!!! data-auto-animate"

```js
const items = [];

// mutable!
items.push(1);
```

[comment]: # "!!! data-auto-animate"

```js
const items = [];

// mutable!
items.push(1);
```

Can be mutated... at all?

NOT a constant!

[comment]: # "!!! data-auto-animate"

An immutable reference is no more a `const`...

[comment]: # "!!! data-auto-animate"

An immutable reference is no more a `const`...

than acne is a cancer.

[comment]: # "!!! data-auto-animate"

But...

[comment]: # "!!! data-auto-animate"

But...

but...

[comment]: # "!!! data-auto-animate"

But...

but...

but...

[comment]: # "!!! data-auto-animate"

```js
const answer = 42;

// throws an error!
// See! It's an immutable reference!!
answer += 1;
```

[comment]: # "!!! data-auto-animate"

```js
const answer = 42;

// throws an error!
// See! It's an immutable reference!!
answer += 1;
```

Not a _constant_!

[comment]: # "!!! data-auto-animate"

## Part B:

Just Moral Cause

[comment]: # "!!! data-auto-animate"

## Part B:

Just Moral Cause

(what's **_WORSE_**...)

[comment]: # "!!! data-auto-animate"

Readable conditional assignment:

[comment]: # "!!! data-auto-animate"

Readable conditional assignment:

```js
function greet(name) {
  var foo;

  if (name) {
    foo = "Hey ${name}!";
  } else {
    foo = "Welcome!";
  }

  // ...
}
```

[comment]: # "!!! data-auto-animate"

With `const` brain drain:

[comment]: # "!!! data-auto-animate"

With `const` brain drain:

```js
function greet(name) {
  const foo = name ? "Hey ${name}!" : "Welcome!";

  // ...
}
```

[comment]: # "!!! data-auto-animate"

With `const` brain drain:

```js
function greet(name) {
  const foo = name ? "Welcome!" : "Hey ${name}!";

  // ...
}
```

😈

[comment]: # "!!! data-auto-animate"

Anyway...

[comment]: # "!!! data-auto-animate"

<small>I don't know about you but...</small>

Forgetting if I want to change a variable

<small>_isn't_ a problem I have.</small>

[comment]: # "!!! data-auto-animate"

<small>I don't know about you but...</small>

Forgetting if I want to change a variable

<small>_isn't_ a problem I have.</small>

<small>(at least not in _that_ way but... more on that later)</small>

[comment]: # "!!! data-auto-animate"

# `let`

[comment]: # "!!! data-auto-animate"

# `let`

(Schrodinger's **`var`**)

[comment]: # "!!! data-auto-animate"

`let` is **_supposed_** to declare variables

[comment]: # "!!! data-auto-animate"

`let` is **_supposed_** to declare variables

in block scope

[comment]: # "!!! data-auto-animate"

`let` is **_supposed_** to declare variables

in block scope

```js
{
  {
    {
      let awkward = -0;
    }
  }
}
```

[comment]: # "!!! data-auto-animate"

er... **_whole_** block scope...

```js [3-4,7,10-13]
function foo() {
  for (let i = 0; i < 10; i += 1) {
    let silly = i;

    // ...
  }

  {
    {
      let awkward = -0;
    }
    let superAwkward = -0;
  }

  // ...
}
```

[comment]: # "!!! data-auto-animate"

And that _mostly_ works...

[comment]: # "!!! data-auto-animate"

And that _mostly_ works...

but is only _necessary_ for anti-patterns

[comment]: # "!!! data-auto-animate"

And that _mostly_ works...

but is only _necessary_ for anti-patterns

(meaning really long functions)

[comment]: # "!!! data-auto-animate"

And `let` _breaks_ `switch`:

[comment]: # "!!!"

```js [3,7]
switch (name) {
  case "foo":
    let answer = 42;
    // ...
    break;
  case "bar":
    let answer = 4;
    // ...
    break;
  // ...
}
```

[comment]: # "!!! data-auto-animate"

```js [3,7]
switch (name) {
  case "foo":
    let answer = 42;
    // ...
    break;
  case "bar":
    let answer = 4;
    // ...
    break;
  // ...
}
```

(Schrodinger's **`var`**)

[comment]: # "!!! data-auto-animate"

```js [7]
switch (name) {
  case "foo":
    let answer = 42;
    // ...
    break;
  case "bar":
    answer = 4;
    // ...
    break;
  // ...
}
```

[comment]: # "!!!"

```js [3-6,9-12]
switch (name) {
  case "foo":
    {
      let answer = 42;
      // ...
    }
    break;
  case "bar":
    {
      let answer = 4;
      // ...
    }
    break;
  // ...
}
```

[comment]: # "!!!"

But...

[comment]: # "!!! data-auto-animate"

But...

`let` does allow you to write confusing, otherwise buggy code:

[comment]: # "!!! data-auto-animate"

But...

`let` does allow you to write confusing, otherwise buggy code:

```js
function confusing() {
  for (let count = 0; count < 10; count += 10) {
    setTimeout(function () {
      // count increments as... expected?
      console.log(count);
    }, 1000);
  }
}
```

[comment]: # "!!! data-auto-animate"

# 🤷‍♀️

[comment]: # "!!!"

# Missed Opportunities

[comment]: # "!!!"

Problems that I _do_ have

that `const` and `let` still don't solve:

[comment]: # "!!! data-auto-animate"

# Shadowing

[comment]: # "!!! data-auto-animate"

`let` doesn't enable _intentional_ shadowing:

[comment]: # "!!! data-auto-animate"

`let` doesn't enable _intentional_ shadowing:

```js
function foo() {
  let answer = "42";
  let answer = parseInt(answer, 10);

  // ...
}
```

[comment]: # "!!! data-auto-animate"

of any sort...

```js
function foo() {
  let answer = "42";

  function bar() {
    let answer = parseInt(answer, 10);

    // ...
  }

  // ...
}
```

[comment]: # "!!! data-auto-animate"

and `const` doesn't prevent _unintentional_ shadowing:

[comment]: # "!!! data-auto-animate"

and `const` doesn't prevent _unintentional_ shadowing:

```js
function foo() {
  const name = "foo";

  function bar() {
    const name = "bar";

    // ...
  }

  // ...
}
```

[comment]: # "!!! data-auto-animate"

`try` / `catch` is still broken:

[comment]: # "!!! data-auto-animate"

`try` / `catch` is still broken:

```js
let name;

try {
  name = "foo";
  throw new Error("oops");
} catch (e) {
  // nothing is undone
  // (the stack is not unwound)
}

// name is still "foo"!
```

[comment]: # "!!! data-auto-animate"

# 🤷‍♂️

[comment]: # "!!!"

## Conclusion

[comment]: # "!!! data-auto-animate"

## Conclusion

- _Fails_ to make EcmaScript like other languages

[comment]: # "!!! data-auto-animate"

## Conclusion

- _Fails_ to make EcmaScript like other languages
- Doesn't _fix_ JavaScript's bugs

[comment]: # "!!! data-auto-animate"

## Conclusion

- _Fails_ to make EcmaScript like other languages
- Doesn't _fix_ JavaScript's bugs
- Adds _more_ bugs to EcmaScript

[comment]: # "!!! data-auto-animate"

## Conclusion

- _Fails_ to make EcmaScript like other languages
- Doesn't _fix_ JavaScript's bugs
- Adds _more_ bugs to EcmaScript

Therefore...

[comment]: # "!!! data-auto-animate"

## Conclusion

- _Fails_ to make EcmaScript like other languages
- Doesn't _fix_ JavaScript's bugs
- Adds _more_ bugs to EcmaScript

Therefore...

# BAD IDEA!

[comment]: # "!!! data-auto-animate"

# FIN

[comment]: # "!!!"

- Like
- Sub
- Follow
- Click all-the-things

[comment]: # "!!!"
