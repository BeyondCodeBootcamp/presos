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

[comment]: # "!!!"

async / await

goroutines

[comment]: # "!!!"

- https://go.dev/doc/effective_go
  - https://go.dev/doc/effective_go#names

[comment]: # "!!!"

<table><tr>

<td><small>
1. Effective Go<br />
2. Install<br />
3. IDE Tooling<br />
4. eXtended Library<br />
4. <code>go mod</code><br />
5. <code>./hello/</code><br />
6. <code>./internal/</code><br />
7. <code>go generate</code><br />
9. <code>tools.go</code><br />
</small></td>

<td><small>
10. <code>./vendor/</code><br />
11. Modules (Plural)<br />
12. <code>./cmd/</code><br />
13. <code>godoc</code><br />
14. <code>version</code><br />
15. <code>embed</code><br />
16. <code>goreleaser</code><br />
17. <code>webi</code><br />
18. CGO w/ <code>zig</code><br />
</small></td>

</tr></table>

<!--
- install
- version (semver with git tags)
- embed (including files in the binary)
- tools/tools.go
- standard flags (version, help, etc)
- godoc
- goreleaser
- webi
- CGO with Zig
-->

[comment]: # "!!! data-auto-animate"

# 0. Why Go?

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

- Learn it in a Weekend
- [Go Proverbs](https://go-proverbs.github.io/)
- Cross-platform to boot

[comment]: # "!!! data-auto-animate"

## 1. Hello (Effective) Go

[comment]: # "!!!"

- Go Proverbs
  - [Rob Pike's Talk](https://www.youtube.com/watch?v=PAAkCSZUG1c)
  - [Poster](https://github.com/BeyondCodeBootcamp/go-proverbs/)
    <br> <br>
- Effective Go
  - [go.dev/doc/effective_go](https://go.dev/doc/effective_go)
    <br> <br>
- [Creeds of Craftsmanship . com](https://creedsofcraftsmanship.com/)
  - [Simplicity is Complicated](https://www.youtube.com/watch?v=rFejpH_tAHM)
  - [Things in Go I Never Use](https://www.youtube.com/watch?v=5DVV36uqQ4E)

[comment]: # "!!!"

# 2. Hello Go

[comment]: # "!!!"

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

```sh
go run ./hello.go
```

[comment]: # "!!!"

Go's JSON Download API

<https://golang.org/dl/?mode=json&include=all>

[comment]: # "!!!"

1. untar to `~/.local/opt`
2. symlink libs and bin
3. update `PATH`

[comment]: # "!!!"

Webi: [webinstall.dev/golang](https://webinstall.dev/golang)

```sh
# Linux, Mac
curl -sS https://webi.sh/golang | sh
source ~/.config/envman/PATH.env
```

```sh
# Windows
curl.exe https://webi.ms/golang | powershell
```

[comment]: # "!!!"

Update or Switch versions

```bash
webi golang@1.18
```

[comment]: # "!!!"

- 💪 Go Download API + Webi
- ⚠️ <https://golang.org/dl/> <!-- (`tar`, _not_ pkg) -->
- ❌ `brew`
- 😵‍💫 `apt`
- 🐳 `FROM scratch`

[comment]: # "!!!"

## 3. Hello IDE

(vim-go)

[comment]: # "!!!"

Vim or VSCode

[comment]: # "!!!"

```bash
webi vim-essentials vim-go
```

[comment]: # "!!!"

## 4. Hello Go X

- [golang.org/x](https://pkg.go.dev/golang.org/x)
- [golang.org/x/tools/cmd](https://pkg.go.dev/golang.org/x/tools/cmd)

[comment]: # "!!!"

<table>

<tr>
<th><small>Automatic Tooling<br>(IDE, toolchain)</small></th>
<th><small>Dev Utils<br>(<code>go generate</code>)</small></th>
<th><small>Libs<br>(special purpose)</small></th>
</tr>

<tr>
<td><small><code>gopls</code></small></td>
<td><small><code>stringer</code></small></td>
<td><small><code>golang.org/x/crypto</code></small></td>
</tr>

<tr>
<td><small><code>goimports</code></small></td>
<td><small><code>godoc *</code></small></td>
<td><small><code>golang.org/x/sys/windows</code></small></td>
</tr>

<tr>
<td><small><code>godoc</code> **</small></td>
<td><small><code>embed *</code></small></td>
<td><small><code>golang.org/x/text</code></small></td>
</tr>

[comment]: # "!!!"

## 5. Hello Module

[comment]: # "!!!"

```bash
go mod init github.com/example/foo
```

[comment]: # "!!!"

```bash
go mod tidy
```

[comment]: # "!!!"

Create project

```bash
mkdir -p ./myproject/
pushd ./myproject/
```

Init with (git-ish) URL

```bash
#go mod init <package-path>
go mod init github.com/example/foo
```

```txt
go: creating new go.mod: module github.com/example/foo
```

[comment]: # "!!!"

- url-ish
- git-ish

[comment]: # "!!!"

📌 Multi-Modules

[comment]: # "!!!"

## 6. Hello Project

(Anatomy)

[comment]: # "!!!"

```txt
hello/
├── .git/
├── .ignore
├── go.mod
├── go.lock
├── hello.go
└── cmd/
   └── hello/
```

[comment]: # "!!!"

```txt
hello/
├── .git/
├── .ignore
├── go.mod
├── go.lock
├── hello.go
├── assets/
├── cmd/
│  └── hello/
├── internal/
├── migrations/
├── tools/
└── vendor/
   └── modules.txt
```

[comment]: # "!!!"

## 7. Hello `./internal/`

[comment]: # "!!!"

`./internal/` for non-exported peer packages

[comment]: # "!!! data-auto-animate"

- whole packages (not files)

[comment]: # "!!! data-auto-animate"

- whole packages (not files)
- experimental / unstable

[comment]: # "!!! data-auto-animate"

- whole packages (not files)
- experimental / unstable
- internal implementation details

[comment]: # "!!! data-auto-animate"

- whole packages (not files)
- experimental / unstable
- internal implementation details
- "private"

[comment]: # "!!! data-auto-animate"

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

## 9. Hello `./tools/`

[comment]: # "!!!"

`./tools/tools.go`:

```go
//go:build tools

package tools

import (
    // for the 'stringer' command
    _ "golang.org/x/tools/cmd/stringer"
)
```

[comment]: # "!!!"

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

## 11. Hello Module(s)

(Plural)

[comment]: # "!!!"

(limit dependency hell)

[comment]: # "!!!"

```txt
hello/
├── go.mod
├── go.lock
├── cmd/
│  └── hello/
│     ├── go.mod
│     └── go.lock
└── examples/
   ├── go.mod
   └── go.lock
```

[comment]: # "!!!"

- [Golang Migrate](https://github.com/golang-migrate/migrate)'s
  [go.mod](https://github.com/golang-migrate/migrate/blob/master/go.mod)

[comment]: # "!!!"

## 12. Hello `./cmd/`

[comment]: # "!!!"

```txt
hello/
└── cmd/
   ├── hello/
   │  ├── main.go
   │  └── world.go
   └── goodbye/
      └── main.go
```

[comment]: # "!!!"

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello, World!")
}
```

[comment]: # "!!!"

```bash
go build -mod=vendor -o hello ./cmd/hello/

go build -mod=vendor -o goodbye ./cmd/goodbye/
```

[comment]: # "!!!"

Q&A

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

FIN
