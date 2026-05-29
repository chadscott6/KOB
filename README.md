# King of the Beach

Static invitation site for the King of the Beach volleyball tournament.

The event copy follows the official King of the Court rules:

```text
https://kotc.ams3.digitaloceanspaces.com/img/KOTC-Rules.pdf
```

## Signup form

The signup buttons point to the Google Form configured in `script.js`:

```js
const signupUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfjcPTJBT0BhUzFIZHXzCtlmx8GigzqmC-qx__5Lbxuuy25pg/viewform?usp=publish-editor";
```

Use a Google Form that writes responses to a Google Sheet.

## Update access passphrase

The static access screen checks a SHA-256 hash in `script.js`. To change the
passphrase, generate a new hash locally and replace `accessPasswordHash`.

```sh
node -e "const crypto=require('crypto'); console.log(crypto.createHash('sha256').update('new-passphrase').digest('hex'))"
```

This is a lightweight client-side gate for GitHub Pages, not server-side auth.

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

If the first deployment fails because Pages is not enabled yet:

1. Open the repo on GitHub.
2. Go to `Settings` > `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Re-run the `Deploy GitHub Pages` workflow.

The expected site URL is:

```text
https://chadscott6.github.io/KOB/
```
