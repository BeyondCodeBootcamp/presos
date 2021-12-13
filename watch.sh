#!/bin/bash
set -e
set -u

if ! command -v watchexec; then
    curl -sS https://webinstall.dev/watchexec | bash
    export PATH="$HOME/.local/bin:${PATH}"
fi

watchexec -e md -w "${1}" -- mdslides "$@"
