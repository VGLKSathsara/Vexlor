// Single source of truth for content. Edit text here as the site grows.

export const NAV = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "service", label: "SERVICES" },
  { id: "prices", label: "PRICES" },
];

export const SECTION_IDS = NAV.map((n) => n.id);

export const HERO = {
  badgeWords: ["Fast", "Smart", "Reliable"],
  titleTop: "Move forward.",
  titleBrand: "Stay precise.",
  titleExt: "",
  text: "Discover digital tools, online shopping and local stays. Built around clarity, quality and progress.",
};

export const ABOUT = {
  title: "About Vexlor",
  text: "Vexlor is a digital brand in Sri Lanka, bringing together tools and online services designed around speed, clarity and quality.",
  stats: [
    { value: "100+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "24/7", label: "Support" },
  ],
  // Shown as "Connect with us" in the About section.
  socials: [
    { id: "telegram", label: "Telegram", handle: "@excellent_lk", url: "https://t.me/excellent_lk" },
    { id: "whatsapp", label: "WhatsApp", handle: "+94 70 371 4386", url: "https://wa.me/94703714386" },
    { id: "tiktok", label: "TikTok", handle: "@excellentlk", url: "https://www.tiktok.com/@excellentlk" },
    { id: "facebook", label: "Facebook", handle: "Follow our page", url: "https://www.facebook.com/share/1ECv43UeP1/" },
  ],
};

// Add new services here – each one becomes a clickable card in the SERVICE section.
export const SERVICES = [
  {
    icon: "calculator",
    title: "Premium Lot Calculator",
    text: "A trading workspace to size positions from your risk, journal trades, track wallet changes and review your progress.",
    url: "https://lost-size-calculator-frontend.vercel.app",
    cta: "Open Service",
    telegram: "https://t.me/PremiumLotCalculator",
  },
  {
    icon: "gift",
    title: "LY Sweet & Fancy House",
    text: "Online shop in Kataragama for traditional sweets, pooja items, toys and gifts. Order easily through WhatsApp.",
    url: "https://l-y-sweet-house.vercel.app/",
    cta: "Visit Shop",
  },
  {
    icon: "stay",
    title: "Kadadev Sadaluva",
    text: "Guesthouse and event venue in Kataragama New Town, near the Devalaya. AC and non-AC rooms, halls for groups and jeep safaris to Yala.",
    url: "https://kadadev-sadaluva.vercel.app/",
    cta: "View Stay",
  },
];

// Pricing is intentionally centralized here so promotions can be switched off
// without changing the layout. Set offer.active to false when the offer ends.
// Access durations apply to Premium Lot Calculator, not Chart Skin Pro.
export const PRICING = {
  eyebrow: "Simple, transparent pricing",
  title: "The right tools. Your trading edge.",
  description: "Start with a better-looking chart or unlock precision position sizing for your market.",
  offer: {
    active: true,
    label: "YEAR END OFFER",
    regularPrice: 14.99,
    promotionalPrice: 9.99,
  },
  plans: [
    {
      name: "Starter",
      subtitle: "Make every chart yours.",
      price: 1.99,
      period: "Chart Skin Pro access",
      features: [
        { label: "Chart Skin Pro", included: true },
        { label: "Premium Lot Calculator", included: false },
      ],
      cta: "Get Starter",
      footnote: "Chart Skin Pro only",
    },
    {
      name: "Standard",
      subtitle: "Lock in one market, for life.",
      price: 8.99,
      period: "Lifetime calculator access",
      features: [
        { label: "Forex OR Crypto calculator", included: true, note: "Choose one market · Lifetime" },
        { label: "Chart Skin Pro", included: true, note: "FREE" },
        { label: "Both markets included", included: false },
      ],
      cta: "Choose your market",
      footnote: "Select Forex or Crypto when contacting us",
    },
    {
      name: "Popular",
      subtitle: "Trade both markets at once.",
      price: 9.99,
      period: "30 days of calculator access",
      features: [
        { label: "Forex AND Crypto calculator", included: true, note: "Both markets" },
        { label: "Chart Skin Pro", included: true, note: "FREE" },
      ],
      cta: "Get Popular",
      footnote: "Access renews every 30 days",
    },
    {
      name: "Pro Bundle",
      subtitle: "Everything you need. One price.",
      price: 14.99,
      featured: true,
      period: "Lifetime calculator access",
      features: [
        { label: "Forex calculator", included: true, note: "Lifetime" },
        { label: "Crypto calculator", included: true, note: "Lifetime" },
        { label: "Chart Skin Pro", included: true, note: "FREE" },
      ],
      cta: "Unlock Pro Bundle",
      footnote: "Forex + Crypto · Lifetime access",
    },
  ],
};
