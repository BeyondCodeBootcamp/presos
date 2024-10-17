## Passkeys are Kinda Great

<center><img src="https://github.com/user-attachments/assets/a5f95f86-2c64-4a72-bd81-01e68cfda991" style="width: 60cqw;" /></center>

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

# Act I: The Happy Path™

<center><img src="https://private-user-images.githubusercontent.com/122831/377632002-a5f95f86-2c64-4a72-bd81-01e68cfda991.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjkxOTg5NTcsIm5iZiI6MTcyOTE5ODY1NywicGF0aCI6Ii8xMjI4MzEvMzc3NjMyMDAyLWE1Zjk1Zjg2LTJjNjQtNGE3Mi1iZDgxLTAxZTY4Y2ZkYTk5MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAxN1QyMDU3MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00Yzc4YWU3ZjM0MzIyYzQ1OTJhMTFjZDNjYTJiNjc5NDYxNDYxMTE1ZTgxZGU3OTVmMGQ4ZjUxNjAxNDMzODY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pLUXt2zlQhmux7N7GZc6QKZJV_Ad4LkoLGdgzTzb-e8" style="width: 60cqw;" /></center>

---

# Brought to you in part by

- PaperOS: https://paperos.com
- Kyle Simpson: https://x.com/@getifyX

---

# What are Passkeys?

<br>

1. A WebAuthn subset that's implemented\* and works. \
   (WebAuthn rebranded) <br> <br>
2. The Password Manager, Reloaded™. \
   (High-entropy, push-button)

---

# Platform Support

<br>

