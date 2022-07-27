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

<table>

<tr><td>
<small>Slides:</small></td><td><small>
<a href="https://beyondcodebootcamp.github.io/presos/hello-go/">https://beyondcodebootcamp.github.io/</a></small></td>
</tr>

<tr><td>
<small>Video:</small></td><td><small>
<a href="https://www.youtube.com/watch?v=NtKBcVku6EU">https://youtu.be/NtKBcVku6EU</a></small>
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

to `goreleaser` and `webi`

[comment]: # "!!!"

<table><tr>

<td><small>
1. Install<br />
2. eXtended Library<br />
3. Effective Go<br />
4. IDE Tooling<br />
5. <code>./hello/</code><br />
6. <code>go mod</code><br />
7. <code>./internal/</code><br />
8. <code>go generate</code><br />
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

[comment]: # "!!! data-auto-animate"

(and cross-platform to boot)

[comment]: # "!!!"

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

## 2. Hello Go X

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
- `golang.org/x/sys/windows`
- `golang.org/x/text`

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

```go
package main

import "fmt"

func main() {
	fmt.Println("vim-go")
}
```

[comment]: # "!!!"

## 4. Hello Project

(Anatomy)

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

## 6. Hello (Effective) Go

[go.dev/doc/effective_go](https://go.dev/doc/effective_go)

[comment]: # "!!!"

## Go Proverbs

- [Go Proverbs (website)](https://go-proverbs.github.io/)
- [Go Proverbs Poster](https://github.com/BeyondCodeBootcamp/go-proverbs/)
- [Go Proverbs Talk](https://www.youtube.com/watch?v=PAAkCSZUG1c)

[comment]: # "!!!"

[Creeds of Craftsmanship.com](https://creedsofcraftsmanship.com/)

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

[comment]: # "!!! data-auto-animate"

## 17. Hello `webi`

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

Template Repo: <small>
<a href="https://github.com/BeyondCodeBootcamp/hello-go">github.com/BeyondCodeBootcamp/hello-go</a></small>

```txt
./dist/webi/
```

[comment]: # "!!!"

## 18. Hello `zig`

[comment]: # "!!!"

No time. 😢

[comment]: # "!!!"

[Zig makes CGO Cross-Compilation Just Work](https://dev.to/kristoff/zig-makes-go-cross-compilation-just-work-29ho)

[comment]: # "!!!"

Q&A

[comment]: # "!!!"

Thanks.

[comment]: # "!!!"

Like, Sub, & Follow

<small>(if you wannu)</small>

[comment]: # "!!!"

FIN
