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

<center><img src="https://github.com/user-attachments/assets/a5f95f86-2c64-4a72-bd81-01e68cfda991" style="width: 60cqw;" /></center>

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

<kbd><img src="https://github.com/user-attachments/assets/f51e3652-5cd9-4b9b-86d4-8d7186100e1d" style="width: 60cqw;"></kbd>

---

<br>
<br>
<br>
<br>

<center>(true progressive enhancement)</center>

---

<br>

# Demo

<br>

<https://passkeys.js.org>

---

# The Magic™ (Three Modes)

1. Register (`webauthn.create`)
   ```js
   autofillCtrl.abort();
   let credRegistration = await navigator.credentials.create(registrationOpts);
   ```
2. Login (`webauthn.get`)
   ```js
   autofillCtrl.abort();
   let credAttestation = await navigator.credentials.get(loginOpts);
   ```
3. Autofill (`webauthn.get`, `mediation = "conditional"`)
   ```js
   let autofillCtrl = new AbortController();
   void navigator.credentials.get(autofillOpts).then(onAutofill);
   ```

---

# Registration

1. 🌎 Generate Challenge
2. 🌎 Get Credential IDs (i.e. by email)
3. 👨‍💻 Register Credential (`webauthn.create`)
4. 🌎 Store Credential (one-to-many)

---

# Assertion

1. 🌎 Generate Challenge
2. 🌎 Get Credential IDs (i.e. by email)
3. 👨‍💻 Authenticate Credential (`webauthn.get`)
4. 🌎 Verify Message & Signature
5. 🌎 (optional) Update Counter

---

<br>
<br>
<br>

<center><strong>Can you use Passkeys without a Library?</strong></center>

---

<br>
<br>

# No.

<small>(well, maybe)</small>

---

## _Closer_ to the Metal

Maybe you're better off learning than off-loading.

---

> Flat is better than nested. \
> \- Zen of Python

> A little copying is better than a little dependency. \
> \- Go Proverbs

> Favor reading code over writing code. \
> \- Zen of Zig

---

## ... but not _the Metal_

Use abstractions to avoid confusion or _intense_ tedium.

---

<br>
<br>
<br>
<br>

<center>(some assembly required, and... <em>nuance</em>)</center>

---

# Auth Vocabulary

| Term  | Meaning                                                             |
| ----- | ------------------------------------------------------------------- |
| Authc | Password, Magic Link,<br> Passkey, OTP,<br> "Sign in with ...", etc |
| Authn | authentication <br>(who has access)                                 |
| Authz | authorization <br>(what can be accessed)                            |

---

# Registration 1 of 4: Challenge Vocabulary

| Term         | Meaning                                     |
| ------------ | ------------------------------------------- |
| Registration | Add a Passkey to Profile (new or updated)   |
| Challenge    | a server-side nonce                         |
| Nonce        | arbitrary single-use data, such as a salt   |
| Salt         | random bytes, to make a hash unpredictable  |
| Base64       | -                                           |
| URL Base64   | Base64 but ( `+` `/` `=` ) ➡️ ( `-` `_` ␡ ) |

---

#### Registration 1 of 4: 🌎 Challenge

<carousel data-line-start="1" data-slides="1-3 | 5 | 7-9"></carousel>

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

#### Registration 3 of 4: 🌎 Credential IDs

```js
app.get(`/api/passkeys-credential-ids`, async function (req, res) {
  let credentialIds = await DB.Customers.getCredentialIds(req.body.email);

  res.json({
    credentialIds: credentialIds,
  });
});
```

---

# Registration 3 of 4: Credential Vocabulary

| Term          | Meaning                                     |
| ------------- | ------------------------------------------- |
| Authenticator | Authenticator, the Device or Platform       |
| Platform      | the browser, OS, plugin, or service         |
| Credential    | Public Key (`P-256` or `ed25519`)           |
| Credential ID | Authenticator's Pairwise ID                 |
| Pairwise      | Tied to two (or more) things                |
| Relying Party | domain name (the OG origin)                 |
| Attestation   | details about the passkey device or service |

