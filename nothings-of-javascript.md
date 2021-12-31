[comment]: # "THEME = white"
[comment]: # "CODE_THEME = zenburn"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# A Whole Lot of Nothing <br>(in JavaScript)

AJ ONeal
<br>
[@\_beyondcode](https://twitter.com/@_beyondcode)
<br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

# The Actual Nothings (null*ish*)

- null
- undefined\*
- "not defined"
- non-enumerable\*

# null

```js
null
```

[comment]: # "!!!"

# undefined

```js
typeof somethingUndefined
undefined
arr[-1]
obj.somethingUndefined
```

[comment]: # "!!!"

# not defined

```js
var defined = 'foo' in globalThis;
```

[comment]: # "!!!"

# non-enumerable\*

\* it's nothing, but only when you're not looking \
(kinda like a quantum particle)

[comment]: # "!!!"

# Nothing-like (|| vs ??)

- `""` (empty string)
- `0` (zero)
- `NaN` (the not-a-number number)
- `false`

# Nothing-ish (== vs ===)

- 0
- `"0"` (empty string)
- `"false"`
- `false`

[comment]: # "!!!"

# == vs ===

It's impossible to guess which of these is or isn't true:

```js
1 == true
1 == "1"
"1" == true
"true" == true
```

But you can always tell 100% accurately with `===`... except for `NaN === NaN`

[comment]: # "!!!"

# Not Nothing

- `[]` (empty array)
- `{}` (empty object)
- `NaN` (the not-a-number number, equal to nothing at all)
- `function () {}` (empty function)
- `//` (empty regexp... er... comment)
- `0_000_000` (zero million... er... syntax error)

[comment]: # "!!!"
