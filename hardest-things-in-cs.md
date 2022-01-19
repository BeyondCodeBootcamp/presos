[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# The 2 Hardest Things

in Computer Science...

[comment]: # "!!! data-auto-animate"

# The 2 Hardest Things

in Computer Science...

1.  Caching

[comment]: # "!!! data-auto-animate"

# The 2 Hardest Things

in Computer Science...

1.  Caching
2.  Naming Things

[comment]: # "!!! data-auto-animate"

# The 2 Hardest Things

in Computer Science...

1.  Caching
2.  Naming Things
3.  Off-by-one Errors

[comment]: # "!!! data-auto-animate"

AJ ONeal <br> [@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!! data-auto-animate"

oh...

[comment]: # "!!! data-auto-animate"

# The _3_ Hardest Things

in Computer Science...

[comment]: # "!!! data-auto-animate"

(note\: not presented in alphabetical order)

[comment]: # "!!! data-auto-animate"

# 3. Off-by-One

[comment]: # "!!! data-auto-animate"

## Count to 10

[comment]: # "!!! data-auto-animate"

(I'll wait)

[comment]: # "!!! data-auto-animate"

How many numbers did you count?

[comment]: # "!!! data-auto-animate"

How many numbers did you count?

<small>(_not_ what did you count to)</small>

[comment]: # "!!! data-auto-animate"

11

[comment]: # "!!! data-auto-animate"

11

<small>_Right?_</small>

[comment]: # "!!! data-auto-animate"

## Trick Q #1a

How **_many_** numbers are in this range?

[comment]: # "!!! data-auto-animate"

## Trick Q #1a

How **_many_** numbers are in this range?

```rs
for i in 0..10 {
    // ...
}
```

[comment]: # "!!! data-auto-animate"

## Trick Q #1a

How **_many_** numbers are in this range?

```rs
let mut count = 0;

for i in 0..10 {
    count += 1
}

println!("{}", count);
```

[comment]: # "!!! data-auto-animate"

## Trick Q #1b

**_Which_** numbers are in this range?

[comment]: # "!!! data-auto-animate"

## Trick Q #1b

**_Which_** numbers are in this range?

```rs
for i in 0..10 {
    // ...
}
```

[comment]: # "!!! data-auto-animate"

## Trick Q #1b

**_Which_** numbers are in this range?

```rs
for i in 0..10 {
    println!("Number: {}", i)
}
```

[comment]: # "!!! data-auto-animate"

## Trick Q #1c

How about **_this_** range?

```rs
for i in 1..10 {
    // ...
}
```

[comment]: # "!!! data-auto-animate"

## Trick Q #1d

Or **_this_** range?

```rs
for i in 0...10 {
    // ...
}
```

[comment]: # "!!! data-auto-animate"

## Trick Q #2

What's the **_first_** element in this array?

```rs
let fruits = vec![
    "apples",
    "bananas",
    "cherries",
    "durians",
    "elderberries",
    // ...
];
```

[comment]: # "!!! data-auto-animate"

Are you sure?

[comment]: # "!!! data-auto-animate"

Are you sure?

```rs
let fruits = vec![
    "apples",
    "bananas",
    "cherries",
    "durians",
    "elderberries",
    // ...
];
```

```rs
println!("{}", fruits[1])
```

[comment]: # "!!! data-auto-animate"

Are you sure?

```rs
let fruits = vec![
    "apples",
    "bananas",
    "cherries",
    "durians",
    "elderberries",
    // ...
];
```

```rs
println!("{}", fruits[1])
```

```rs
"bananas"
```

[comment]: # "!!! data-auto-animate"

So...

[comment]: # "!!! data-auto-animate"

## Trick Q #3

[comment]: # "!!! data-auto-animate"

## Trick Q #3

Which fruits would this range print?

[comment]: # "!!! data-auto-animate"

## Trick Q #3

Which fruits would this range print?

```rs
let fruits = vec![
    "apples",
    "bananas",
    "cherries",
    "durians",
    "elderberries",
    // ...
];
```

```rs
for i in 2..5 {
    // ...
}
```

[comment]: # "!!! data-auto-animate"

What do you get when you mix an Elephant + a Rhino?

![](https://dianacooper.com/wp-content/uploads/2020/08/Elephant-Rhino-Prayer-backdrop-scaled.jpg)

[comment]: # "!!! data-auto-animate"

!["elephino"](http://www.freakingnews.com/pictures/14000/Rhino-Elephant-14396.jpg)

[comment]: # "!!! data-auto-animate"

## Count to 10

[comment]: # "!!! data-auto-animate"

## Count to 10

_...again_

[comment]: # "!!! data-auto-animate"

No! Wait!

[comment]: # "!!! data-auto-animate"

## Trick Q #4a

Can you find the needle in this haystack?

[comment]: # "!!! data-auto-animate"

## Trick Q #4a

Can you find the needle in this haystack?

```js
let index = "hello".indexOf("h");
```

[comment]: # "!!! data-auto-animate"

## Trick Q #4a

Can you find the needle in this haystack?

```js
let index = "hello".indexOf("h");
// 0
```

[comment]: # "!!! data-auto-animate"

## Trick Q #4b

How about _this_ one?

```js
let index = "haystack".indexOf("needle");
```

[comment]: # "!!! data-auto-animate"

## Trick Q #4b

How about _this_ one?

```js
let index = "haystack".indexOf("needle");
// -1
```

[comment]: # "!!! data-auto-animate"

## Trick Q #4c

Which fruit will this select?

[comment]: # "!!! data-auto-animate"

## Trick Q #4c

Which fruit will this select?

```js
let arr = ["apples", "bananas", "cherries"];

arr[arr.length];
```

[comment]: # "!!! data-auto-animate"

## Trick Q #4c

And this one?

[comment]: # "!!! data-auto-animate"

## Trick Q #4c

And this one?

```js
let arr = [];

arr[arr.length];
```

[comment]: # "!!! data-auto-animate"

## Count to 10

_...one last time_

[comment]: # "!!! data-auto-animate"

Not to mention

-   Octal (8) 0..7

[comment]: # "!!! data-auto-animate"

Not to mention

-   Octal (8) 0..7
-   Hex (16) 0-9,A-F

[comment]: # "!!! data-auto-animate"

Not to mention

-   Octal (8) 0..7
-   Hex (16) 0-9,A-F
-   Byte (256) 0..255

[comment]: # "!!! data-auto-animate"

Or even typos

```js
// empty an array
arr.splice(0);

// copy an array
arr.slice(0);
```

[comment]: # "!!! data-auto-animate"

Or _slightly_ different APIs

```js
"foobar".substring(3, 4);
// b

"foobar".substr(3, 4);
// bar
```

[comment]: # "!!! data-auto-animate"

Want to _really_ understand off-by-one errors?

[comment]: # "!!! data-auto-animate"

Want to _really_ understand off-by-one errors?

Implement **Chess** in a 1-D Array.

[comment]: # "!!! data-auto-animate"

Want to _really_ understand off-by-one errors?

Implement **Chess** in a 1-D Array.

<small>hint: you could use 65 board squares (instead of 64)</small>

[comment]: # "!!! data-auto-animate"

Want to _really_ understand off-by-one errors?

Implement **Chess** in a 1-D Array.

<small>hint: you could use 65 board squares (instead of 64)</small>

<small>though... it might not even help</small>

[comment]: # "!!! data-auto-animate"

# Naming things

[comment]: # "!!! data-auto-animate"

To-do:

-   https://youtu.be/BXRgZpxjqJ0?t=600
-   https://youtu.be/ELTZkbHJ-Xg?t=600

[comment]: # "!!! data-auto-animate"

What should we call this collection of functions?

[comment]: # "!!! data-auto-animate"

What should we call this collection of functions?

-   login()

[comment]: # "!!! data-auto-animate"

What should we call this collection of functions?

-   login()
-   verify()

[comment]: # "!!! data-auto-animate"

What should we call this collection of functions?

-   login()
-   verify()
-   createUser()

[comment]: # "!!! data-auto-animate"

-   Auth?

[comment]: # "!!! data-auto-animate"

-   Auth?
-   User?

[comment]: # "!!! data-auto-animate"

-   Auth?
-   User?
-   Session?

[comment]: # "!!! data-auto-animate"

Probably.

[comment]: # "!!! data-auto-animate"

How about a package with these?

-   map()

[comment]: # "!!! data-auto-animate"

How about a package with these?

-   map()
-   reduce()

[comment]: # "!!! data-auto-animate"

How about a package with these?

-   map()
-   reduce()
-   leftPad()

[comment]: # "!!! data-auto-animate"

How about a package with these?

-   map()
-   reduce()
-   leftPad()
-   unique()

[comment]: # "!!! data-auto-animate"

How about a package with these?

-   map()
-   reduce()
-   leftPad()
-   unique()
-   divide()

[comment]: # "!!! data-auto-animate"

-   stuff?

[comment]: # "!!! data-auto-animate"

-   stuff?
-   lodash?

[comment]: # "!!! data-auto-animate"

-   stuff?
-   lodash?
-   dependency hell

[comment]: # "!!! data-auto-animate"

-   stuff?
-   lodash?
-   **_dependency hell_**

[comment]: # "!!! data-auto-animate"

Industry Standard Terms

[comment]: # "!!! data-auto-animate"

Industry Standard Terms

-   map vs migrate vs transform

[comment]: # "!!! data-auto-animate"

Industry Standard Terms

-   token
-   code
-   secret

[comment]: # "!!! data-auto-animate"

Industry Standard Terms

-   PK is Private Key... or Public Key?
-   API Key or Secret Key?
-   Client ID vs Consumer ID

[comment]: # "!!! data-auto-animate"

Think back to Chess

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

-   Slots?

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

-   Slots?
-   Places?

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

-   Slots?
-   Places?
-   Squares?

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

-   Slots?
-   Places?
-   Squares?
-   Cells?

[comment]: # "!!! data-auto-animate"

What do you call where the pieces go?

-   Slots?
-   Places?
-   Squares?
-   Cells?
-   Thingies?

[comment]: # "!!! data-auto-animate"

Oh!

[comment]: # "!!! data-auto-animate"

Oh!

How about just `b[i]`?

[comment]: # "!!! data-auto-animate"

Oh!

How about just `b[i]`?

😈

[comment]: # "!!! data-auto-animate"

What does this even do?

[comment]: # "!!! data-auto-animate"

What does this even do?

```js
function limit(list) {
    return list.filter(function (item) {
        return item.parts.some(function (part) {
            return part.complete;
        });
    });
}
```

[comment]: # "!!! data-auto-animate"

!["elephino"](http://www.freakingnews.com/pictures/14000/Rhino-Elephant-14396.jpg)

[comment]: # "!!! data-auto-animate"

...

[comment]: # "!!! data-auto-animate"

Naming stuff is important

[comment]: # "!!! data-auto-animate"

Naming stuff is important

... but hard

[comment]: # "!!! data-auto-animate"

# Caching & Invalidating

[comment]: # "!!! data-auto-animate"

Trick Question #B

[comment]: # "!!! data-auto-animate"

Ever given a girlfriend (or sibling) a key to...

[comment]: # "!!! data-auto-animate"

Ever given a girlfriend (or sibling) a key to...

-   your apartment?

[comment]: # "!!! data-auto-animate"

Ever given a girlfriend (or sibling) a key to...

-   your apartment?
-   car?

[comment]: # "!!! data-auto-animate"

and it turns out...

[comment]: # "!!! data-auto-animate"

and it turns out...

they is CRAZY!!!

[comment]: # "!!! data-auto-animate"

(you can't invalidate a copy you don't control)

[comment]: # "!!! data-auto-animate"

Trick Question #8

Have you ever sat through a roll call in school?

[comment]: # "!!! data-auto-animate"

Trick Question #8

Have you ever sat through a roll call in school?

> If you're absent, raise your hand

[comment]: # "!!! data-auto-animate"

Trick Question #2

Are you familiar with daylight savings?

[comment]: # "!!! data-auto-animate"

How do you schedule an event 6 months in advance?

[comment]: # "!!! data-auto-animate"

How do you schedule an event 6 months in advance?

... or 2 years in the future?

[comment]: # "!!! data-auto-animate"

Trick Question #1

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice
-   clear cache

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice
-   clear cache
-   clear cookies

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice
-   clear cache
-   clear cookies
-   clear cache, cookies, & localStorage

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice
-   clear cache
-   clear cookies
-   clear cache, cookies, & localStorage
-   turn it off and on again

[comment]: # "!!! data-auto-animate"

Ever tried to use a React app?

-   reload
-   reload twice
-   clear cache
-   clear cookies
-   clear cache, cookies, & localStorage
-   turn it off and on again
-   delete and reinstall... your OS

[comment]: # "!!! data-auto-animate"

![](https://i.redd.it/ea4wrrd22yv41.jpg)

[comment]: # "!!! data-auto-animate"

Trick Question #10

How do you update a website?

[comment]: # "!!! data-auto-animate"

Trick Question #10

How do you update a website?

-   When the content changes?

[comment]: # "!!! data-auto-animate"

Trick Question #10

How do you update a website?

-   When the content changes?
-   When the theme is changed?

[comment]: # "!!! data-auto-animate"

Trick Question #10

How do you update a website?

-   When the content changes?
-   When the theme is changed?
-   When the related articles change?

[comment]: # "!!! data-auto-animate"

Trick Question #10

How do you update a website?

-   When the content changes?
-   When the theme is changed?
-   When the related articles change?
-   When the author info changes?

[comment]: # "!!! data-auto-animate"

Plus...

[comment]: # "!!! data-auto-animate"

Plus...

You also have all the **off-by-one** problems too.

[comment]: # "!!! data-auto-animate"

Plus...

You also have all the **off-by-one** problems too.

😈

[comment]: # "!!! data-auto-animate"

Or take the opposite approach:

[comment]: # "!!! data-auto-animate"

Or take the opposite approach:

Have you ever tried to use GraphQL?

[comment]: # "!!! data-auto-animate"

<video controls autoplay loop preload="auto" muted>
<source src="https://video.twimg.com/tweet_video/E_VdvegXMAgjuYS.mp4" />
</video>

[comment]: # "!!! data-auto-animate"

# Solutions?

[comment]: # "!!! data-auto-animate"

## Hashes

[comment]: # "!!! data-auto-animate"

## Hashes

-   app.js?hash=**_abc123_**

[comment]: # "!!! data-auto-animate"

## Hashes

-   app.js?hash=**_abc123_**
-   app.**_abc123_**.js

[comment]: # "!!! data-auto-animate"

## TTL

[comment]: # "!!! data-auto-animate"

## TTL

-   Seconds
-   UTC
-   Local + Offset + Timezone

[comment]: # "!!! data-auto-animate"

I dunno...

[comment]: # "!!! data-auto-animate"

I dunno...

be SMART

[comment]: # "!!! data-auto-animate"

I dunno...

be SMART

-   Fresh
-   Stale
-   Expired

[comment]: # "!!! data-auto-animate"

NOT Service Workers!

[comment]: # "!!! data-auto-animate"

NOT Service Workers!

😬

[comment]: # "!!! data-auto-animate"

# Questions?

[comment]: # "!!! data-auto-animate"

-   👍 Like
-   🔔 Sub [youtube.com/coolaj86](https://youtube.com/coolaj86)
-   ➡️ Follow [twitch.tv/coolaj86](https://twitch.tv/coolaj86)
-   🖱 Click ALL-THE-THINGS!

[comment]: # "!!! data-auto-animate"
