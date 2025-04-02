# You might not need Cobra

<small><a href="https://beyondcodebootcamp.github.io/presos/go-flag/">beyondcodebootcamp.github.io/presos/go-flag/</a></small>

---

# Go Flag, and Flags

<https://pkg.go.dev/flag>

---

## AJ ONeal

[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86) <br>
[github.com/therootcompany](https://github.com/therootcompany/)

<br>

Deep-Learner

Dangerous Wrong Thinker

---

# Gun for Hire

<br>

🐹 Go 📦 Node 🦎 Zig

🛜 Net 🔐 Sec 🐧 Proxmox

<br>

<aj@therootcompany.com>

---

Utah Colo on Meetup

<https://www.meetup.com/utah-colo/>

---

```go
-flag
--flag   // double dashes are also permitted
-flag=x
-flag x  // non-boolean flags only
```

---

# A Long Time Ago

## In a Shell, Far, Far Away...

---

## POSIX

1. Strings
2. Flags
3. Options (GNU)
4. Arguments

<https://gist.github.com/coolaj86/1759b70e72f038869b7bf87816d9dc2e>

---

## 1. POSIX Strings

```sh
expression
'string literal'
"string expression"
```

---

### Whitespace-delimited

```sh
echo foo bar baz
echo   foo   bar   baz
echo '   foo   bar   baz   '
```

---

### String Literals

Same as Go's `` ` `` string literals:

- _absolutely_ literal
- _NO_ escapes

---

### String Literals

```text
echo '$foo \'
echo 'bar
      baz'
```

---

### String Expressions

Handle escape sequences, and `$`, `$(...)`, `${...}` expressions.

---

### String Expressions

```sh
echo "$foo"
echo "Filename: $(date '+%F_%H.%M.%S')"
```

---

### String Expr vs Expr

```sh
echo "$(echo '   foo   bar   baz   ')"
echo $(echo '   foo   bar   baz   ')
```

---

### Expressions

All of the goodies of string expressions, plus...

```sh
echo
echo $PATH
echo (echo "Hello, World!")
{
    printf 'Hello, '
    echo 'World!'
} > greeting.txt
cmd_curl="$(echo "curl -fsSL")"
$cmd_curl 'https://example.com'
"$cmd_curl" 'https://example.com'
```

---

### Pop Quiz!

```text
echo string' # not a comment
       string literal # also not a comment
                     \'\'"string expression
                                        \""\\# word # comment
```

---

### 🫣 Answer

```text
string # not a comment
       string literal # also not a comment
                     \'string expression
                                        "\# word
```

---

## Bonus: Args All the Way Down

```sh
'echo' 'foo' 'bar' 'baz'
```

Note: this is a property of the shell

---

## 2. POSIX Flags

Flags are all arguments that:

- begin with '-'
- until the first argument that _doesn't_ begin with '-'
- or '--'

---

```sh
-flag1
-flag1 --flag2
-flag1 --flag2 arg1
-flag1 --flag2 arg1 -arg2
-flag1 --flag2 -- -arg1
```

---

### Escaping Flags

```sh
touch 'foo' -rf
rm -- -rf
```

---

## 2. GNU Opts

Options are arguments to a flag

```sh
foo --bar ./baz

foo --bar=./baz
```

---

Be wary...

```sh
foo --bar ~/baz

foo --bar=~/baz
```

---

## 3. Arguments, again

The first argument after `--`, or not preceded by an option flag.

```sh
tar -cf ./etc.tar /etc
```

---

## Go Flag

```go
import (
    "flag"
)

func main() {
    name := flag.String("name", "", "the user's real name")
    flag.Parse()

    // ...
}
```

---

### Rule #1: There are no Rules

```go
import (
    "os"
)

func main() {
    if len(os.Args) > 1 {
        switch os.Args[1] {
            case "-V", "--version", "version":
                printVersion()
                return
        }
    }

    // ...
}
```

---

- https://yourbasic.org/golang/command-line-arguments/
- https://gobyexample.com/command-line-flags
- https://pkg.go.dev/flag

---

### Rule #2: Avoid pointers

```go
func main() {
    var verbose bool
    var email string

    flag.BoolVar(&verbose, "verbose", false, "show lots of detail")
    flag.StringVar(&email, "email", "", "show lots of detail")
}
```

---

### Rule #3: Create an instance

```go
func main() {
    var verbose bool

	mainFlags := flag.NewFlagSet("", flag.ContinueOnError)
    mainFlags.BoolVar(&verbose, "verbose", false, "show lots of detail")

    if err := mainFlags.Parse(); err != nil {
        fmt.Println(err)

        mainFlags.Usage()
        os.Exit(1)
        return
    }

    // ...
}
```

---

- https://gobyexample.com/command-line-subcommands

---

### How to know a flag was set

```go
func isFlagSet(name string) bool {
    found := false

    flag.Visit(func(f *flag.Flag) {
        if f.Name == name {
            found = true
        }
    })
    return found
}
```

---

END

---

Q&A
