[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Semantic JavaScript

(Intentional JavaScript)

[comment]: # "!!! data-auto-animate"

### Useful Links

<table>

<tr><td>
<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/">https://beyondcodebootcamp.github.io/</a></small>
</td></tr>

<tr><td>
<small>Video:
<a href="https://www.youtube.com/watch?v=ID_GOES_HERE">https://youtu.be/ID_GOES_HERE</a></small>
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

Like, Sub, & Follow

<small>(if you find this useful, or entertaining)</small>

[comment]: # "!!! data-auto-animate"

## Semantic

[comment]: # "!!! data-auto-animate"

## Semantic

> "of or relating to meaning"

<a href="https://search.brave.com/search?q=define+semantic" target="_define_semantic"><small>Merriam-Webster:
semantic</small></a>

[comment]: # "!!! data-auto-animate"

<table>
<tr>
<td>
acceptable <br />
allowable <br />
correct <br />
linguistic <br />
</td>
<td>
morphological <br />
phonological <br />
syntactic <br />
well-formed <br />
</td>
</tr>
</table>

<a href="https://www.thesaurus.com/browse/semantic" target="_thesaurus_semantic"><small>thesaurus.com:
semantic</small></a>

[comment]: # "!!! data-auto-animate"

## Non-Semantic

[comment]: # "!!! data-auto-animate"

## Non-Semantic

### solecistic

[comment]: # "!!! data-auto-animate"

### solecistic

- nonstandard usage
- violation of etiquette
- impropriety, mistake, or incongruity

[comment]: # "!!! data-auto-animate"

### StoryTime

<img alt="four-wheeler foot area" src="https://i.imgur.com/GvvkHV7.jpg" width="70%" />

<small>(I got my kickstart stuck in my foot peg)</small>

[comment]: # "!!!"

Kickstart

<img alt="engine kickstart" src="https://i.imgur.com/Z1uWNS9.jpg" width="60%" />

[comment]: # "!!!"

Foot Peg

<img alt="atv foot peg" src="https://i.imgur.com/R4iN6jB.jpg" width="60%" />

[comment]: # "!!!"

<img alt="four-wheeler foot area" src="https://i.imgur.com/GvvkHV7.jpg" width="70%" />

[comment]: # "!!!"

Wrench

<img alt="socket wrench" src="https://i.imgur.com/WvqbuQp.jpg" width="50%" />

[comment]: # "!!!"

wrench ~= lever

[comment]: # "!!!"

> "you must have a pry bar"

### vs

> "be sure to bring your wrench"

[comment]: # "!!!"

> It's fine to use the wrong tool \
> when you don't have the right tool.

[comment]: # "!!!"

But, in JavaScript, \
we (almost) always \
have the right tool.

[comment]: # "!!!"

JavaScript Array Methods:

<img alt="too many cooks" src="https://i.imgur.com/qXiRFTi.jpg" width="60%" />

[comment]: # "!!!"

## Goal

[comment]: # "!!! data-auto-animate"

## Goal

to be semantic ✅

<!-- could be overly specific -->

[comment]: # "!!! data-auto-animate"

## Goal

to be semantic ✅

to _not_ be incongruous ✅✅

[comment]: # "!!! data-auto-animate"

> "you don't always know what's right, \
> but you often know what's wrong - \
> so don't do that"

<small>- John Ousterhout (paraphrased)</small>

[comment]: # "!!!"

> "in the face of ambiguity, \
> refuse the temptation to guess"

<small>- The Zen of Python</small>

[comment]: # "!!!"

> "better _no_ info \
> than _bad_ info"

<small>- AJ</small>

[comment]: # "!!! data-auto-animate"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Nz8ssH7LiB0?start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small>Video:
<a href="https://www.youtube.com/watch?v=Nz8ssH7LiB0&t=13s">https://youtu.be/Nz8ssH7LiB0&t=13s</a></small>

[comment]: # "!!! data-auto-animate"

# ✅ ⚠️ ❌

[comment]: # "!!! data-auto-animate"

# ✅ ⚠️ ❌

## Semantic JS

[comment]: # "!!! data-auto-animate"

## Semantic JS

<small><em>Strings</em></small>

```js
"" + 1;
```

[comment]: # "!!! data-auto-animate"

## Semantic JS

<small><em>Strings</em></small>

```js
"" + 1;
```

vs

```js
(1).toString();

String(1);
```

[comment]: # "!!! data-auto-animate"

## Semantic JS

<small><em>Numbers</em></small>

```js
"1" * 1;
```

vs

```js
parseFloat("1");

parseInt("1", 10);
```

[comment]: # "!!! data-auto-animate"

## Array Semantics

[comment]: # "!!! data-auto-animate"

## Array Semantics

❌ `new Array()`

```js
let arr = new Array(n...);
```

✅ `[]`

```js
let arr = [a, ...];
```

[comment]: # "!!! data-auto-animate"

❌ `new Array()`

Ambiguous

[comment]: # "!!! data-auto-animate"

❌ `new Array()`

Ambiguous

```js
new Array(length);
```

```js
new Array(v, ...)
```

[comment]: # "!!! data-auto-animate"

❌ `new Array()`

Ambiguous

```js
new Array(1);

// [ undefined ]
// [ 1 ]
```

[comment]: # "!!! data-auto-animate"

❌ `new Array()`

not _verbose_ but ...

[comment]: # "!!! data-auto-animate"

❌ `new Array()`

not _verbose_ but ...

_"bloat without distinction"_

[comment]: # "!!! data-auto-animate"

✅ Communicate Intent

```js
let arr = [];
```

```js
Array.from(arrayLike);
```

[comment]: # "!!! data-auto-animate"

## Semantics Usage

[comment]: # "!!! data-auto-animate"

## Semantic Usage

⚠️

```js
let arr = ...
```

✅

```js
let foos = ...
```

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

Generic

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

Generic

(no specific problem to solve)

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

(no specific problem to solve)

communicates ignorance

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

communicates ignorance

> we just don't know

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

appropriate for "utility" fns

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

appropriate for "utility" fns

> this is a set \
> the quality of "set"ness is important

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

utility libs are _not_ appropriate

[comment]: # "!!! data-auto-animate"

⚠️ `arr`

utility libs are _not_ appropriate

(no specific problem to solve)<sup>2</sup>

[comment]: # "!!! data-auto-animate"

✅ `foos`

Specific

[comment]: # "!!! data-auto-animate"

✅ `foos`

Specific

(not literally `foos`, but `users`, `tasks`, etc)

[comment]: # "!!! data-auto-animate"

✅ `foos`

> these are `foos` \
> each `foo` is valuable

[comment]: # "!!! data-auto-animate"

> "it's an array"

<small>_not_ vital communication</small>

[comment]: # "!!! data-auto-animate"

> "it's a bunch of _foos_"

<small>Array*ness* (cardinality) is communicated by
pluralization</small>

[comment]: # "!!! data-auto-animate"

## Iteration Semantics

[comment]: # "!!!"

✅ `"foo"`

```js
// 'foo' of 'foos'
foos.forEach(function (foo) {
  // do stuff
});
```

[comment]: # "!!!"

✅ `"f"` for `"foo"`

```js
// 'f' of 'foos'
foos.forEach(function (f) {
  // do stuff
});
```

[comment]: # "!!!"

✅ `"person"`

```js
// 'person' of 'persons'
persons.forEach(function (person) {
  // do stuff
});
```

[comment]: # "!!!"

✅ `"p"` for `person`

```js
// 'p' for 'person'
persons.forEach(function (p) {
  // do stuff
});
```

[comment]: # "!!!"

⚠️ `"v"` for `value`

```js
// key, value
arr.forEach(function (v) {
  // do stuff
});
```

[comment]: # "!!!"

⚠️ `"el"` for `element`

```js
// index, element
arr.forEach(function (el) {
  // do stuff
});
```

[comment]: # "!!!"

❌ `"e"` for `exception`

```js
// also error, exception, event
arr.forEach(function (e) {
  // do stuff
});
```

[comment]: # "!!!"

❌ `"i"` for `item`

```js
// item, but also index
arr.forEach(function (i) {
  // do stuff
});
```

[comment]: # "!!! data-auto-animate"

> The _category_ of the data _(collection)_

[comment]: # "!!! data-auto-animate"

> The _category_ of the data _(collection)_

vs

> The _story_ of the data _(interactions)_

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- allowed

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- allowed
  - boolean

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- admin

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- isAdmin

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- isAdmin
  - boolean

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- hasAdminRights

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- asAdmin

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- hasChildren

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- hasChildren
  - boolean

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- public

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- public
- private

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- public
- private
- unlisted

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- public
- private
- unlisted
- whitelist

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- privacy
  - "public"
  - "unlisted"
  - "whitelist"
  - "private"

[comment]: # "!!! data-auto-animate"

## Booleans vs Enums

- privacy
  - "public"
  - "unlisted"
  - "whitelist"
  - "private"

[comment]: # "!!! data-auto-animate"

## Common Conventions

```txt
a,b    - sortable values
args   - variadic arguments
arr    - Array
el     - Element
err    - Error (Exception)
ev     - Event
i,j    - index (or count)
k      - key
```

[comment]: # "!!! data-auto-animate"

## Common Conventions

```txt
n,m    - Number (or quantity)
opts   - misc options
r      - record
req    - server request
res    - server response
resp   - client response
v,x    - value
x,y,z  - planer coords
```

[comment]: # "!!!"

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ph9HGYkAiWw?start=32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small>Video:
<a href="https://www.youtube.com/watch?v=ph9HGYkAiWw&t=32s">https://youtu.be/ph9HGYkAiWw&t=32s</a></small>

[comment]: # "!!!"

Q&A

[comment]: # "!!! data-auto-animate"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
