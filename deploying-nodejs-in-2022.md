[comment]: # "THEME = white"
[comment]: # "CODE_THEME = github"
[comment]: # "controls: false"
[comment]: # "keyboard: true"
[comment]: # "markdown: { smartypants: true }"
[comment]: # "hash: false"
[comment]: # "respondToHashChanges: false"

### Deploying

# Node.js

#### in 2022

<small>a (very simple) beginner's guide</small>

[comment]: # "!!!"

# 🤠

[comment]: # "!!!"

https://beyondcodebootcamp.github.io/presos/deploying-nodejs-in-2022/

[comment]: # "!!!"

-   Caddy: https://webinstall.dev/caddy
-   DuckDNS: https://duckdns.org
-   Digital Ocean: https://m.do.co/c/ad3b82be23f6
-   Express Starter: https://github.com/BeyondCodeBootcamp/node-express-starter/
-   Name.com: https://www.name.com/referral/13d0ac
-   Node: https://webinstall.dev/node
-   Serviceman: https://webinstall.dev/serviceman
-   Webi: https://webinstall.dev/

[comment]: # "!!!"

![](https://coolaj86.com/assets/media/coolaj86-2017.jpg)

AJ ONeal <br> [@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[twitch.tv/coolaj86](https://twitch.tv/coolaj86)

[comment]: # "!!!"

Technophobic Technologist

Dangerous Wrong Thinker

Equal Opportunity Offender

[comment]: # "!!!"

<img title="node.js: official logo" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="60%" />

https://nodejs.org/en/about/resources/

[comment]: # "!!!"

## Overview

1.  Public Key (for Login)
2.  Server (VPS)
3.  DNS (Domain Name)
4.  App "User"
5.  Launcher (systemd)

[comment]: # "!!!"

... and YOUR PROJECT

<small>(duh!)</small>

(Node.js + Git)

[comment]: # "!!!"

## Bonus Material

<small>(there will be some bonus material)</small>

[comment]: # "!!!"

## 1. Public Key

(secure)

[comment]: # "!!!"

## SSH Public Key

<a href="https://webinstall.dev/ssh-pubkey">webinstall.dev/ssh-pubkey</a>

<small>(ssh-keygen)</small>

[comment]: # "!!!"

```bash
curl -f https://webinstall.dev/ssh-pubkey | bash
```

[comment]: # "!!!"

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDC6aziziaVOvXTaHd5t+ez6vtQBIBbsHmZW/aEZgiaFxQ/IcdusfPqzyCCC7c6lhck2xDYgtg6mF4ASZ5rg0n7YvVlI70ULQE/aMp9n/p/Nb1p7qDpJLpjblFOR/p9Ewr/SI9yo44N5ElFKMvICG1LVI1uO9KEfAKs2gazRXqO6cGt0jwLwmyHdBLho8wRj89pHCXINKJ3K8SdfCCVJ/csG1IIk7Vlf+CvOInkGY2hCU1iCsUVL5fqG3+5nnaTRJQUBR2npGYJ0M4d1UjpQSKrkQyDheCJDltu4y2jpyH13y9CEW8GtIJOF4iIu+eScEdpLL6nJ8cV+Nui9vBSV+Wp app@beta.rootprojects.org
```

[comment]: # "!!!"

```txt
# My First Public Key
ssh-rsa <base64-encoded-public-key> <email-like-comment>
```

[comment]: # "!!!"

## [Digital Ocean](https://m.do.co/c/ad3b82be23f6)

<small><a href="https://m.do.co/c/ad3b82be23f6">$100 / 60 days free</a></small>

| $5/month | 1 vCPU / 1GB / 20GB     |
| -------- | ----------------------- |
| $1/month | Backups                 |
| $0       | 100% Uptime w/ Failover |
| $0       | IPv6 + Monitoring       |
| $0       | Secure SSH Login        |

[comment]: # "!!!"

### Other VPSes

-   Vultr
-   OVH
-   Scaleway

[comment]: # "!!!"

## Domain Services

| Name.com | .com, etc    | <a href="https://www.name.com/referral/13d0ac">affiliate link</a> |
| -------- | ------------ | ----------------------------------------------------------------- |
| DuckDNS  | .duckdns.org | <a href="https://duckdns.org">duckdns.org</a>                     |

[comment]: # "!!!"

## DNS Setup

-   A
-   AAAA

[comment]: # "!!!"

## User Setup

Create the `app` user with your Public Key.

[comment]: # "!!!"

```bash
ssh root@YOUR-PROJECT.duckdns.org \
    'curl https://webinstall.dev/ssh-adduser | bash'
```

[comment]: # "!!!"

```bash
ssh app@YOUR-PROJECT.duckdns.org
```

[comment]: # "!!!"

## Project Setup

-   git
-   node
-   YOUR-PROJECT

[comment]: # "!!!"

### Git Setup

[comment]: # "!!!"

Person Access Token: https://github.com/settings/tokens

[comment]: # "!!!"

```bash
export TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

```bash
git --version || sudo apt install -y git
```

```bash
git config --global url."https://api:$TOKEN@github.com/".insteadOf "https://github.com/"
git config --global url."https://ssh:$TOKEN@github.com/".insteadOf "ssh://git@github.com/"
git config --global url."https://git:$TOKEN@github.com/".insteadOf "git@github.com:"
```

<small>(todo: git-credentials)</small>

[comment]: # "!!!"

### Clone Project

[comment]: # "!!!"

```bash
git clone ssh://git@github.com:YOUR-ORG/YOUR-PROJECT.git
pushd ./YOUR-PROJECT/
```

[comment]: # "!!!"

### Project Config

```bash
npm ci --only=production
```

[comment]: # "!!!"

### Full-Blown IDE

```bash
webi vim-essentials
```

<small>(todo: vim-utf8)</small>

[comment]: # "!!!"

### Project ENVs

```bash
rsync -avhP ./example.env ./.env
vim ./.env
```

<small><a href="https://12factor.net/">12factor.net</a></small>

[comment]: # "!!!"

## Launcher

[comment]: # "!!!"

```bash
npm start
```

[comment]: # "!!!"

### serviceman

<small>(systemd on Linux)</small>

```bash
sudo env PATH="${PATH}" \
    serviceman add --username "$(whoami)" \
        --cap-net-bind -- \
    npm start
```

<small>(todo: add-service)</small>

[comment]: # "!!!"

## Bonus Material

[comment]: # "!!!"

## Just the Basics

[comment]: # "!!!"

(avoid useless abstractions, learn useful skills)

[comment]: # "!!!"

(2mb of JS for [6 lines of git](https://therootcompany.com/blog/how-github-does-smarter-shallow-clones/))

[comment]: # "!!!"

"Linux"

vs

"Deploy Node.js App"

[comment]: # "!!!"

"Web Security"

vs

"Deploy Node.js App"

[comment]: # "!!!"

"High-Availability Kubernetes Cluster Containerization"

vs

"Deploy Node.js App"

[comment]: # "!!!"

"Black Box"

vs

"Deploy Node.js App"

[comment]: # "!!!"

## npm start

```txt
package.js.main
```

```bash
server.js
app.js
```

```bash
NODE_ENV=development
PORT=3000
```

[comment]: # "!!!"

## Caddy

```bash
webi caddy
```

```bash
mkdir -p ~/srv/
touch ~/srv/Caddyfile
```

[comment]: # "!!!"

Caddyfile QuickStart

<a href="https://webinstall.dev/caddy">https://webinstall.dev/caddy</a>

[comment]: # "!!!"

```bash
sudo env PATH="${PATH}" \
    serviceman add --username "$(whoami)" \
        --name caddy --cap-net-bind -- \
    caddy run --config ./srv/Caddyfile
```

[comment]: # "!!!"

## Logs

[comment]: # "!!!"

```bash
sudo mkdir -p /var/log/journal
sudo chown -R root:systemd-journal /var/log/journal/
sudo sed -i 's/#\?Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
sudo systemctl restart systemd-journald
```

```bash
sudo journalctl -xefu YOUR-PROJECT
```

[comment]: # "!!!"

## SSH Config

[comment]: # "!!!"

```ssh
Host YOUR-PROJECT
    Hostname YOUR-PROJECT.duckdns.org

Host *
    User app
```

[comment]: # "!!!"

## Save 💰 w/ Swap Space

<a href="https://webinstall.dev/vps-addswap">https://webinstall.dev/vps-addswap</a>

[comment]: # "!!!"

```bash
export NODE_OPTIONS="--max-old-space-size=4096"
```

```bash
sudo fallocate -l 4G /var/swapfile
sudo chmod 0600 /var/swapfile
sudo mkswap /var/swapfile
```

[comment]: # "!!!"
