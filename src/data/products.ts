import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "makevo",
    slug: "makevo",
    name: "Makevo",
    tagline: "From idea to printed product in minutes.",
    shortDescription:
      "Makevo is an AI custom-print studio: start from a ready-made style template, generate your artwork, preview it on a real product, and order only when you love it.",
    longDescription: [
      "Makevo turns a text prompt or a photo of your pet into AI-generated artwork, previews that art on real products, and prints and ships your order worldwide — no design skills required.",
      "Every project begins from a template. You choose how to start — turn a pet photo into custom art or create from a text prompt — then pick a style template such as Royal Portrait, Watercolor, Pop Art, or Anime. The template guides the AI so you get a polished, print-ready result in a few guided steps instead of starting from a blank canvas.",
      "Once your design looks right, place it on a product, preview a realistic mockup for each color, and check out. Editing text, switching colors, and previewing mockups are always free — you only spend a credit when you generate or regenerate an AI design. Makevo is Ovrimo's flagship consumer app.",
    ],
    category: "AI Design Studio",
    status: "live",
    icon: "/products/makevo/clean_logo_small.png",
    heroImage: "/products/makevo/hero_pet.png",
    screenshots: [
      {
        src: "/products/makevo/pet_1.jpeg",
        alt: "Makevo start screen with creation templates",
        caption:
          "Start every project from a template: turn a pet photo into art, or create from a text prompt.",
      },
      {
        src: "/products/makevo/pet_3.jpeg",
        alt: "Makevo art style template selection",
        caption:
          "Pick a style template — Royal Portrait, Watercolor, Pop Art, Anime, and more — to guide the AI.",
      },
      {
        src: "/products/makevo/prompt_1.jpeg",
        alt: "Makevo prompt-based creation flow",
        caption:
          "Describe your idea with a prompt, add names, quotes, or dates, and let the template shape the result.",
      },
      {
        src: "/products/makevo/prompt_5.png",
        alt: "Makevo product mockup preview",
        caption:
          "Preview a realistic mockup on a real product and color, then order only when you love it.",
      },
    ],
    websiteUrl: "https://makevo.site",
    appStoreUrl: "https://apps.apple.com/app/makevo/id6789560625",
    features: [
      {
        title: "Start from a template",
        description:
          "Every project begins from a ready-made template — a pet photo or a text prompt — so you never face a blank canvas.",
      },
      {
        title: "Style templates for any look",
        description:
          "Choose a style preset like Royal Portrait, Watercolor, Pop Art, or Anime, and the AI renders your design to match.",
      },
      {
        title: "AI design generation",
        description:
          "Generate high-resolution, print-ready artwork from a prompt. One credit creates one AI design; edits and previews are always free.",
      },
      {
        title: "Live product mockups",
        description:
          "Place your art on T-shirts, mugs, posters, phone cases, hoodies, or tote bags and preview a realistic mockup for every color.",
      },
      {
        title: "Print-on-demand fulfillment",
        description:
          "No inventory and no minimums. Orders are produced in 2–5 business days and ship to 180+ countries with in-app tracking.",
      },
      {
        title: "Free to start",
        description:
          "Get 3 AI credits every month at no cost, with one-time credit packs available in-app when you want to create more.",
      },
    ],
    faq: [
      {
        question: "How do projects and templates work in Makevo?",
        answer:
          "Every design starts from a template. You first choose how to create — from a pet photo or a text prompt — then pick a style template such as Royal Portrait, Watercolor, Pop Art, or Anime. The template guides the AI through a few simple steps so you get a polished, print-ready result.",
      },
      {
        question: "What can I make with Makevo?",
        answer:
          "You can put your AI-generated artwork on T-shirts, mugs, posters, phone cases, hoodies, and tote bags today, with more products coming soon. Items are printed on demand and shipped worldwide.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Makevo is free to start with 3 AI credits every month. One credit generates one AI design, and you can buy one-time credit packs in the app — no subscription required.",
      },
      {
        question: "Where can I get Makevo?",
        answer:
          "Makevo is available on the App Store and at makevo.site. It is Ovrimo's flagship consumer app.",
      },
    ],
    featured: true,
    releaseDate: "2026",
    seoTitle: "Makevo | AI Custom Print Studio by Ovrimo",
    seoDescription:
      "Makevo is an AI custom-print app from Ovrimo. Start from a style template, generate print-ready artwork, preview it on real products, and order worldwide.",
    relatedProductSlugs: ["modedo"],
    links: [
      { label: "Visit website", href: "https://makevo.site" },
      {
        label: "Download on the App Store",
        href: "https://apps.apple.com/app/makevo/id6789560625",
      },
    ],
    updates: [
      {
        title: "Makevo added to the Ovrimo product lineup",
        summary:
          "Makevo, Ovrimo's AI custom-print studio, is now listed on the company site with its template-based creation flow.",
        date: "October 2026",
      },
    ],
  },
  {
    id: "modedo",
    slug: "modedo",
    name: "ModeDo",
    tagline: "A productivity app organized around how you actually work.",
    shortDescription:
      "ModeDo helps people organize tasks with less noise, clearer context, and a calmer daily workflow.",
    longDescription: [
      "ModeDo is a productivity-focused app built around modes so people can separate work, personal tasks, planning, and focus time without wrestling with one crowded list.",
      "The product is designed to feel lightweight and practical. It gives users a clear place to capture tasks, move through priorities, and stay oriented throughout the day.",
      "As Ovrimo adds more software over time, ModeDo sets the tone for the kind of products we want to build: thoughtful tools that are useful, simple, and polished.",
    ],
    category: "Productivity App",
    status: "live",
    icon: "/products/modedo-icon.svg",
    heroImage: "/products/modedo-hero.svg",
    screenshots: [
      {
        src: "/products/modedo-screen-1.svg",
        alt: "ModeDo dashboard placeholder",
        caption: "A clean daily view focused on the tasks that matter right now.",
      },
      {
        src: "/products/modedo-screen-2.svg",
        alt: "ModeDo modes placeholder",
        caption: "Mode-based organization helps users switch context without clutter.",
      },
    ],
    websiteUrl: "https://www.modedo.app",
    features: [
      {
        title: "Mode-based organization",
        description:
          "Separate tasks by context so people can focus on the right work at the right time.",
      },
      {
        title: "Clean daily planning",
        description:
          "A simple interface keeps planning readable and avoids unnecessary overhead.",
      },
      {
        title: "Helpful structure",
        description:
          "Tasks, reminders, and flow are organized to support follow-through instead of distraction.",
      },
      {
        title: "Cross-device access",
        description:
          "ModeDo is available on the web today, with room for expanded platform support later.",
      },
    ],
    faq: [
      {
        question: "What does ModeDo do?",
        answer:
          "ModeDo is a productivity app that helps people organize and complete tasks using clear modes instead of one crowded task list.",
      },
      {
        question: "Where can I access ModeDo?",
        answer: "ModeDo is available on the web at modedo.app.",
      },
      {
        question: "Is ModeDo the only Ovrimo product?",
        answer:
          "It is the first live product listed on the site. The product system is set up so more Ovrimo apps and tools can be added later without changing page templates.",
      },
    ],
    featured: true,
    releaseDate: "2026",
    seoTitle: "ModeDo | Productivity App by Ovrimo",
    seoDescription:
      "Learn about ModeDo, a productivity app from Ovrimo designed to keep planning clear, focused, and practical.",
    relatedProductSlugs: ["makevo"],
    links: [{ label: "Visit website", href: "https://www.modedo.app" }],
    updates: [
      {
        title: "Product listing launched",
        summary:
          "ModeDo is now listed as the first live Ovrimo product on the company site.",
        date: "March 2026",
      },
    ],
  },
  {
    id: "color-cascade",
    slug: "color-cascade",
    name: "Color Cascade",
    tagline: "Sort the colors. Restore the world.",
    shortDescription:
      "Color Cascade is a calm color-sorting puzzle for iPhone. Every tube you finish sends color back into a sleepy grey world, until the whole scene comes back to life.",
    longDescription: [
      "Sort colorful pieces into glass tubes until each one holds a single color. Each level has its own miniature world that starts out grey and empty, and every solved puzzle restores it in full color.",
      "80 handcrafted levels across four chapters, from a hill village to a snowy harbor, each checked to be solvable. Every restored world goes into your World Gallery, where you can revisit and share it.",
      "Color Cascade is free with ads. There are no ads in the first 10 levels, ads never interrupt a puzzle, and a one-time Remove Ads purchase turns off the ads between levels for good.",
    ],
    category: "Puzzle Game",
    status: "coming-soon",
    icon: "/products/color-cascade/icon.png",
    heroImage: "/products/color-cascade/hero.jpg",
    screenshots: [
      {
        src: "/products/color-cascade/screen-play.jpg",
        alt: "Color Cascade puzzle level and home screen",
        caption:
          "Sort the colors into tubes. Every color also has its own symbol, which makes colors easier to tell apart.",
      },
      {
        src: "/products/color-cascade/screen-worlds.jpg",
        alt: "Color Cascade World Gallery and level map",
        caption:
          "Every solved level restores a miniature world and adds it to your World Gallery.",
      },
    ],
    features: [
      {
        title: "80 handcrafted levels",
        description:
          "Four chapters, from a hill village to a snowy harbor. Every level is checked to be solvable.",
      },
      {
        title: "A world to restore",
        description:
          "Each level has its own miniature world, and every world you restore goes into your gallery to revisit and share.",
      },
      {
        title: "Daily Cascade",
        description: "A fresh puzzle every day, the same for everyone.",
      },
      {
        title: "Fair help",
        description:
          "Free undos, a free hint every level, and restarting is always free.",
      },
      {
        title: "Plays offline",
        description:
          "No account needed. Sign in with Apple is optional and only backs up your progress and Remove Ads status.",
      },
      {
        title: "Accessible",
        description:
          "Every color has its own symbol, plus reduced-motion and high-contrast options.",
      },
    ],
    faq: [
      {
        question: "Is Color Cascade free?",
        answer:
          "Yes. It's free with ads, which only appear between levels after level 10 and never during a puzzle. A one-time Remove Ads purchase turns them off for good.",
      },
      {
        question: "How do I restore Remove Ads or my progress on a new phone?",
        answer:
          "Remove Ads restores from Settings → Ads → Restore purchases with the same Apple ID. To keep your progress, sign in with Apple in Settings → Account; after reinstalling, sign in again and your levels come back. See ovrimo.com/support for details.",
      },
      {
        question: "Where can I get Color Cascade?",
        answer: "Color Cascade is coming soon to the App Store for iPhone.",
      },
    ],
    featured: true,
    releaseDate: "2026",
    seoTitle: "Color Cascade | Color-Sorting Puzzle Game by Ovrimo",
    seoDescription:
      "Color Cascade is a calm color-sorting puzzle for iPhone from Ovrimo. Solve 80 handcrafted levels and restore color to miniature worlds.",
    relatedProductSlugs: [],
    links: [
      { label: "Support", href: "https://www.ovrimo.com/support" },
      { label: "Privacy Policy", href: "https://www.ovrimo.com/privacy#color-cascade" },
    ],
    updates: [
      {
        title: "Color Cascade announced",
        summary:
          "Ovrimo's first game, a color-sorting puzzle with 80 worlds to restore, is coming soon to the App Store.",
        date: "November 2026",
      },
    ],
  },
];
