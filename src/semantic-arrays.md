[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Semantic Arrays

When in doubt, `forEach`

[comment]: # "!!!"

### Useful Links

<table>

<tr><td>
<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/js-array-methods/">https://beyondcodebootcamp.github.io/</a></small>
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

Like, Sub, & Follow

<small>(if this is useful, or entertaining)</small>

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

[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

## Semantic Arrays

[comment]: # "!!!"

Semantic JS Array Methods<br/><small>(when in doubt:
<code>forEach</code>)</small>

<table>

  <tr>
  <th><small> Array <br />Method </small></th>
  <th><small> Mutates <br />Value </small></th>
  <th><small> Mutates <br />Array </small></th>
  <th></th>
  <th><small> Return <br />Value </small></th>
  </tr>

  <tr><td><small>
  <code>.forEach(fn)</code> <br />
  <code>.filter(fn)</code> <br />
  <code>.map(fn)</code> <br />
  <code>.reduce(fn, v)</code> <br />
  <code>.some(fn)</code> <br />
  <code>.every(fn)</code> <br />
  <code>.find(fn)</code> <br />
  <code>.indexOf(v)</code> <br />
  <code>.includes(v)</code> <br />
  <code>.reverse()</code> <br />
  <code>.slice(n, m)</code> <br />
  <code>.sort(fn)</code> <br />
  <code>.splice(i, n)</code> <br />
  </small></td>

  <!-- TODO: concat, join, push, pop, unshift, shift -->

  <td><small>
  ✅ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ❌ <br />
  ❌ <br />
  ❌ <br />
  ❌ <br />
  ⚠️ <br />
  ❌ <br />
  </small></td>

  <td><small>
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ❌ <br />
  ❌ <br />
  ✅ <br />
  ❌ <br />
  ✅ <br />
  ✅ <br />
  </small></td>

  <td><small>
  <br />
  🔗 <br />
  🔗 <br />
  ⚠️ <br />
  <br />
  <br />
  ⚠️ <br />
  <br />
  <br />
  🔗 <br />
  🔗 <br />
  🔗 <br />
  ⚠️ <br />
  </small></td>

  <td><small>
  <code>void</code> <br />
  <code>[]</code> (copy)<br />
  <code>[]</code> (transform)<br />
  <em>any</em> <br />
  <code>false</code> <br />
  <code>true</code> <br />
  <em>any</em> <br />
  <code>integer</code> <br />
  <code>false</code> <br />
  <em>self</em> <br />
  <code>[]</code> (copy)<br />
  <em>self</em> <br />
  <code>[]</code> (copy)<br />
  </small></td>

  </tr>
</table>

[comment]: # "!!!"

## Semantic

[comment]: # "!!!"

> "of or relating to meaning"

<a href="https://search.brave.com/search?q=define+semantic" target="_define_semantic"><small>Merriam-Webster:
semantic</small></a>

[comment]: # "!!!"

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

[comment]: # "!!!"

## Non-Semantic

[comment]: # "!!!"

### solecistic

[comment]: # "!!! data-auto-animate"

### solecistic

- nonstandard usage
- violation of etiquette
- impropriety, mistake, or incongruity

[comment]: # "!!! data-auto-animate"

## StoryTime

[comment]: # "!!!"

<img alt="four-wheeler foot area" src="https://i.imgur.com/GvvkHV7.jpg" width="70%" />

<small>(I got my kickstart stuck in my foot peg)</small>

[comment]: # "!!!"

Kickstart

<img alt="engine kickstart" src="https://i.imgur.com/Z1uWNS9.jpg" width="60%" />

[comment]: # "!!!"

Foot Peg

<img alt="atv foot peg" src="https://i.imgur.com/R4iN6jB.jpg" width="60%" />

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

~~to be semantic~~

<!-- could be overly specific -->

[comment]: # "!!! data-auto-animate"

## Goal

~~to be semantic~~

to _not_ be incongruous

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

[comment]: # "!!!"

# ✅ ⚠️ ❌

[comment]: # "!!!"

## Semantic JS

[comment]: # "!!! data-auto-animate"

```js
"" + 1;
```

[comment]: # "!!! data-auto-animate"

```js
"" + 1;
```

vs

```js
(1).toString();

String(1);
```

[comment]: # "!!! data-auto-animate"

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

✅ `[]`

`[]` is correct

[comment]: # "!!! data-auto-animate"

## Naming Semantics

[comment]: # "!!! data-auto-animate"

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

[comment]: # "!!! data-auto-animate"

⚠️ `v`

```js
// key, value
arr.forEach(function (v) {
  // do stuff
});
```

```js
// index, element
arr.forEach(function (el) {
  // do stuff
});
```

[comment]: # "!!! data-auto-animate"

❌ `e`

```js
// also error, exception, event
arr.forEach(function (e) {
  // do stuff
});
```

```js
// item, but also index
arr.forEach(function (i) {
  // do stuff
});
```

[comment]: # "!!! data-auto-animate"

> The _category_ of the data

vs

> The _story_ of the data

[comment]: # "!!! data-auto-animate"

## Semantic Lambdas

[comment]: # "!!! data-auto-animate"

❌

```js
// not a lambda
arr.forEach((v) => {
  // return to nothing
});
```

[comment]: # "!!! data-auto-animate"

lambda

> "The 11th letter of the Greek alphabet."

[comment]: # "!!! data-auto-animate"

lambda

> "an uncharged unstable elementary particle that has a mass
> 2183 times that of an electron and that decays typically
> into a nucleon and a pion"

[comment]: # "!!! data-auto-animate"

lambda

> "the likelihood that a small body will encounter a planet
> or a dwarf planet leading to a deflection of a significant
> magnitude"

[comment]: # "!!! data-auto-animate"

lambda

<small>(Computer Science)</small>

> "the time window over which a process is observed for
> determining the working memory set for a digital
> computer's virtual memory management"

[comment]: # "!!! data-auto-animate"

lambda

<small>(Computer Science)</small>

> "the empty string"

[comment]: # "!!! data-auto-animate"

lambda

<small>(Lambda Calculus, CS)</small>

> "a universal model of computation that can be used to
> simulate any Turing machine"

[comment]: # "!!! data-auto-animate"

# 🤷‍♂️

[comment]: # "!!! data-auto-animate"

Semantic JS Array Methods<br/><small>(when in doubt:
<code>forEach</code>)</small>

<table>

  <tr>
  <th><small> Array <br />Method </small></th>
  <th><small> Mutates <br />Value </small></th>
  <th><small> Mutates <br />Array </small></th>
  <th></th>
  <th><small> Return <br />Value </small></th>
  </tr>

  <tr><td><small>
  <code>.forEach(fn)</code> <br />
  <code>.filter(fn)</code> <br />
  <code>.map(fn)</code> <br />
  <code>.reduce(fn, v)</code> <br />
  <code>.some(fn)</code> <br />
  <code>.every(fn)</code> <br />
  <code>.find(fn)</code> <br />
  <code>.indexOf(v)</code> <br />
  <code>.includes(v)</code> <br />
  <code>.reverse()</code> <br />
  <code>.slice(n, m)</code> <br />
  <code>.sort(fn)</code> <br />
  <code>.splice(i, n)</code> <br />
  </small></td>

  <!-- TODO: concat, join, push, pop, unshift, shift -->

  <td><small>
  ✅ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ❌ <br />
  ❌ <br />
  ❌ <br />
  ❌ <br />
  ⚠️ <br />
  ❌ <br />
  </small></td>

  <td><small>
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ⚠️ <br />
  ❌ <br />
  ❌ <br />
  ✅ <br />
  ❌ <br />
  ✅ <br />
  ✅ <br />
  </small></td>

  <td><small>
  <br />
  🔗 <br />
  🔗 <br />
  ⚠️ <br />
  <br />
  <br />
  ⚠️ <br />
  <br />
  <br />
  🔗 <br />
  🔗 <br />
  🔗 <br />
  ⚠️ <br />
  </small></td>

  <td><small>
  <code>void</code> <br />
  <code>[]</code> (copy)<br />
  <code>[]</code> (transform)<br />
  <em>any</em> <br />
  <code>false</code> <br />
  <code>true</code> <br />
  <em>any</em> <br />
  <code>integer</code> <br />
  <code>false</code> <br />
  <em>self</em> <br />
  <code>[]</code> (copy)<br />
  <em>self</em> <br />
  <code>[]</code> (copy)<br />
  </small></td>

  </tr>
</table>

[comment]: # "!!! data-auto-animate"

**`.forEach()`**

[comment]: # "!!! data-auto-animate"

`.forEach()`

Do _something_ for each element

[comment]: # "!!! data-auto-animate"

`.forEach()`

Do _something_ for each element

```js
arr.forEach(function (el, i) {
  // do something
});
```

[comment]: # "!!! data-auto-animate"

`.forEach()`

Do _something_ for each element

- Not very _precise_

[comment]: # "!!! data-auto-animate"

`.forEach()`

Do _something_ for each element

- Not very _precise_
- Almost never _wrong_

[comment]: # "!!! data-auto-animate"

- Almost never _wrong_

[comment]: # "!!! data-auto-animate"

- Almost never _wrong_

<!-- what if you _don't_ want to iterate over _each_ thing -->

**`forEach()`** can't **`break`**

[comment]: # "!!! data-auto-animate"

So what if you _don't_ want \
to iterate over **_every_** thing?

[comment]: # "!!!"

**`.some(fn)`**

[comment]: # "!!! data-auto-animate"

`.some(fn)`

Return `true` on success \
<small>(when you're done)</small>

[comment]: # "!!! data-auto-animate"

`.some(fn)`

Return `true` on success \
<small>(when you're done)</small>

```js
let hasGuardian = attendees.some(isAdult);
```

[comment]: # "!!! data-auto-animate"

`.some(fn)`

Return `true` on success \
<small>(when you're done)</small>

- Returns `true` when you return _truthy_

[comment]: # "!!! data-auto-animate"

`.some(fn)`

Return `true` on success \
<small>(when you're done)</small>

- Returns `true` when you return _truthy_
- Returns `false` otherwise

[comment]: # "!!! data-auto-animate"

`.some(fn)`

Return `true` on success \
<small>(when you're done)</small>

- Returns `true` when you return _truthy_
- Returns `false` otherwise
  - `[]`

[comment]: # "!!! data-auto-animate"

**`.every(fn)`**

[comment]: # "!!! data-auto-animate"

`.every(fn)`

Useless... ??

[comment]: # "!!! data-auto-animate"

`.every(fn)`

Returns `true`... unless you stop it

[comment]: # "!!! data-auto-animate"

`.every(fn)`

Returns `true`... unless you stop it

```js
let permittedToDieHard = movieGoers.every(isAdult);
```

<small>(including the group of 0)</small>

[comment]: # "!!! data-auto-animate"

`.every(fn)`

Returns `true`... unless you stop it

- `true` by default (`[]`)
- "breaks" (`false`)
- unless you "continue" (`true`)

[comment]: # "!!! data-auto-animate"

So... maybe

`.some(fn)`

is useless?

[comment]: # "!!! data-auto-animate"

Probably

[comment]: # "!!! data-auto-animate"

Probably

- `.find(fn)`
- `.includes(v)`
- `.indexOf(v)`

[comment]: # "!!! data-auto-animate"

`.find(fn)`

[comment]: # "!!! data-auto-animate"

**`.find(fn)`**

Like `.some()`, but returns the _value_.

```js
let guardian = attendees.find(isAdult);
```

[comment]: # "!!! data-auto-animate"

`.find(fn)`

Like `.some()`, but returns the _value_.

- **NOT** the value you returned

[comment]: # "!!! data-auto-animate"

**`.includes(v)`**

[comment]: # "!!! data-auto-animate"

`.includes(v)`

Returns `true` if _exactly_ **`v`** is in the array

[comment]: # "!!! data-auto-animate"

`.includes(v)`

Returns `true` if _exactly_ **`v`** is in the array

```js
let hasBond = spies.includes(agent007);
```

[comment]: # "!!! data-auto-animate"

`.includes(v)`

Returns `true` if _exactly_ **`v`** is in the array

- **Strictly-Typed**

[comment]: # "!!! data-auto-animate"

`.includes(v)`

Returns `true` if _exactly_ **`v`** is in the array

- **Strictly-Typed**
- 1 !== "1"

[comment]: # "!!! data-auto-animate"

**`.indexOf(v)`**

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

```js
let index = sights.indexOf(waldo);
```

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

- 0 is _falsy_

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

- `0` is _falsy_
- `-1` is _truthy_

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

- `0` is _falsy_
- `-1` is _truthy_
- not cool

[comment]: # "!!! data-auto-animate"

`.indexOf(v)`

Like `includes(v)`, but returns the **0-based** index

- `0` is _falsy_
- `-1` is _truthy_
- not cool
- (functional programs don't index)

[comment]: # "!!! data-auto-animate"

So what _is_ cool?

[comment]: # "!!! data-auto-animate"

**`.filter(fn)`**

<!-- of course -->

[comment]: # "!!! data-auto-animate"

`.filter(fn)`

Like `find(fn)`, but keeps on going!

[comment]: # "!!! data-auto-animate"

`.filter(fn)`

Like `find(fn)`, but keeps on going!

```js
let guardians = attendees.filter(isAdult);
```

[comment]: # "!!! data-auto-animate"

`.filter(fn)`

Like `find(fn)`, but keeps on going!

- returns a **_new_** array

[comment]: # "!!! data-auto-animate"

`.filter(fn)`

Like `find(fn)`, but keeps on going!

- returns a **_new_** array
- _truthy_ returns include the value

[comment]: # "!!! data-auto-animate"

`.filter(fn)`

Like `find(fn)`, but keeps on going!

- returns a **_new_** array
- _truthy_ returns include the value
- non-_truthy_ returns don't

[comment]: # "!!! data-auto-animate"

`.map(fn)`

Reshape / Transform the data.

[comment]: # "!!! data-auto-animate"

`.map(fn)`

Reshape / Transform the data.

```js
let guardians = adults.map(function (a) {
  return {
    name: `${a.given_name} ${a.family_name}`,
    age: toAge(m.birthdate),
  };
});
```

[comment]: # "!!! data-auto-animate"

`.map(fn)`

Reshape / Transform the data.

- Creates a COPY of the data
- Does NOT modify original data

[comment]: # "!!! data-auto-animate"

### Neat Trick

[comment]: # "!!! data-auto-animate"

### Neat Trick

```js [1-3]
let betterRobots = robots
  .map(makeBetterOrDiscard)
  .filter(Boolean);
```

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

🤖 Danger! Danger! 🚨

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

Perform a lossy (non 1:1) aggregation

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

Perform a lossy (non 1:1) aggregation

```js
await guardians.reduce(async function (promise, g) {
  await promise;
  await Guardians.save(g);
}, Promise.resolve());
```

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

<br />

lambda

<small>(Lambda Calculus, CS)</small>

> "performing reduction operations"

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

✅

```js
arr.reduce((total, n) => total + n);
```

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

Perform a lossy (non 1:1) aggregation

- Many values in
- One (non-reversible) value out

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

<img alt="apple cider reduction" src="https://i.imgur.com/2jP3qJ4.jpg" width="33%" />

[comment]: # "!!! data-auto-animate"

`.reduce(fn, init)`

- ❌ `.filter(fn)`
- ❌ `.map(fn)`
- ❌ `.filter(fn).map(fn)`
- ❌ declare a variable

[comment]: # "!!! data-auto-animate"

**`.slice(n, m)`**

[comment]: # "!!! data-auto-animate"

`.slice(n, m)`

Copies the values between _n_ and _m_ into a new array.

```js
let hold = "threshold".slice(5, 9);
```

[comment]: # "!!! data-auto-animate"

`.slice(n, m)`

Copies the values between _n_ and _m_ into a new array.

- great for batching _x_ at a time
- _n_ (inclusive)
- _m_ (exclusive)
- 🚨 .slice(-n) gives last _n_ values

[comment]: # "!!! data-auto-animate"

### Semantic Chaining

NONE OF THOSE (except `forEach()`)

are used to MODIFY the original array.

[comment]: # "!!! data-auto-animate"

```js
let totalManHours = workers
  .filter(isHuman)
  .map(getHoursWorked)
  .reduce((total, hours) => total + hours);
```

⚠️ type confusion

[comment]: # "!!! data-auto-animate"

> "Do one thing, \
> and do it well"

<small>- The Unix Philosophy</small>

[comment]: # "!!! data-auto-animate"

Or don't...

[comment]: # "!!! data-auto-animate"

**`.splice(i, n)`**

[comment]: # "!!! data-auto-animate"

`.splice(i, n)`

Remove _n_ items, starting at the given index

```js
attendees.splice(chuckAt, 1);
```

[comment]: # "!!! data-auto-animate"

`.splice(i, n)`

Remove _n_ items, starting at the given index

- Removes elements
- Starts at `index`
- Counts `n` elements
  - `.slice(n, i+n)`

[comment]: # "!!! data-auto-animate"

`.splice(i, n)`

Remove _n_ items, starting at the given index

- Removes elements
- Starts at `index`
- Counts `n` elements
  - `.slice(n, i+n)`
- Also great for batching

[comment]: # "!!! data-auto-animate"

`.splice(i, n)`

The Swiss-Army Knife \
that no one wanted, needed, or deserved \
<small>(🚨 you'll cut your eye out, kid! 🚨)</small>

[comment]: # "!!! data-auto-animate"

`.splice(i, n)`

(technically can _replace_ or _add_ elements... \
but don't do this)

[comment]: # "!!! data-auto-animate"

On to the *un*cool boring stuff...

[comment]: # "!!! data-auto-animate"

**`.sort(fn)`**

[comment]: # "!!! data-auto-animate"

**`.sort(fn)`**

Return `-1` to ascend or `1` to descend

```js
attendees.sort(youngToOld);
```

```js
function youngToOld(a, b) {
  return a.age - b.age;
}
```

[comment]: # "!!! data-auto-animate"

**`.sort(fn)`**

Return `-1` to ascend or `1` to descend

- unpredictable when `fn` is nullish
- [0, 1, 10, 2, 3, 4]

[comment]: # "!!! data-auto-animate"

**`.reverse(fn)`**

[comment]: # "!!! data-auto-animate"

`.reverse(fn)`

Change the order, exactly.

```js
arr.reverse();
```

[comment]: # "!!! data-auto-animate"

`.reverse(fn)`

Change the order, exactly.

- 'nuff said

[comment]: # "!!! data-auto-animate"

### Ultra Boring

[comment]: # "!!! data-auto-animate"

LIFO

- `.push(v)`
- `.pop()`

FILO

- `.unshift(v)`
- `.shift(v)`

[comment]: # "!!! data-auto-animate"

`.push(v)`

Add a value to the end (`.length`)

```js
completed.push(task);
```

[comment]: # "!!! data-auto-animate"

`.pop()`

Remove a value from the end (`.length - 1`)

```js
let task = tasks.pop();
```

[comment]: # "!!! data-auto-animate"

`.unshift(v)`

Add a value to the start (`0`)

```js
priorityQueue.unshift(importantTask);
```

[comment]: # "!!! data-auto-animate"

`.shift()`

Remove a value from the start (`0`)

```js
let nextJob = jobQueue.shift();
```

[comment]: # "!!! data-auto-animate"

**`.concat(arr)`**

```js
let guests = adults.concat(minors);
```

[comment]: # "!!! data-auto-animate"

### Honorable Mention

[comment]: # "!!! data-auto-animate"

**`.join(str)`**

[comment]: # "!!! data-auto-animate"

`.join(str)`

Create a CSV or some such

```js
let salutation = ["Mr.", "John", null, "Smith", null]
  .filter(Boolean)
  .join(" ");

// "Mr. John Smith"
```

[comment]: # "!!! data-auto-animate"

`.join(str)`

Create a CSV or some such

- variadic & sparse lists
- NO final delimiter

[comment]: # "!!! data-auto-animate"

### Bonus Round

**`.remove()`**

[comment]: # "!!! data-auto-animate"

```js
function remove(arr, i) {
  return arr.splice(i, 1)[0];
}
```

```js
function removeOne(arr, el) {
  let i = arr.indexOf(el);
  if (i > -1) {
    return arr.splice(i, 1)[0];
  }
}
```

```js
let leftovers = questionables.filter(isGood);
```

[comment]: # "!!! data-auto-animate"

But... why not _just_ `.forEach()`?

[comment]: # "!!! data-auto-animate"

But... why not _just_ `.forEach()`?

- chaining

[comment]: # "!!! data-auto-animate"

But... why not _just_ `.forEach()`?

- chaining
- (cool?)

[comment]: # "!!! data-auto-animate"

But... why not _just_ `.forEach()`?

- chaining
- (cool?)
- readability (smaller code blocks)
  - (at the expense of performance)

[comment]: # "!!! data-auto-animate"

But... why not _just_ `.forEach()`?

- chaining
- (cool?)
- readability (smaller code blocks)
  - (at the expense of performance)
- side effects

[comment]: # "!!! data-auto-animate"

Q&A

[comment]: # "!!!"

### Thanks

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

FIN
