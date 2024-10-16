# Passkeys are Good

(and WebAuthn isn't _that_ Hard)

---

AJ ONeal <br>
[@\_beyondcode](https://twitter.com/@_beyondcode) <br>
[github.com/therootcompany](https://github.com/therootcompany/)
<br> [twitch.tv/coolaj86](https://twitch.tv/coolaj86)

---

Deep-Learner

Dangerous Wrong Thinker

Gun for Hire <aj@therootcompany.com> \
🐹 ⬡ 🦎 🛜 🔐 🐧

---

## Brought to you in part by

- PaperOS: https://paperos.com
- Kyle Simpson: https://x.com/@getifyX

---

# WebAuthn

A suite of specifications and standards related to
browser-based authentication.

FIDO rebranded.

---

# Passkeys

The subset of WebAuthn that's implemented\* and works.

WebAuthn rebranded.

---

# Demo

<https://passkeys.js.org>

---

# Demo

<https://github.com/BeyondCodeBootcamp/vanilla-webauthn>

---

# The Magic™

```js
let Creds = globalThis.navigator?.credentials;
```

```js
void Creds.get(onClickAutofillOpts).then(handleAutofill);
```

```js
passkeyCtrl.abort();
let passkey = await Creds.create(onClickNewPasskeyOpts);
```

```js
passkeyCtrl.abort();
let passkey = await Creds.get(onClickUsePasskeyOpts);
```

Note: _autofill_ is mutually exclusive and requires
`AbortController`.

---

# Context of Passkeys

- Stronger Authentication for You
- More Convenient for Your Customers
- Single Factor
- One-to-Many
- A Common\* Subset

\* <small>Apple, Brave, Google, Firefox, Microsoft, YubiCo,
etc</small>

---

## Platform Support

- MDN [Baseline™](https://caniuse.com/webauthn) Browser
  Support
  - Brave, Chrome, Edge, Firefox, Safari,
  - Android Browser, UC Browser, WebViews
- Universal Platform Support
  - Android, Chrome OS, iOS, Linux, macOS, Windows
  - iCloud, Google Sync, Microsoft... _thingy_ (?)

---

## Product Support

- Android _thingy_
  [(?)](https://www.reddit.com/r/UXDesign/comments/10ruff4/comment/j6yiob5/)
- Face ID
- Touch ID
- YubiKey
- Windows Hello

---

## Too Fancy?

---

Just Click OK

<small>(or PIN, or password)</small>

---

(true progressive enhancement)

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

## Can you use Passkeys without a Library?

---

# No.

<small>(well, maybe)</small>

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
let passkeySupport =
  hasPlatformSupport && hasAutofillSupport;
```

---

### No Platform, No Autofill, No Service

Just Say No 🙅‍♀️

<small>diminishing returns on stuff your mom will never
know</small>

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

let challenge = Bytes.bufferToBase64(
  challengeBytes,
  Bytes.URL_BASE64,
);

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