\* <small>note: <em>Passkey</em> isn't on the list</small>

---

#### Registration 3 of 4: 👨‍💻 Credential

<carousel data-line-start="1" data-slides="1-4 | 2 | 6-7 | 9-10 | 12-14 | 16-18"></carousel>

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

if (!autofillCtrl) {
  autofillCtrl = new AbortController();
}
```

---

<carousel data-line-start="1" data-slides="1,23 | 1,2-4,22-23 | 5-9 | 10 | 11 | 12-14 | 15 | 16 | 17-21 | 20"></carousel>

```js
let registrationOpts = {
  mediation: "optional", // on button click
  signal: autofillCtrl.signal,
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

#### Registration 3 of 4: 👨‍💻 Credential

<carousel data-line-start="1" data-slides="1 | 2 | 4"></carousel>

```js
autofillCtrl.abort();
let credential = await navigator.credentials.create(registrationOpts);

console.log(credential); // 😱
```

---

<carousel data-line-start="1" data-slides="1,23 | 2,12 | 3-4,14-15 | 7,16,17,19 | 8-9 | 2,11-13 | 3-4,14-15 | 16-17 | 7,16,17,19"></carousel>

```js
function registrationToJSON(cred) {
  let authenticatorData = cred.response.getAuthenticatorData();
  let asn1Pubkey = cred.response.getPublicKey(); // ArrayBuffer
  let coseKeyType = cred.response.getPublicKeyAlgorithm(); // -7

  let jsonCred = {
    authenticatorAttachment: cred.authenticatorAttachment, // "platform"
    id: cred.id,
    rawId: Bytes.bufferToBase64(cred.rawId), // same as cred.id
    response: {
      attestationObject: Bytes.bufferToBase64(cred.response.attestationObject),
      authenticatorData: Bytes.bufferToBase64(authenticatorData),
      clientDataJSON: Bytes.bufferToBase64(cred.response.clientDataJSON),
      publicKey: Bytes.bufferToBase64(asn1Pubkey),
      publicKeyAlgorithm: coseKeyType,
      // ["usb", "ble", "nfc", "internal"]
      transports: cred.response.getTransports(),
    },
    type: cred.type, // "webauthn.create"
  };

  return jsonCred;
}
```

---

<br>
<br>
<br>

<center>
Fully Expanded Passkey Objects + JSDoc types
<br><small><a href="https://github.com/BeyondCodeBootcamp/passkeys/issues/6">https://github.com/BeyondCodeBootcamp/passkeys/issues/6</a></small></center>

---

#### Registration 4 of 4: 🌎 Store

```js
// 👨‍💻
await Customer.register(emailToVerify, credential);

// or (authenticated)
await Customer.addPasskey(verifiedEmail, credential);
```

```js
// 🌎
app.post(`/api/customers`, async function (req, res) {
  mustMostlyValidatePasskey(req.body.passkey);
  DB.Passkeys.store(req.customer.email, req.body.passkey);
});
```

---

#### Registration 4 of 4: 🌎 Store

```sql
CREATE TABLE "customer" (
  "id" UUID PRIMARY KEY,
  "username" VARCHAR(100) DEFAULT NULL,
  "given_name" VARCHAR(100) DEFAULT NULL,
  "family_name" VARCHAR(100) DEFAULT NULL,
  "zoneinfo" VARCHAR(255) NOT NULL DEFAULT '',
  "locale" VARCHAR(255) NOT NULL DEFAULT '',
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);
```

\* <small>note the absence of 'email', 'phone', 'password'</small>

---

#### Registration 4 of 4: 🌎 Store

```sql
CREATE TABLE "authenticator" (
  "id" UUID NOT NULL,
  "customer_id" UUID NOT NULL,
  "priority" BIGINT NOT NULL CHECK ("priority" > 0),
  "type" VARCHAR(16) NOT NULL,
  "value" VARCHAR(255) NOT NULL,
  "details" JSON NOT NULL DEFAULT '{}',
  "verified_at" TIMESTAMP DEFAULT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "revoked_at" TIMESTAMP DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE ("id", "priority"),
  UNIQUE ("id", "type", "value"),
  CONSTRAINT "authenticator_customer_id_foreign"
    FOREIGN KEY ("customer_id") REFERENCES "customer" ("id")
);
```

---

#### Assertion 1 of 5: 🌎 Challenge (same)

<carousel data-line-start="1" data-slides="1-3 | 5 | 7-9"></carousel>

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

#### Assertion 2 of 5: 🌎 Credential IDs (same)

```js
app.get(`/api/passkeys-credential-ids`, async function (req, res) {
  let credentialIds = await DB.Customers.getCredentialIds(req.body.email);

  res.json({
    credentialIds: credentialIds,
  });
});
```

---

#### Assertion 2 of 5: 🌎 Credential

```js
const AUTOFILL = "conditional";
const BUTTON = "optional";

let assertionOpts = {
  mediation: BUTTON,
  signal: autofillCtrl.signal,
  publicKey: {
    challenge: challenge,
    rpId: relyingParty.id,
    timeout: 180 * 1000,
    userVerification: "preferred",
  },
};

autofillCtrl.abort(); //let autofillCtrl = new AbortController();
let assertion = await navigator.credentials.get(assertionOpts);
```

---

#### Assertion 2 of 5: 🌎 Credential

```js
function assertionToJSON(assert) {
  let jsonCred = {
    authenticatorAttachment: assert.authenticatorAttachment, // "platform"
    id: assert.id,
    rawId: Bytes.bufferToBase64(assert.rawId), // same as assert.id
    response: {
      authenticatorData: Bytes.bufferToBase64(authenticatorData),
      clientDataJSON: Bytes.bufferToBase64(assert.response.clientDataJSON),
      signature: Bytes.bufferToBase64(assert.response.signature)
      publicKey: Bytes.bufferToBase64(asn1Pubkey),
      publicKeyAlgorithm: coseKeyType,
      getUserSecret: function () {
        return assert.response.userHandle;
      }
    },
    type: assert.type, // "webauthn.get"
  };

  return jsonCred;
}
```

---

```js
signature
```

---

FIN

---

#### Registration 2 of 3: 👨‍💻 Credential

| Term        | Meaning                                            |
| ----------- | -------------------------------------------------- |
| JSON        | -                                                  |
| Private Key | `x` in `f(x) => y`, random bytes                   |
| Public Key  | `y` in `f(x) => y`, the result of the random bytes |
| Hash        | lossy matrix math (tables) on a sequence of bytes  |
| Signature   | key + salt + matrix math + curve (alt public key)  |

---

## Passkeys Vocabulary (cont. 3)

SKIP (we'll circle back)

| Term            | Meaning                                        |
| --------------- | ---------------------------------------------- |
| Assertion       | signed server-side challenge (salt)            |
| CBOR            | binary JSON                                    |
| COSE            | binary JOSE (JWT)                              |
| AttToBeSigned   | a bespoke hash of the bespoke data             |
| ASN.1 / DER     | binary XML                                     |
| P1363           | WebCrypto Signatures                           |
| (bespoke)       | one-off, proprietary to WebAuthn               |
| *Foo*Credential | non-implemented WebAuthn stuff (we don't care) |

---

#### Registration: Challenge

---

# List, Delete?

No.

- [How to Manage Passkeys: OS, Browser, Key, etc](https://github.com/BeyondCodeBootcamp/passkeys/issues/4)
- <chrome://settings/passkeys>

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

## 2.b

```js
let credAuthOpts = {
  mediation: "optional", // on button click
  signal: autofillCtrl.signal,
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

# Caveats

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

# What's WebAuthn?

A suite of specifications and standards related to browser-based authentication.

FIDO rebranded.

(enterprise, government, _lots_ of backwards compatibility)

---
