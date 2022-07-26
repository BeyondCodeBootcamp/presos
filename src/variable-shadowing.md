[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Shadowing

[comment]: # "!!!"

### Useful Links

<small>Slides:
<a href="https://beyondcodebootcamp.github.io/">https://beyondcodebootcamp.github.io/</a></small>

<small>Video:
<a href="https://youtube.com/coolaj86">https://youtu.be/ID_GOES_HERE</a></small>

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

Twitch.tv/coolaj86

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if this is useful, or entertaining)</small>

[comment]: # "!!!"

# Shadowing

[comment]: # "!!! data-auto-animate"

When you want to _reuse_

[comment]: # "!!! data-auto-animate"

When you want to _reuse_

the _name_ of a variable.

[comment]: # "!!! data-auto-animate"

```rs [1-2]
let answer = "42";
let answer = answer.parse::<i32>().unwrap();
```

[comment]: # "!!!"

## Scenario

[comment]: # "!!!"

All command line args are _strings_.

[comment]: # "!!!"

(even when they're numbers)

[comment]: # "!!! data-auto-animate"

```rs [1-7]
let ageStr = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

let ageNum = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

```rs [1]
let ageStr = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

let ageNum = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

```rs [5]
let ageStr = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

let ageNum = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

But

[comment]: # "!!!"

storing _type information_

in a _name_

[comment]: # "!!!"

... is lame.

[comment]: # "!!! data-auto-animate"

```rs [1-11]
// type of age is string
let age = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

// different memory location for age, as int!
// (the other age may still be useful through other references)
let age = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

```rs [1-2]
// type of 'age' is string
let age = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

// different memory location for new 'age', as int!
// (the other age may still be useful through other references)
let age = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

```rs [6-8]
// type of 'age' is string
let age = env::args().skip(1).next()
  .unwrap();
println!("age: {}", age);

// different memory location for new 'age', as int!
// (the other age may still be useful through other references)
let age = ageStr.parse::<i32>()
  .unwrap();
println!("age: {}", age);
```

[comment]: # "!!! data-auto-animate"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
