#!/bin/sh
set -e
set -u

b_article="$(echo "${1}" | tr -d '/' | tr -d '.')"

rm -rf ./"${b_article}"/
mkdir -p ./"${b_article}"/

{
    cat ./head.html.tmpl
    comrak --gfm ./src/"${b_article}".md
    cat ./tail.html.tmpl
} > ./"${b_article}"/index.html
echo ./"${b_article}"/index.html

ln -s '../slides.css' ./"${b_article}"/
ln -s '../slides.js' ./"${b_article}"/