- [Baseline™](https://caniuse.com/webauthn) Browser Support
  - Brave, Chrome, Edge, Firefox, Safari,
  - Android Browser, UC Browser, WebViews <br><br>
- Universal OS / Cloud Support
  - Android, Chrome OS, iOS, Linux, macOS, Windows
  - iCloud, Google Sync, Microsoft... _thingy_ (?)

---

# Product Support

- Android _thingy_
  [(?)](https://www.reddit.com/r/UXDesign/comments/10ruff4/comment/j6yiob5/)
- Face ID
- Touch ID
- YubiKey
- Windows Hello

---

## Too New, Too Fancy?

---

Just Click "OK"

<small>(or PIN, or password)</small>

---

(true progressive enhancement)

---

<br>

# Demo

<br>

<https://passkeys.js.org>

---

# The Magic™ (Three Modes)

1. Autofill
   ```js
   let autofillCtrl = new AbortController();
   void navigator.credentials.get(autofillOpts).then(onAutofill);
   ```
2. Register
   ```js
   autofillCtrl.abort();
   let resp = await navigator.credentials.create(registerOpts);
   ```
3. Login
   ```js
   autofillCtrl.abort();
   let resp = await navigator.credentials.get(loginOpts);
   ```

---

# Passkeys

- What are Passkeys?
- Where should we set our Expectations?
- How to think about them?

---

### JAPM™

<br>

Just Another Password Manager

---

<br>
<br>

- more _secure_ for you (higher entropy, public key)
- _NOT_ more _trustworthy_
- more convenient for your customers
- a _single_ multi-factor

<br>

<small>Note to self:<br>DO NOT GO DOWN THE <em>SRP</em> OR <em>TPM</em> RABBIT
HOLES YET!</small>

---

\* <small>Apple, Brave, Google, Firefox, Microsoft, YubiCo, etc</small>

---

# List, Delete?

No.

- [How to Manage Passkeys: OS, Browser, Key, etc](https://github.com/BeyondCodeBootcamp/passkeys/issues/4)
- <chrome://settings/passkeys>

---

# Context of Passkeys

- Stronger Authentication for You
- More Convenient for Your Customers
- Single Factor
- One-to-Many
- A Common\* Subset

\* <small></small>

---

## Act II: The Quagmire™

---

> The subset of WebAuthn that's implemented\* and works.

\*: some tedious but critical assembly required

also \*: most of WebAuthn will _never_ be implemented

<!-- IKEA, but with a non-included tri-wing driver -->

---

# Passkeys Vocabulary

| Term          | Meaning                                               |
| ------------- | ----------------------------------------------------- |
| Authc         | password, magic link, passkey, otp, sign in with, etc |
| Authenticator | Authenticator, the Device or Platform                 |
| Platform      | the browser, OS, plugin, or service                   |
| Credential    | Public Key (`P-256` or `ed25519`)                     |
| Assertion     | signed server-side challenge (salt)                   |
| Challenge     | a server-side nonce                                   |
| Nonce         | arbitrary single-use data, such as a salt             |
| Salt          | random bytes, to make a hash unpredictable            |
| Passkey\*     | generally "the implementation", of WebAuthn           |

\* overloaded

---

## Passkeys Vocabulary (cont. 2)

| Term        | Meaning                                            |
| ----------- | -------------------------------------------------- |
| JSON        | -                                                  |
| Base64      | -                                                  |
| URL Base64  | Base64 but `+` => `-`, `/` => `_`, `=` => ``       |
| Private Key | `x` in `f(x) => y`, random bytes                   |
| Public Key  | `y` in `f(x) => y`, the result of the random bytes |
| Hash        | lossy matrix math (tables) on a sequence of bytes  |
| Signature   | key + salt + matrix math + curve (alt public key)  |

---

## Passkeys Vocabulary (cont. 3)

SKIP (we'll circle back)

| Term            | Meaning                                        |
| --------------- | ---------------------------------------------- |
| Relying Party   | domain name (the OG origin)                    |
| Attestation     | details about the passkey device or service    |
| CBOR            | binary JSON                                    |
| COSE            | binary JOSE (JWT)                              |
| AttToBeSigned   | a bespoke hash of the bespoke data             |
| ASN.1 / DER     | binary XML                                     |
| P1363           | WebCrypto Signatures                           |
| (bespoke)       | one-off, proprietary to WebAuthn               |
| *Foo*Credential | non-implemented WebAuthn stuff (we don't care) |

---

## On to the Implementation

---

## Platform & Autofill Support

```js
let passkeyCredential = globalThis.PublicKeyCredential;

let hasPlatformSupport =
  await passkeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable();

let hasAutofillSupport =
  await passkeyCredential?.isConditionalMediationAvailable();
```

```js
let passkeySupport = hasPlatformSupport && hasAutofillSupport;
```

---

### No Platform, No Autofill, No Service

Just Say No 🙅‍♀️

<small>diminishing returns on stuff your mom will never know</small>

---

# Process

0. (server) Challenge Generation
1. Credential Registration (`webauthn.create`)
2. (server) Credential Storage
3. Credential Authentication (`webauthn.get`)
   - (also called `assertion`)
4. (server) Credential Verification

---

## 0.a Challenge

```js
let challengeLen = 64;
let challengeBytes = new Uint8Array(challengeLen);
globalThis.crypto.randomValues(challengeBytes);

let challenge = Bytes.bufferToBase64(challengeBytes, Bytes.URL_BASE64);

DB.Nonces.set(challenge, {
  /* ... */
});
```

---

## 1.a Registration

```js
let relyingParty = {
  id: location.hostname, // cookie rules
  name: "My Brand",
};

let displayName = "...";
let email = "...";

let challenge = await App.getChallengeFor(email);

let credentialIds = await App.getCredIdsFor(email);

let userSecretLen = 64;
let userSecretBytes = new Uint8Array(userSecretLen);
globalThis.crypto.randomValues(userSecretBytes);

if (!passkeyCtrl) {
  passkeyCtrl = new AbortController();
}
```

---

## 1.b Registration

<carousel data-line-start="1" data-slides="1,2-4,22-23 | 5-9 | 10 | 11 | 12-14 | 15 | 16 | 17-21 | 20"></carousel>

```js
let credRegOpts = {
  mediation: "optional", // on button click
  signal: passkeyCtrl.signal,
  publicKey: {
    attestation: "direct",
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "preferred",
    },
    challenge: challenge,
    excludeCredentials: credentialIds, // IMPORTANT (authcs)
    pubKeyCredParams: [
      { type: "public-key", alg: -7 }, // ECDSA P-256
    ],
    rp: relyingParty,
    timeout: 180 * 1000,
    user: {
      name: email,
      displayName: displayName,
      id: userSecretBytes, // NOT an ID
    },
  },
};
```

---

## 2.b

```js
let credAuthOpts = {
  mediation: "optional", // on button click
  signal: passkeyCtrl.signal,
  publicKey: {
    attestation: "direct",
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "preferred",
    },
    challenge: challenge,
    excludeCredentials: credentialIds, // IMPORTANT (authcs)
    pubKeyCredParams: [
      { type: "public-key", alg: -7 }, // ECDSA P-256
    ],
    rp: relyingParty,
    timeout: 180 * 1000,
    user: {
      name: email,
      displayName: displayName,
      id: userSecretBytes, // NOT an ID
    },
  },
};
```

---

## 1.d Registration

References

- https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create
- https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions
- https://caniuse.com/mdn-api_publickeycredential
- https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions
- https://caniuse.com/mdn-api_credentialscontainer_create_publickey_option_extensions

---

# Process

0. (server) Challenge Generation
1. Credential Registration (`webauthn.create`)
2. (server) Credential Storage
3. Credential Authentication (`webauthn.get`)
   - (also called `assertion`)
4. (server) Credential Verification

---

# Caveats

---

## Unsupportable Features

These will probably _never_ be supported:

- passive / background / silent authentication
- cross-origin authentication

<small>unlikely that _all_ vendors will agree</small>

---

## Good Key Types:

- ✅ -7 ECDSA `P-256` (a.k.a. `ES256`, `prime256v1`)
- ⚠️ -8 EdDSA `ed25519`
  ([caniuse](https://caniuse.com/mdn-api_subtlecrypto_sign_ed25519))

---

## Can you use Passkeys without a Library?

---

# No.

<small>(well, maybe)</small>

---

## Bad Key Types

- ❌ RSA
- ❌ ECDSA `P-256k` (a.k.a. `secp256k1`)
- ❌ the other 200+ types

---

# Diving Deep

## 0.b Challenge

```js
Bytes.RFC_BASE64 = true;
Bytes.URL_BASE64 = false;

/**
 * @param {Uint8Array|ArrayBuffer?} buffer
 * @param {Boolean} [rfc]
 */
Bytes.bufferToBase64 = function (buffer, rfc) {
  let bytes = new Uint8Array(buffer);
  let binstr = String.fromCharCode.apply(null, bytes);
  let rfcBase64 = btoa(binstr);
  if (rfc) {
    return rfcBase64;
  }

  Bytes.rfcBase64ToUrlBase64(rfcBase64);
};
```

---

## 0.c Challenge

```js
/**
 * @param {String} rfcBase64
 */
Bytes.rfcBase64ToUrlBase64 = function (rfcBase64) {
  let urlBase64 = rfcBase64.replace(/=+$/g, "");
  urlBase64 = urlBase64.replace(/[/]/g, "_");
  urlBase64 = urlBase64.replace(/[+]/g, "-");

  return urlBase64;
};
```

---

# Context of this Presentation

> Flat is better than nested. \
> \- Zen of Python

> A little copying is better than a little dependency. \
> \- Go Proverbs

> Favor reading code over writing code. \
> \- Zen of Zig

---

## _Closer_ to the Metal

Maybe you're better off learning than off-loading.

---

## ... but not _the Metal_

Use abstractions to avoid confusion or _intense_ tedium.

---

# What's WebAuthn?

A suite of specifications and standards related to browser-based authentication.

FIDO rebranded.

(enterprise, government, _lots_ of backwards compatibility)

---
