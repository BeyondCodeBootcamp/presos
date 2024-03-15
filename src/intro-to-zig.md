[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

## Intro to Zig

[comment]: # "!!!"

(in a world that already has Go and Rust)

[beyondcodebootcamp.github.io/presos/intro-to-zig](https://beyondcodebootcamp.github.io/presos/intro-to-zig/)

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

## Intro to Zig

[beyondcodebootcamp.github.io/presos/intro-to-zig](https://beyondcodebootcamp.github.io/presos/intro-to-zig/)

[comment]: # "!!!"

![](https://i.imgur.com/g8eOl9c.jpg)

[comment]: # "!!!"

## Guardrails, The Language

![](https://i.imgur.com/UJgoCT5.jpg)

[comment]: # "!!!"

> Java for people who don't hate themselves

[comment]: # "!!!"

### Go Pros

- Learn in a Weekend
- Batteries Included \
  (std lib, tooling, etc)
- Safe
- Cohesive
- Write Once, Run Anywhere™
- Fast...ish

[comment]: # "!!!"

### Go Cons

- error handling
- boilerplate
- [cgo is not Go](https://dave.cheney.net/2016/01/18/cgo-is-not-go)
- `go generate`

```go
// no hidden control flow!
n, err := r.Read(buf)
if err != nil {
  return nil, err
}
```

[comment]: # "!!!"

## Cool Kids Kool Aid

<img style="height: 400px" src="https://i.imgur.com/K00LpAz.png">

[comment]: # "!!!"

> C++ for people who care about their sanity

[comment]: # "!!!"

### Rust Pros

- Perfectly Safe
- As fast as C
- Community
- Tooling

[comment]: # "!!!"

### Rust Cons

- Learning Curve
- _Dependent_ on C
- Macros
- Drama

```text
error[E0502]: cannot borrow `vec` as mutable because it is also borrowed as immutable
 --> src/main.rs:5:5
  |
4 |     let first = &vec[0];
  |                 ---- immutable borrow occurs here
5 |     vec.push(4);
  |     ^^^ mutable borrow occurs here
```

[comment]: # "!!!"

## We Were Promised Jet-Packs

![](https://i.imgur.com/lljGPNf.png)

[comment]: # "!!!"

> C for people who want software the works

[comment]: # "!!!"

### Zig Pros

[comment]: # "!!!"

(Cross) Compile C (and `cgo`) and Rust \
 <small>(and Zig, of course!)</small>

```sh
CGO_ENABLED=1 CC="zig cc" CXX="zig cc" go test -c
```

<small><a href="https://andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html">andrewkelley.me/post/zig-cc-powerful-drop-in-replacement-gcc-clang.html</a></small>

[comment]: # "!!!"

Learn in a Week

- <https://github.com/coolaj86/dotenvman/tree/feat-zigreleaser>
- <https://www.youtube.com/watch?v=VdhFhIHWENQ>
- <https://www.youtube.com/watch?v=Wo8EtwPqCEY>

[comment]: # "!!!"

Easier to do right than wrong

```zig
const chars = try reader.readBytesNoEof(6);
// vs
const chars = reader.readBytesNoEof(6) catch |err| { ... };
```

```zig
var elems = [_][]const u8 { "water", "earth", "fire", "air" };
var nats = [_][]const u8 { "tribes", "kingdom", "nation", "nomads" };

for (elems, nats, 0..) |e, n, idx| {
   std.debug.print("{} - {s} {s}\n", .{idx, e, n});
}
```

[comment]: # "!!!"

Arenas over Ownership (or GC)

```zig
var allocator = if (builtin.mode == .Debug) blk: {
    break :blk gpa.allocator();
} else blk: {
    break :blk std.heap.page_allocator;
};
```

[comment]: # "!!!"

No Macros, Just `comptime`

```zig
fn multiply(a: i64, b: i64) i64 {
    return a * b;
}

pub fn main() void {
    const len = comptime multiply(4, 5);
    const my_static_array: [len]u8 = undefined;
}
```

[comment]: # "!!!"

"Dynamic" Types & Generics

```zig
fn pipe(reader: anytype, writer: anytype) !void {
    const bytes = try reader.readBytesNoEof(6);
    try writer.writeAll(&bytes);
    // ...
}
```

[comment]: # "!!!"

The Philosophy

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gv2I7qTux7g?start=650" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<small><a href="https://www.youtube.com/watch?v=Gv2I7qTux7g">https://youtube.com/watch?v=Gv2I7qTux7g</a></small>

[comment]: # "!!!"

The Zen of Zig

![](https://i.imgur.com/KTEzl3F.png)

[comment]: # "!!!"

### Zig Cons

- Maturity
- Autonomous Collective
