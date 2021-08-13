[comment]: # (THEME = black)
[comment]: # (CODE_THEME = zenburn)
[comment]: # (controls: false)
[comment]: # (keyboard: true)
[comment]: # (markdown: { smartypants: true })
[comment]: # (hash: false)
[comment]: # (respondToHashChanges: false)

## All The Concurrency Models of the Rainbow 🌈

[comment]: # (!!!)

🦀 🐹 📦

[comment]: # (!!!)

## Blocking

What Concurrency is NOT

[comment]: # (!!!)

```rs
use std::net::TcpListener;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        println!("Connection established!");
    }
}
```

[comment]: # (!!!)

### Concurrency vs Parallelism

[comment]: # (!!!)

### Parallelism

```rs
for job in jobs {
  thread::spawn(|| {
      handle_job(job);
  });
}
```

[comment]: # (!!!)

### Concurrency

```js
$$('button').forEach(function (el) {
  el.addEventListener('click', function () {
    // do stuff
  });
})
```

[comment]: # (!!!)

### Types of Concurrency

[comment]: # (!!!)

# Threads

[comment]: # (!!!)

# Event Loops

[comment]: # (!!!)

# Channels

[comment]: # (!!!)

# Async/Await

[comment]: # (!!!)
