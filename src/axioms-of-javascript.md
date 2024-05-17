[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Axioms of JavaScript

[comment]: # "!!!"

<small><em>The controversial-hottake-ists guide <br> to
being boring and effective <br> in the language the world
loves to hate.</em></small>

[comment]: # "!!!"

or

> What I've learned in 15+ years of programming in
> JavaScript

[comment]: # "!!!"

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[github.com/therootcompany](https://github.com/therootcompany/)
<br> [twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

Dangerous Wrong Thinker

Equal Opportunity Offender

Technophobic Technologist Extraordinairé

[comment]: # "!!!"

## 0. Limit Usefulness

> Do one thing, and do it well - Unix Philosophy

[comment]: # "!!!"

> Perfection is achieved, not when there is nothing more to
> add, but when there is nothing left to take away. -
> Antoine de Saint-Exupéry

[comment]: # "!!!"

or

> YAGNI

[comment]: # "!!!"

0. (2). Less Magic in Code, More Magic in Tooling

[comment]: # "!!!"

LLM that shiz

[comment]: # "!!!"

## 1. No Comment

> `// don't do this`

[comment]: # "!!!"

❌

```js
// day in ms
let ms = 24 * 60 * 60 * 1000;
```

[comment]: # "!!!"

```js
let msInDay = 24 * 60 * 60 * 1000;
```

[comment]: # "!!!"

❌

```js
// hypos the thetical as an example
let x = (24 + 2) * (60 - 1) * (60 / 1000);
```

[comment]: # "!!!"

```js
let poor = 24 + 2;
let hypo = 60 - 1;
let thetical = 60 / 1000;
let example = poor * hypo * thetical;
```

[comment]: # "!!!"

## 2. Don't Make Waves

[comment]: # "!!!"

> Never `))` - not even once.

[comment]: # "!!!"

❌

```js
getArea(getX(), getY());
```

[comment]: # "!!!"

```js
let x = getX();
let y = getY();
getArea(x, y);
```

[comment]: # "!!!"

```js
getArea(x, y);
```

[comment]: # "!!!"

❌

```js
if (!ex.someComplexCheck(x)) {
  // ...
}
```

[comment]: # "!!!"

```js
let isSimple = ex.someComplexCheck(x);
if (!isSimple) {
  // ...
}
```

[comment]: # "!!!"

## 3. return something, or return nothing

[comment]: # "!!!"

❌

```js
function doStuff() {
  return doSideEffectsOnly();
}
```

[comment]: # "!!!"

❌

```js
function handler(req, res, next) {
  if (req.body.lame) {
    return next();
  }
  return res.json({ success: true });
}
```

[comment]: # "!!!"

```js
function handler(req, res, next) {
  if (req.body.lame) {
    next();
    return;
  }
  res.json({ success: true });
}
```

[comment]: # "!!!"

Bonus

```js
function handler(req, res, next) {
  if (req.body.lame) {
    void next();
    return;
  }
  void res.json({ success: true });
}
```

<small>look ma, no semis</small>

[comment]: # "!!!"

## 4. return await, or await without return

[comment]: # "!!!"

❌

```js
function doStuff() {
  return maybePromise();
}
```

[comment]: # "!!!"

```js
async function doStuff() {
  return await maybePromise();
}
```

[comment]: # "!!!"

```js
async function doStuff() {
  await sideEffectsOnly();
}
```

[comment]: # "!!!"

😵‍💫

```js
async function doStuff() {
  void (await sideEffectsOnly());
}
```

[comment]: # "!!!"

## 5. let errors bubble until they burst

> (Correct or Classify, but do not Catch)

[comment]: # "!!!"

## 6. Gatekeepers at the gates, Doorkeepers at the doors

[comment]: # "!!!"

## 7. Interfaces over Generics

[comment]: # "!!!"

## 8. No worthless abstractions

[comment]: # "!!!"

> (_Abstractions should be deep - John Ousterhout_)

[comment]: # "!!!"

## 9. But by the 3rd or 4th time, you should know what it is

[comment]: # "!!!"

## 10. await catch: Don't trade one pyramid of doom for another

[comment]: # "!!!"

## 11. It's easier to read from top to bottom

[comment]: # "!!!"

> than left to right, or right to top \
> (return early)

[comment]: # "!!!"

## 12. Optimize for the happy path (not for exceptions)

[comment]: # "!!!"

## 13. \_When it is broken, it is the right time to fix it

[comment]: # "!!!"

> - Chinese Fortune Cookie\_

[comment]: # "!!!"

## 14. The constraint of the medium defines the Art \

[comment]: # "!!!"

> "Anything goes" is _not_ a workable constraint

[comment]: # "!!!"

```php
<html>
H̷̢̙͈͙̱̙̳͓̙̎̀e̶̗̼̥͚͒́͝ ̵̨̛̝̳̲̈c̵̯̠͈̭̞͕̙͍͐̓̿͛̿̄̇̆̓̄͛̑̈̎́́o̷̹̫̯̗̱̓̑̽̍̌͛̊̔̾̎̏̉̅͋̕ͅm̷̛͔̲͙̖͙̟̲̳̭̊́͐̈̊̈͊̐̋̕ḛ̴̏̍̏̀͒̒̄͌͗͊̊͘s̶͔̯͕̞̬͔̈͐̄́͒͋̾̓̽̀̚͜͝!̴̧̛̪̪̩̱̰̺̜̺̞̘̱̞̆̄͑͋̓͌̉̆̍ ̴̧̱͍͖̫̳̲̪̖̲̝̭̱͕̤̅̊̐͆͗̽͐̑̋̎̕ḩ̸̘̝̺̯̋͋̋̉͆̉̅͑e̸̛͇̰͈̊́͑̌̈́̆͊̓͑̑̇͠ ̶̢͇͔͚̜͍͛̍̔̾̔̄̚͝ͅc̴͓̮̝̞͍̲̱͑̾̅͋̃̀̈̔̅̿̑̆̚ͅó̵̡̢̧͈̘̠͖͚̭͚̖͕͇͝ṁ̸̡͕̞̱̲͖̞̣̮̲̮͗̽̎͊̃̓̈̕͜e̷͓̎̌̉̈́̄̀̂̐̋͒͘s̵͖͉̠̱̑̍̽̓̽͒́́̚!̷̨̨̛̻̱͎̜̩̙̩̬̲̲̻͒͊̈́͊̿͂̊͘͜
> <
yolo />
```

[comment]: # "!!!"

## 15. For every metric, a counter metric

[comment]: # "!!!"

```js
// fetches the json from the url
let json = await fetch(url);
```

[comment]: # "!!!"

## 16. If it sounds cool, DON'T DO IT 🚨!

> _cool_ (adj): unintuitive, non-obvious, \
> for those in the know

[comment]: # "!!!"

END
