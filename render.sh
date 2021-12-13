#!/bin/bash
set -e
set -u

if ! command -v pyenv; then
    curl -sS https://webinstall.dev/pyenv | bash
fi

if [ ! -d "$HOME/.pyenv/versions/3.10.1" ]; then
    pyenv install -v 3.10.1
fi

pyenv local 3.10.1

if ! command -v mdslides; then
    python -m pip install git+https://gitlab.com/da_doomer/markdown-slides.git
fi

mdslides "$@"

#my_dir="$(basename "$1" ".md")"
#rm -rf "${my_dir}/"{dist,plugin}

#pushd "${my_dir}" > /dev/null
#ln -s ../dist .
#ln -s ../plugin .
#popd > /dev/null
