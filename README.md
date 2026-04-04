# Archive Helper

Small local web app for general web archiving workflows.

## What it does

- Paste a page URL
- Open `archive.is` with the page prefilled
- Open `archive.today` with the page prefilled
- Copy the original page URL
- Copy the generated archive submission link

## Run locally

```bash
cd /Users/benjourdan/archive-helper
npm start
```

Then open:

```text
http://localhost:3000
```

## Use from your phone on the same Wi‑Fi

1. Start the server on your Mac.
2. Find your Mac's local IP, for example `192.168.1.25`.
3. On your phone, open:

   `http://YOUR-MAC-IP:3000`

Example:

```text
http://192.168.1.25:3000
```

## Notes

- Archive services may still present a CAPTCHA or verification step.
- This app does not scrape pages or bypass access controls; it only prepares and opens archive submission URLs locally.
