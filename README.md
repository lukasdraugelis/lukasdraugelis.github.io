# Lukas Draugelis Photography — site guide

Plain HTML/CSS/JS. No build step, no Hugo, no workflow. GitHub Pages serves
these files directly.

## The one file you'll edit: `config.js`

Everything — your name, tagline, galleries, and the photo lists — lives in
`config.js`. You never need to touch the HTML.

## How to add photos to a gallery

1. Put your `.jpg` files in the gallery's folder, e.g. `galleries/wedding/`.
2. Open `config.js` and add each filename to that gallery's `photos` list:

       {
         slug: "wedding",
         title: "Wedding",
         blurb: "Full-day coverage and details.",
         photos: [
           "smith-01.jpg",
           "smith-02.jpg",
         ],
       },

3. Save, then in Terminal from your project folder:

       git add .
       git commit -m "Add wedding photos"
       git push

The site rebuilds itself in the browser — no compile step.

## How to set the front-page hero photo

Replace `assets/hero.jpg` with your own (keep the name `hero.jpg`), or point
`heroImage` in `config.js` at a different file.

## How to turn on the contact form

1. Sign up free at https://formspree.io and create a form.
2. It gives you an ID like `xdorwkgv`.
3. Put it in `config.js`:  `formspreeId: "xdorwkgv",`
4. Commit and push. The form goes live and emails you submissions.

Until then, the contact page shows your email address instead.

## Photo tips

- Use `.jpg`, not `.webp`.
- Resize big photos to about 2000px on the long edge before adding them —
  keeps the site fast and your repo small.
- The grid places photos in the order they're listed.
