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

  // Landing-page slideshow. List the photos you want to feature on the
  // front page — they cross-fade slowly, one to the next. Put the files
  // in /assets and reference them here (e.g. "assets/slide1.jpg").
  // If this list is empty, the single heroImage above is used instead.
  heroSlides: [
    "assets/slide1.jpg",
    "assets/slide2.jpg",
    "assets/slide3.jpg",
    "assets/slide4.jpg",
    "assets/slide5.jpg",
    "assets/slide6.jpg",
    "assets/slide7.jpg",
    "assets/slide8.jpg",
    "assets/slide9.jpg",
    "assets/slide10.jpg",
    "assets/slide11.jpg",
    "assets/slide12.jpg",
    "assets/slide13.jpg",
    "assets/slide14.jpg",
    "assets/slide15.jpg"
  ],

  // Seconds each slide holds before fading to the next.
  heroSlideSeconds: 5,
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
    photos: [
      "feature.jpg",
      "DSC01208.jpg",
    "DSC01246.jpg",
    "DSCF0395.jpg",
    "DSCF7676.jpg",
    "DSCF7692.jpg",
    "DSCF7698.jpg",
    "DSCF7708.jpg",
    "DSCF7752.jpg"
    ],
  },
  {
    slug: "wedding",
    title: "Wedding",
    photos: [
      "DSC02087.jpg",
    "DSC02093.jpg",
    "DSC02124.jpg",
    "DSC02173.jpg",
    "DSC02182.jpg",
    "DSC02233.jpg",
    "DSC02247.jpg",
    "DSC02298.jpg",
    "DSC02362.jpg",
    "DSC02414.jpg",
    "DSC02422.jpg",
    "DSC02427.jpg",
    "DSC02467.jpg",
    "DSC02502.jpg"
    ],
  },
  {
    slug: "fly-fishing",
    title: "Fly Fishing",
    photos: [
      "DSC00777.jpg",
    "DSC00894.jpg",
    "DSC00928.jpg",
    "DSC00952.jpg",
    "DSC01304.jpg",
    "DSC02824.jpg",
    "DSC03150.jpg",
    "DSC03157.jpg",
    "DSC03182.jpg",
    "DSC03249.jpg",
    "DSCF0174.jpg",
    "DSCF0180.jpg",
    "DSCF0197.jpg",
    "DSCF0222.jpg",
    "DSCF0315.jpg",
    "DSCF7477.jpg",
    "DSCF7487.jpg",
    "DSCF7499.jpg",
    "DSCF7508.jpg",
    "DSCF9314.jpg",
    "DSCF9327.jpg",
    "DSCF9328.jpg"
    ],
  },
  {
    slug: "personal",
    title: "Personal",
    photos: [
      "DSC01144-Pano.jpg",
    "DSCF0012.jpg",
    "DSCF0827.jpg",
    "DSCF0911.jpg",
    "DSCF0923.jpg",
    "DSCF0938.jpg",
    "DSCF1169.jpg",
    "DSCF7408.jpg",
    "DSCF8570.jpg",
    "DSCF8746.jpg",
    "DSCF9001-Enhanced-NR.jpg",
    "DSCF9026-Enhanced-NR.jpg"
    ],
  },
    {
    slug: "science-communication",
    title: "Science Communication",
    photos: [
      "DSC02602.jpg",
    "DSC02622.jpg",
    "DSC02634.jpg",
    "DSC02663.jpg",
    "DSC02685.jpg",
    "DSC02741.jpg",
    "DSC02766.jpg",
    "DSCF0140.jpg",
    "DSCF0158.jpg",
    "DSCF0561.jpg",
    "DSCF0572.jpg",
    "DSCF0577.jpg",
    "DSCF0596.jpg",
    "DSCF0621.jpg",
    "DSCF0630.jpg",
    "DSCF0651.jpg",
    "DSCF0662.jpg"
    ],
  },
];
