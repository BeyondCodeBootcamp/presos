## Sqlc + Postgres + Go

A winning combo

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

🛜 Net 🔐 Sec 🐧 POSIX

<br>

<aj@therootcompany.com>

---

# Brought to you in part by

- BNNA: https://bnna.net
- PaperOS: https://paperos.com

---

# SQLC: The Anti-ORM

> Cut out the middle-man, and save!

---

`./sql/queries/todos.sql`:

```sql
-- name: All :many
SELECT
    "uuid",
    "task",
    "priority",
    "group",
    "created_at",
    "completed_at"
FROM
    "todos"
WHERE
    "group" = ANY(sqlc.arg('group')::text[])
ORDER BY
    "priority"
;
```

---

`./db/todos.go`

```go
import (
    "context"
    "os"
    "git.example.com/todos/db/todos"
    "github.com/jackc/pgx/v5/pgxpool"
)

func main() {
    pgURL := os.Getenv("PG_URL")
    pgPool, err := pgxpool.Connect(context.Background(), pgURL)
    defer dbPool.Close()
    TodosQueries := todos.New(pgPool)
    todoRows, err := TodosQueries.All(context.Background())
    // ...
}
```

---

# Overview

- SQLC YAML
- SQLC Comments
- Parameterization
- `IN` vs `= ANY`
- Dynamic Queries
- Insert (and Return)
- Many Rows, Many Fields
- Many Rows, Single Field
- Single Row, Many Fields
- Single Row, Single Field

---

# SQLC Annotations

```sql
-- name: <name> <command>
```

```slql
-- name: InsertOne :exec
-- name: InsertAndReturnOne :one

-- name: ByID :one
-- name: ByGroup :many
```

See <https://docs.sqlc.dev/en/latest/reference/query-annotations.html>.

---

# Result Annotations

```sql
-- name: InsertOne :execlastid
-- (returns id)

-- name: DeleteSome :execresult
-- (returns number of affected rows)

-- name: DeleteAll :execrows
-- (returns affected rows)
```

See <https://docs.sqlc.dev/en/latest/reference/query-annotations.html>.

---

# pgx/v5 Annotations

```text
:batchexec
:batchone
:batchmany
```

```text
:copyfrom
```

See <https://docs.sqlc.dev/en/latest/reference/query-annotations.html>.

---

# Parameterization

```sql
-- name: OneByID :one
SELECT "slug"
FROM "todos"
WHERE "id" = $1 // 🤷‍♂️
LIMIT 1;
```

```sql
-- name: OneByID :one
SELECT "slug"
FROM "todos"
WHERE "id" = sqlc.arg('id') // ✅
LIMIT 1;
```

---

# Insert & Return Row

```sql
-- name: OneByID :one
INSERT INTO "todos" (
    "uuid", "task", "priority", "group", "created_at", "completed_at"
) VALUES (
    sqlc.argv('uuid'),
    sqlc.argv('task'),
    sqlc.argv('priority'),
    sqlc.argv('group'),
    sqlc.argv('created_at'),
    sqlc.argv('completed_at')
) RETURNING *;
```

---

# One Row, Single Value

```sql
-- name: OneByID :one
SELECT
    "slug"
FROM
    "todos"
WHERE
    "id" = sqlc.arg('id')
LIMIT 1
;
```

(0 results = not found error)

---

# Many Rows, Single Value

```sql
-- name: AllByID :many
SELECT
    slug
FROM
    todos
;
```

---

See also: <https://docs.sqlc.dev/en/latest/reference/config.html>

`./sqlc.yaml`:

```yaml
version: "2"
sql:
  - engine: "postgresql"
    queries: "./sql/queries/todos/"
    schema: "./sql/migrations/"
    gen:
      go:
        sql_package: "pgx/v5"
        package: "todos"
        out: "./db/todos/"
        emit_json_tags: true
        json_tags_case_style: "snake"
        overrides:
          - column: "todos.created_at"
            go_struct_tag: 'json:"-"'
```
