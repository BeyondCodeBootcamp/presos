#!/bin/sh
set -e
set -u

fn_help() { (
    echo ""
    echo "USAGE"
    echo "    ./build.sh <md-file-path>"
    echo ""
    echo "EXAMPLE"
    echo "    ./build.sh ./src/my-preso.md #> ./my-preso/"
    echo ""
); }

fn_filepath_to_title() { (
    a_filename="${1}"

    # Get the base name without directory and extension
    b_basefile="$(basename "${a_filename}")"
    b_base="${b_basefile%.*}"

    # Replace underscores and hyphens with spaces
    b_title="$(printf '%s' "${b_base}" | tr '_-' '  ')"

    # Save IFS and set to space
    b_old_ifs="$IFS"
    IFS=' '
    b_new_title=""
    for b_word in $b_title; do
        if test -z "$b_word"; then
            continue
        fi
        b_first_char=$(printf '%s' "${b_word}" | cut -c1)
        b_rest=$(printf '%s' "${b_word}" | cut -c2-)
        b_first_char_upper=$(printf '%s' "${b_first_char}" | tr '[:lower:]' '[:upper:]')
        b_rest_lower=$(printf '%s' "${b_rest}" | tr '[:upper:]' '[:lower:]')
        b_word_capitalized="${b_first_char_upper}${b_rest_lower}"

        # Build the new title
        if test -z "$b_new_title"; then
            b_new_title="$b_word_capitalized"
        else
            b_new_title="$b_new_title $b_word_capitalized"
        fi
    done
    IFS="${b_old_ifs}"

    # Output the new title
    printf '%s\n' "$b_new_title"
); }

main() { (
    b_help="${1:-}"
    case "${b_help}" in
        '')
            fn_help >&2
            exit 1
            ;;
        '--help' | 'help')
            fn_help
            exit 0
            ;;
    esac

    b_filepath="${1}"
    b_filename="$(basename "${b_filepath}")"
    b_slug="$(echo "${b_filename%.*}" | tr -d '/' | tr -d '.')"
    if test -z "${b_slug}"; then
        fn_help >&2
        exit 1
    fi

    rm -rf ./"${b_slug}"/
    mkdir -p ./"${b_slug}"/

    {
        b_title="$(fn_filepath_to_title "${b_slug}")"
        b_date="$(date '+%F %H:%M')"
        # shellcheck disable=SC2002 # for more readable flow
        cat ./head.html.tmpl | sed "s/CHANGE_THE_TITLE/${b_title}/g" | sed "s/UPDATED_AT/${b_date}/g"
        comrak --gfm ./"${b_filepath}"
        cat ./tail.html.tmpl
    } > ./"${b_slug}"/index.html
    echo ./"${b_slug}"/index.html

    ln -s '../slides.css' ./"${b_slug}"/
    ln -s '../slides.js' ./"${b_slug}"/
); }

main "${@:-}"
