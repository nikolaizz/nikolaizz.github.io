# Nikola Izzan Ar Rasheed, portfolio

A one-page portfolio built as an editorial research note: warm paper, a serif voice, mono metadata, and a single oxide accent.

## Structure

- `index.html` - page content and structure
- `style.css` - layout, type, color, and responsive rules
- `script.js` - mobile navigation toggle
- `assets/fonts/` - self-hosted Newsreader, IBM Plex Sans, and IBM Plex Mono
- `assets/favicon.svg` - typographic N mark
- `Nikola_CV_EN (AI_ML).pdf` - CV linked from the contact section

## Details

- Static HTML, CSS, and JavaScript. No framework, no build step.
- English copy, taken from the CV.
- Fixed paper theme because the page is built around a printed-report identity.
- Motion is limited to hover and focus states.
- All links point to real destinations: email, phone, LinkedIn, GitHub, and the CV file.

## Run locally

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Fonts

Newsreader and IBM Plex are licensed under the SIL Open Font License. Files are self-hosted in `assets/fonts/`.
