// ============================================================
//  YOUR SITE CONFIG — this is the ONLY file you edit to
//  add photos or change text. No HTML editing needed.
// ============================================================

const SITE = {
  name: "Lukas Draugelis",
  tagline: "Freelance photographer — Montana",

  // The email your contact form sends to. To make the form live:
  //   1. Go to https://formspree.io, sign up (free), create a form.
  //   2. It gives you an ID like "xmyzabcd". Paste it below.
  //   3. Until you do, the form shows a friendly note instead.
  formspreeId: "",

  contactEmail: "you@example.com",   // shown on the contact page

  // The big fullscreen photo on the landing page.
  // Put the file in /assets and reference it here.
  heroImage: "assets/hero.jpg",
};

// ============================================================
//  GALLERIES
//  To add a photo: drop the .jpg in the gallery's folder,
//  then add its filename to that gallery's "photos" list.
//  To add a whole new gallery: copy a block, change the fields,
//  and it appears in the nav automatically.
// ============================================================

const GALLERIES = [
  {
    slug: "portraits",              // folder name under /galleries
    title: "Portraits",
    blurb: "Individual and couple sessions.",
    photos: [
      "feature.jpg",
      // "portrait-02.jpg",
      // "portrait-03.jpg",
    ],
  },
  {
    slug: "wedding",
    title: "Wedding",
    blurb: "Full-day coverage and details.",
    photos: [
      // "wedding-01.jpg",
    ],
  },
  {
    slug: "fly-fishing",
    title: "Fly Fishing",
    blurb: "On the water, Montana and beyond.",
    photos: [
      // "fly-01.jpg",
    ],
  },
  {
    slug: "personal",
    title: "Personal",
    blurb: "Work made for its own sake.",
    photos: [
      // "personal-01.jpg",
    ],
  },
];
