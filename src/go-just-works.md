[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Go Just Works™

The Philosophy, Language, and Tooling of Go

<!-- iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NtKBcVku6EU?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen --></iframe>

<br />

<small>(An Intro to Go for People Who Love Stuff that Just
Works, Everywhere)</small>

[comment]: # "!!!"

### Useful Links

<table>

<tr><td>
<small>Slides:</small></td><td><small>
<a href="https://beyondcodebootcamp.github.io/presos/go-just-works/">beyondcodebootcamp.github.io</a></small></td>
</tr>

<tr><td>
<small>Resources for Learning Go:</small></td><td><small>
<a href="https://github.com/BeyondCodeBootcamp/beyondcodebootcamp/issues/19">github.com/BeyondCodeBootcamp/beyondcodebootcamp/issues/19</a></small></td>
</tr>

<tr><td>
<small>Video:</small></td><td><small>
<a href="https://www.youtube.com/watch?v=__COMING_SOON__">https://youtu.be/__COMING_SOON__</a></small>
</td></tr>

<tr><td>
<small>"Hello Go" (2022)</small></td><td><small>
<a href="https://beyondcodebootcamp.github.io/presos/hello-go/">youtube.com/watch?v=NtKBcVku6EU</a></small>
</td></tr>

<tr><td>
<small>Go Proverbs (Poster):</small></td><td><small>
<a href="https://github.com/BeyondCodeBootcamp/go-proverbs/">github.com/BeyondCodeBootcamp/go-proverbs</a></small>
</td></tr>

<tr><td>
<small>Template Repo:</small></td><td><small>
<a href="https://github.com/BeyondCodeBootcamp/hello-go">github.com/BeyondCodeBootcamp/hello-go</a></small>
</td></tr>

<tr><td>
<small>Slides Builder:</small></td><td><small>
<a href="https://beyondcodebootcamp.github.io/presos/#quick-start-to-render">MD Slides</a></small>
</td></tr>

</table>

[comment]: # "!!!"

## Go Just Works™

<img title="QR Code for Go Just Works" alt="slides link" src="https://i.imgur.com/uCQJu4Y.png" width="33%">

The Philosophy, Language, <br /> and Tooling of Go

[comment]: # "!!!"

## AJ ONeal

<img title="QR Code for Go Just Works" alt="slides link" src="https://i.imgur.com/uCQJu4Y.png" width="33%">

[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[youtube.com/coolaj86](https://youtube.com/coolaj86)

[comment]: # "!!!"

## Dangerous Wrong Thinker

<img title="QR Code for Go Just Works" alt="slides link" src="https://i.imgur.com/uCQJu4Y.png" width="33%">

Equal Opportunity Offender <br> Technophobic Technologist
Extraordinairé

[comment]: # "!!!"

Useful? Entertaining?

👍 🔔 ➡️

[comment]: # "!!!"

## Part 1:

The Philosophy of Go

(is it for you?)

[comment]: # "!!!"

> Go is for web servers -
> [Rob Pike](https://www.infoq.com/presentations/Go-Google/)

[comment]: # "!!!"

- [Go Programming](https://www.youtube.com/watch?v=jgVhBThJdXc)
  (How to Think in Go) (2010)
- [Effective Go](https://go.dev/doc/effective_go) (55 pages)
- [Go at Google](https://www.infoq.com/presentations/Go-Google/)
  (2012)
- [The Go Proverbs](https://www.youtube.com/watch?v=PAAkCSZUG1c)
  (2015)
- [Simplicity is Complicated](https://www.youtube.com/watch?v=rFejpH_tAHM)
  (2015)
- [Towards Go 2](https://go.dev/blog/toward-go2) (2017)
- [Go with Versions](https://www.youtube.com/watch?v=F8nrpe0XWRg)
  (2018)
- [Practical Go](https://www.youtube.com/watch?v=gi7t6Pl9rxE)
  (2019)
- [Hello Go](https://beyondcodebootcamp.github.io/presos/hello-go/)
  (2022)
- [Go: What We Got Right & Wrong](https://www.youtube.com/watch?v=yE5Tpp2BSGw)
  (2023)
- [And more...](https://github.com/BeyondCodeBootcamp/beyondcodebootcamp/issues/19)

[comment]: # "!!!"

> A little copying is better than a little dependency.

[comment]: # "!!!"

> A language you can learn in a weekend.

[comment]: # "!!!"

### Small Language

25 Keywords & ~50 Built-ins

- https://go.dev/ref/spec#Keywords
- https://pkg.go.dev/builtin

[comment]: # "!!!"

### Big Standard Library

Batteries Included

- https://pkg.go.dev/std
- https://pkg.go.dev/golang.org/x

[comment]: # "!!!"

### No Stupid Questions

```sh
go fmt ./...
```

[comment]: # "!!!"

### No Clever Answers

<img title="Yoda: Unlearn" alt="You must unlearn what you have learned." src="https://i.imgur.com/r5tX8Dz.jpg" width="42%">

[comment]: # "!!!"

### Slow & Steady

> We did what we always do when there’s a problem without a
> clear solution: **_we waited_**.

<small>Russ Cox,
<a href="https://go.dev/blog/toward-go2">Toward Go 2</a>

[comment]: # "!!!"

> Waiting gives us more time to add **_experience and
> understanding_** of the problem and also more time to find
> a good solution.

[comment]: # "!!!"

<img title="Go Proverbs" alt="The 19 stanzas of the go proverbs by Rob Pike" src="https://github.com/BeyondCodeBootcamp/go-proverbs/raw/main/Go%20Proverbs%20(300dpi).png" width="90%">

[comment]: # "!!!"

#### Rob Pike's Reflections, 14 Years Later

<small>What We Got Right, What We Got Wrong (2023) -
<a href="https://www.youtube.com/watch?v=yE5Tpp2BSGw" target="_blank">youtube.com/watch?v=yE5Tpp2BSGw</a></small>

- Strong Standard Library
- Concurrency is First-Class
- Composition > Inheritance
- Packages that Minimize Dependency
- Fast Build & Testing
- Consistent Formatting
- Readability > Cleverness
- Compatibility Guarantee

<!--
- Community / No Factions or Language Subsets
-->

[comment]: # "!!!"

## Part 2:

The Language

[comment]: # "!!!"

- [A Tour of Go](https://go.dev/tour/welcome/1)
- [Effective Go](https://go.dev/doc/effective_go) (55 pages)
- [Go by Example](https://gobyexample.com/)
- [yourbasic.org/golang](https://yourbasic.org/golang)
- [Practical Go](https://www.youtube.com/watch?v=gi7t6Pl9rxE)
  (2019)
- [How I Write HTTP Web Services after 8 Years](https://www.youtube.com/watch?v=rWBSMsLG8po)
  (2019)

[comment]: # "!!!"

> If you're going to write a Python program, you wouldn't
> start with a C++ program and translate it line-by-line and
> expect to end up with a very well-written Python
> program. -
> [Russ Cox](https://youtube.com/watch?v=jgVhBThJdXc&t=66)

[comment]: # "!!!"

Throw away your CS degree.

[comment]: # "!!!"

- One way
- No inheritance
- No circular dependencies

[comment]: # "!!!"

<img title="Table of keywords, operators, & punctuation" alt="Table of keywords, operators, & punctuation" src="https://i.imgur.com/TNrY04k.png" width="80%">

[comment]: # "!!!"

### Static, Self-Contained Install

Friends don't let friends `apt-get`:

```sh
curl https://webi.sh/go | sh

source ~/.config/envman/PATH.env
```

```sh
~/.local/opt/go/bin  => ~/.local/opt/go-v1.22.1/
~/go/bin             => ~/.local/opt/go-bin-v1.22.1/
```

[comment]: # "!!!"

### Package

The Fundamental Unit

[comment]: # "!!!"

> Design the architecture, name the components, document the
> details.

[comment]: # "!!!"

It's about the _function_, not the _category_

```sh
go mod init 'github.com/acme/router'
```

```sh
go.mod
```

[comment]: # "!!!"

What you **won't** see

```sh
go mod init 'github.com/acme/arrayutils'
```

[comment]: # "!!!"

Explicit ancestry. No guessing.

```go
import (
    "github.com/acme/foobar/config"
    awsconfig "github.com/aws/aws-sdk-go-v2/config"
    awsiot "github.com/aws/aws-sdk-go-v2/service/iot"
)
```

[comment]: # "!!!"

### Interface

The Fundamental Type

[comment]: # "!!!"

> The bigger the interface, the weaker the abstraction.

(the ideal interface is a single method)

[comment]: # "!!!"

- shields against dependencies
- provides "generics"

[comment]: # "!!!"

- if it's public, & does stuff, make an interface
- avoid depending on interfaces

[comment]: # "!!!"

Doers only, no values

```go
type FooReadWriter interface {
    Read(p []byte) (n int, err error)
    Write(p []byte) (n int, err error)
}
```

[comment]: # "!!!"

### Concurrency

The Fundamental Concept

[comment]: # "!!!"

- Goroutines
- Channels
- Mutexes

[comment]: # "!!!"

> Concurrency is not parallelism.
>
> Channels orchestrate; mutexes serialize.

[comment]: # "!!!"

> await by default

[comment]: # "!!!"

```go
done := chan struct{}{}
go doStuff(done)
<- done
```

[comment]: # "!!!"

## 8. Hello `go generate`

[comment]: # "!!! data-auto-animate"

`generate.go`:

```go
//go:generate stringer -type=Greeting
package hello
```

[comment]: # "!!! data-auto-animate"

❌ `Makefile`

[comment]: # "!!! data-auto-animate"

❌ `Makefile`

- ❌ Cross-platform

[comment]: # "!!! data-auto-animate"

❌ `Makefile`

- ❌ Cross-platform
- 🤮 gcc toolchain

[comment]: # "!!! data-auto-animate"

`generate.go`:

```go
//go:generate go run -mod=vendor golang.org/x/tools/cmd/stringer -type=Greeting
package hello
```

[comment]: # "!!!"

## 10. Hello `./vendor/`

[comment]: # "!!! data-auto-animate"

- PREDICTABLE

[comment]: # "!!! data-auto-animate"

- PREDICTABLE
- REPRODUCIBLE

[comment]: # "!!! data-auto-animate"

- PREDICTABLE
- REPRODUCIBLE
- GUARANTEED

[comment]: # "!!! data-auto-animate"

```bash [1-2]
go mod tidy
go mod vendor
```

[comment]: # "!!!"

```bash [1-2]
go generate -mod=vendor ./...
go build -mod=vendor ./...
```

[comment]: # "!!!"

```txt
-mod=vendor
```

[comment]: # "!!!"

`.ignore`:

```txt
vendor
```

[comment]: # "!!!"

## 13. Hello `godoc`

[comment]: # "!!!"

`doc.go`:

[comment]: # "!!!"

[godoc-tricks](https://pkg.go.dev/github.com/fluhus/godoc-tricks)

[comment]: # "!!!"

## 14. Hello `version`

[comment]: # "!!!"

```go
git tag v1.0.0
```

[comment]: # "!!!"

- GoReleaser
- Go GitVer: \
  <https://github.com/therootcompany/go-gitver>

[comment]: # "!!!"

```go
var (
    version = "v0.0.0"
    date    = "0001-01-01T00:00:00Z"
    commit  = "0000000"
)
```

[comment]: # "!!!"

```go
import (
    "runtime/debug"
)

function main() {
    build := debug.ReadBuildInfo()
    fmt.Println(
        build.Main.Version,
        build.Main.Sum,
    )
}
```

[comment]: # "!!!"

```txt
-V
--version
version
-version
```

[comment]: # "!!!"

```go
if len(args) > 1 {
		arg := args[0]
		if "-V" == arg || "version" == strings.TrimLeft(arg, "-") {
				ver()
				os.Exit(0)
		}
}
```

[comment]: # "!!!"

for `help` too

[comment]: # "!!!"

```go
if len(args) > 1 {
		arg := args[0]
		if "-h" == arg || "help" == strings.TrimLeft(arg, "-") {
				ver()
				os.Exit(0)
		}
}
```

[comment]: # "!!!"

## 15. Hello `embed`

[comment]: # "!!!"

```
# Create config directory
hello init

# Serve auto-magic configurator
hello server
```

[comment]: # "!!!"

```go
package hello

import "embed"

//go:embed html/* assets/*
// FS is the virtual embedded filesystem for all the Hello World things
var FS embed.FS
```

[comment]: # "!!!"

```go
import (
	// ...
	hello "github.com/BeyondCodeBootcamp/hello-go"
)

func main() {
	f, _ := hello.FS.Open("assets/proverbs.txt")
	proverbs, _ := ioutil.ReadAll(f)
	fmt.Printf("%s", proverbs)
}
```

[comment]: # "!!! data-auto-animate"

## 16. Hello `goreleaser`

[comment]: # "!!!"

Cheat Sheet:

https://webinstall.dev/goreleaser

[comment]: # "!!! data-auto-animate"

- PREDICTABLE

[comment]: # "!!! data-auto-animate"

- PREDICTABLE
- REPRODUCIBLE

[comment]: # "!!! data-auto-animate"

- PREDICTABLE
- REPRODUCIBLE
- GUARANTEED

[comment]: # "!!!"

`.goreleaser.yml`:

```yml
builds:
  - env:
      - CGO_ENABLED=0
    main: ./main.go
    binary: mssql-to-csv
    goos:
      - linux
      - windows
    goarch:
      - amd64
      - arm64
archives:
  - format_overrides:
      - goos: windows
        format: zip
```

[comment]: # "!!!"

```txt
~/.config/goreleaser/github_token
```

<https://github.com/settings/tokens/new>

[comment]: # "!!!"

- version
- git commit
- date

[comment]: # "!!!"

`main.go`:

```go
var (
  version = "v0.0.0"
  date    = "0001-01-01T00:00:00Z"
  commit  = "0000000"
)
```

[comment]: # "!!!"

Cheat Sheet:

https://webinstall.dev/goreleaser

[comment]: # "!!!"

Q&A

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

FIN
