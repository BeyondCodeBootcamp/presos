[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

# Hello Go

Hello World's Greatest Hits

[comment]: # "!!!"

### Useful Links

<small>Slides:
<a href="https://beyondcodebootcamp.github.io/presos/hello-go/">https://beyondcodebootcamp.github.io/</a></small>

<small>Video:
<a href="https://www.youtube.com/watch?v=ID_GOES_HERE">https://youtu.be/ID_GOES_HERE</a></small>

<small>Template Repo:
<a href="https://github.com/BeyondCodeBootcamp/hello-go">github.com/BeyondCodeBootcamp/hello-go</a></small>

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

❤️ 🐹

[comment]: # "!!!"

Useful? Entertaining?

👍 🔔 ➡️

[comment]: # "!!!"

# Hello Go

Hello World's Greatest Hits

[comment]: # "!!!"

A "Hello World"-style survey

of the world of Go Tooling

[comment]: # "!!!"

All the little things

from `fmt.Println()`

to `goreleaser`

[comment]: # "!!!"

- install
- go mod
- semver with git tags
- embed (including files in the binary)
- tools/tools.go
- standard flags (version, help, etc)
- godoc
- goreleaser
- webi
- CGO with Zig

[comment]: # "!!!"

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

[comment]: # "!!!"

(and cross-platform to boot)

[comment]: # "!!! data-auto-animate"

# 1. Hello Go

[comment]: # "!!!"

- <https://golang.org/dl/>
- <https://golang.org/dl/?mode=json&include=all>

[comment]: # "!!!"

`tar` is the best

- Just say no to 'pkg'
- `brew` at your own peril

[comment]: # "!!!"

Go is self-contained, conflict-free

- untar to `~/.local/opt`
- symlink libs and bin
- update `PATH`

[comment]: # "!!!"

```json
{
	"version": "go1.18.5",
	"stable": true,
	"files": [
		{
			"filename": "go1.18.5.darwin-amd64.tar.gz",
			"os": "darwin",
			"arch": "amd64",
			"version": "go1.18.5",
			"sha256": "828eeca8b5abea3e56921df8fa4b1101380a5ebcfee10acbc8ffe7ec0bf5876b",
			"size": 143880926,
			"kind": "archive"
		},
		{
			"filename": "go1.18.5.darwin-arm64.tar.gz",
			"os": "darwin",
			"arch": "arm64",
			"version": "go1.18.5",
			"sha256": "923a377c6fc9a2c789f5db61c24b8f64133f7889056897449891f256af34065f",
			"size": 138253414,
			"kind": "archive"
		}
	]
}
```

[comment]: # "!!!"

[webinstall.dev/golang](https://webinstall.dev/golang)

```bash
curl https://webinstall.dev/golang | bash
```

```bash
webi golang@1.18
```

[comment]: # "!!!"

```bash
go run ./script.go
```

[comment]: # "!!!"

# 2. Hello Go X

- [golang.org/x](https://pkg.go.dev/golang.org/x)
- [golang.org/x/tools/cmd](https://pkg.go.dev/golang.org/x/tools/cmd)

[comment]: # "!!!"

## Automatic Tooling

(IDE, toolchain)

- `gopls`
- `goimports`
- `godoc` \*

[comment]: # "!!!"

## Dev Utils

(`go generate`)

- `stringer`
- `godoc` \*
- `embed` \*

[comment]: # "!!!"

## Libs

(special purpose)

- `golang.org/x/crypto`
- `golang.org/x/net`
- `golang.org/x/sys/windows`

[comment]: # "!!!"

# 3. Hello vim-go

[comment]: # "!!!"

Vim or VSCode

[comment]: # "!!!"

```bash
webi vim-essentials vim-go
```

[comment]: # "!!!"

```go
package main

import "fmt"

func main() {
	fmt.Println("vim-go")
}
```

[comment]: # "!!!"

# 4. Hello Anatomy

[comment]: # "!!!"

```txt
hello/
├── .git/
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

# 5. Hello Module(s)

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

## 6. Hello Module(s)

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

# 7. Hello (Effective) Go

[go.dev/doc/effective_go](https://go.dev/doc/effective_go)

[comment]: # "!!!"

## Go Proverbs

- [Go Proverbs (website)](https://go-proverbs.github.io/)
- [Go Proverbs Poster](https://github.com/BeyondCodeBootcamp/go-proverbs/)
- [Go Proverbs Talk](https://www.youtube.com/watch?v=PAAkCSZUG1c)

[comment]: # "!!!"

[Creeds of Craftsmanship.com](https://creedsofcraftsmanship.com/)

[comment]: # "!!!"

# 8. Hello `./internal/`

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

# 9. Hello `./tools/`

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

# 10. Hello `./vendor/`

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

# 11. Hello `go generate`

[comment]: # "!!! data-auto-animate"

`generate.go`:

```go
//go:generate go run -mod=vendor golang.org/x/tools/cmd/stringer -type=Greeting
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

# 12. Hello `./cmd/`

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

# 9. Hello GoDoc

[comment]: # "!!!"

[godoc-tricks](https://pkg.go.dev/github.com/fluhus/godoc-tricks)

[comment]: # "!!! data-auto-animate"

# An Animated Slide

A really WOW slide

[comment]: # "!!! data-auto-animate"

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

[comment]: # "!!! data-auto-animate"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

FIN
