export type ThemeId = "dawn" | "twilight" | "forest";

export interface ThemeColorToken {
  name: string;
  steinerName: string;
  hex: string;
  textColor: string;
}

export interface ThemeDefinition {
  id: ThemeId;
  label: string;
  sublabel: string;
  tagline: string;
  description: string;
  heroSubtitle: string;

  // CSS variables
  cssVars: Record<string, string>;

  // Gradient strings
  groundGradient: string;
  heroGradient: string;
  footerGradient: string;

  // Glow blobs for hero (radial gradients)
  blobs: { gradient: string; style: React.CSSProperties }[];

  // Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Buttons
  btnPrimary: string;
  btnPrimaryText: string;
  btnSecondary: string;
  btnSecondaryText: string;
  btnSecondaryBorder: string;

  // Card
  cardTint: string;
  glow: string;

  // Palette groups
  palette: {
    warm: ThemeColorToken[];
    cool: ThemeColorToken[];
    life: ThemeColorToken[];
    ground: ThemeColorToken[];
  };
}

const DARK_TEXT = "#3a3028";
const LIGHT_TEXT = "#f5f0e8";

export const THEMES: Record<ThemeId, ThemeDefinition> = {
  dawn: {
    id: "dawn",
    label: "Dawn",
    sublabel: "Main Site",
    tagline: "Where light first touches the world",
    description:
      "The Main Website palette — a luminous dawn of pale gold, rose-peach, and soft blue-grey that welcomes the soul into radiant wakefulness.",
    heroSubtitle:
      "A living design language inspired by Rudolf Steiner's veil painting — translucent colour layers that carry spirit into matter.",

    cssVars: {
      "--theme-glow": "rgba(232,200,110,0.35)",
      "--theme-card-tint": "rgba(253,248,240,0.72)",
      "--theme-text-primary": "#3a3028",
      "--theme-text-muted": "#7a6a5a",
      "--theme-accent-warm": "#e8c86e",
      "--theme-accent-cool": "#8aaccf",
    },

    groundGradient:
      "linear-gradient(160deg, #fdf8f0 0%, #f5e6c8 40%, #f2d4c2 70%, #e8d0d8 100%)",
    heroGradient:
      "linear-gradient(160deg, #fdf8f0 0%, #f5e6c8 35%, #f2d4c2 65%, #dce8f0 100%)",
    footerGradient:
      "linear-gradient(135deg, #e8d4bc 0%, #dcc8d4 50%, #c8d4e0 100%)",

    blobs: [
      {
        gradient:
          "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(232,200,110,0.5) 0%, transparent 70%)",
        style: {
          top: "-5%",
          left: "-10%",
          width: "70%",
          height: "80%",
          animationDelay: "0s",
          animationDuration: "10s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(200,168,200,0.45) 0%, transparent 65%)",
        style: {
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "70%",
          animationDelay: "3s",
          animationDuration: "13s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 55% 45% at 50% 80%, rgba(138,172,207,0.4) 0%, transparent 60%)",
        style: {
          bottom: "-10%",
          left: "20%",
          width: "65%",
          height: "60%",
          animationDelay: "6s",
          animationDuration: "11s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 40% 50% at 70% 60%, rgba(232,168,152,0.38) 0%, transparent 65%)",
        style: {
          bottom: "0%",
          right: "10%",
          width: "50%",
          height: "60%",
          animationDelay: "1.5s",
          animationDuration: "15s",
        },
      },
    ],

    textPrimary: "#3a3028",
    textSecondary: "#4a3848",
    textMuted: "#7a6a5a",

    btnPrimary: "linear-gradient(135deg, #e8c86e, #d4956a)",
    btnPrimaryText: "#3a3028",
    btnSecondary: "rgba(253,248,240,0.6)",
    btnSecondaryText: "#3a3028",
    btnSecondaryBorder: "rgba(138,172,207,0.55)",

    cardTint: "rgba(253,248,240,0.72)",
    glow: "rgba(232,200,110,0.35)",

    palette: {
      warm: [
        {
          name: "Golden Spirit",
          steinerName: "Goldener Geist",
          hex: "#e8c86e",
          textColor: DARK_TEXT,
        },
        {
          name: "Rose-Soul",
          steinerName: "Rosenhafte Seele",
          hex: "#e8a898",
          textColor: DARK_TEXT,
        },
        {
          name: "Warm Amber",
          steinerName: "Warmer Bernstein",
          hex: "#d4956a",
          textColor: DARK_TEXT,
        },
        {
          name: "Peach-Blossom",
          steinerName: "Pfirsichblüte",
          hex: "#f2d4c2",
          textColor: DARK_TEXT,
        },
      ],
      cool: [
        {
          name: "Lapis Inward",
          steinerName: "Lapisblaues Innen",
          hex: "#8aaccf",
          textColor: DARK_TEXT,
        },
        {
          name: "Blue-Grey Ether",
          steinerName: "Blaugrauer Äther",
          hex: "#9aafc4",
          textColor: DARK_TEXT,
        },
        {
          name: "Muted Violet",
          steinerName: "Gedämpftes Violett",
          hex: "#b0a0c8",
          textColor: DARK_TEXT,
        },
        {
          name: "Dusky Mauve",
          steinerName: "Dunkles Malve",
          hex: "#c8b0c8",
          textColor: DARK_TEXT,
        },
      ],
      life: [
        {
          name: "Sage Rest",
          steinerName: "Salbeiruhe",
          hex: "#9ab89a",
          textColor: DARK_TEXT,
        },
        {
          name: "Pale Gold Ground",
          steinerName: "Blassgoldener Grund",
          hex: "#f5e6c8",
          textColor: DARK_TEXT,
        },
      ],
      ground: [
        {
          name: "Warm Near-White",
          steinerName: "Warmes Lichtweiss",
          hex: "#fdf8f0",
          textColor: DARK_TEXT,
        },
        {
          name: "Deep Warm Grey",
          steinerName: "Tiefes Warmgrau",
          hex: "#3a3028",
          textColor: "#fdf8f0",
        },
        {
          name: "Aubergine Depth",
          steinerName: "Auberginen Tiefe",
          hex: "#4a3848",
          textColor: "#fdf8f0",
        },
        {
          name: "Warm Text Mid",
          steinerName: "Mittleres Warmbraun",
          hex: "#7a6a5a",
          textColor: "#fdf8f0",
        },
      ],
    },
  },

  twilight: {
    id: "twilight",
    label: "Twilight",
    sublabel: "App Interface",
    tagline: "Depth where spirit meets function",
    description:
      "The App Interface palette — a twilight veil of blue-violet depths crowned with warm peach and amber highlights, where the ethereal and the functional become one.",
    heroSubtitle:
      "Translucent layers of consciousness — deep blue-violet ground illuminated from within by soul-warm amber and peach luminosity.",

    cssVars: {
      "--theme-glow": "rgba(212,160,106,0.4)",
      "--theme-card-tint": "rgba(58,48,96,0.65)",
      "--theme-text-primary": "#f5f0e8",
      "--theme-text-muted": "rgba(232,216,184,0.65)",
      "--theme-accent-warm": "#e8b898",
      "--theme-accent-cool": "#9890c8",
    },

    groundGradient:
      "linear-gradient(160deg, #2a2845 0%, #3d3060 40%, #4a3858 70%, #3a3050 100%)",
    heroGradient:
      "linear-gradient(160deg, #1e1c35 0%, #2a2845 30%, #3d3060 60%, #4a3858 100%)",
    footerGradient:
      "linear-gradient(135deg, #1e1c35 0%, #2a2845 50%, #3d3060 100%)",

    blobs: [
      {
        gradient:
          "radial-gradient(ellipse 60% 55% at 25% 35%, rgba(152,144,200,0.45) 0%, transparent 70%)",
        style: {
          top: "-5%",
          left: "-10%",
          width: "70%",
          height: "80%",
          animationDelay: "0s",
          animationDuration: "11s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 50% 55% at 75% 25%, rgba(212,160,106,0.38) 0%, transparent 65%)",
        style: {
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "70%",
          animationDelay: "4s",
          animationDuration: "14s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 55% 45% at 50% 75%, rgba(112,144,184,0.35) 0%, transparent 60%)",
        style: {
          bottom: "-10%",
          left: "20%",
          width: "65%",
          height: "60%",
          animationDelay: "7s",
          animationDuration: "12s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 40% 50% at 65% 55%, rgba(200,136,120,0.3) 0%, transparent 65%)",
        style: {
          bottom: "5%",
          right: "5%",
          width: "50%",
          height: "55%",
          animationDelay: "2s",
          animationDuration: "16s",
        },
      },
    ],

    textPrimary: "#f5f0e8",
    textSecondary: "#e8d8b8",
    textMuted: "rgba(232,216,184,0.65)",

    btnPrimary: "linear-gradient(135deg, #d4a06a, #c88878)",
    btnPrimaryText: "#f5f0e8",
    btnSecondary: "rgba(58,48,96,0.6)",
    btnSecondaryText: "#e8d8b8",
    btnSecondaryBorder: "rgba(152,144,200,0.5)",

    cardTint: "rgba(58,48,96,0.65)",
    glow: "rgba(212,160,106,0.4)",

    palette: {
      warm: [
        {
          name: "Soul Peach",
          steinerName: "Seelen-Pfirsich",
          hex: "#e8b898",
          textColor: DARK_TEXT,
        },
        {
          name: "Amber Lustre",
          steinerName: "Bernsteinglanz",
          hex: "#d4a06a",
          textColor: DARK_TEXT,
        },
        {
          name: "Rose Warmth",
          steinerName: "Rosenwärme",
          hex: "#c88878",
          textColor: DARK_TEXT,
        },
        {
          name: "Warm White",
          steinerName: "Warmes Weiss",
          hex: "#f5f0e8",
          textColor: DARK_TEXT,
        },
      ],
      cool: [
        {
          name: "Lavender Spirit",
          steinerName: "Lavendel Geist",
          hex: "#9890c8",
          textColor: DARK_TEXT,
        },
        {
          name: "Night Blue",
          steinerName: "Nachtblau",
          hex: "#7090b8",
          textColor: DARK_TEXT,
        },
        {
          name: "Violet Depth",
          steinerName: "Violette Tiefe",
          hex: "#8878a8",
          textColor: "#f5f0e8",
        },
        {
          name: "Deep Indigo",
          steinerName: "Tiefes Indigo",
          hex: "#3d3060",
          textColor: "#f5f0e8",
        },
      ],
      life: [
        {
          name: "Muted Sage",
          steinerName: "Gedämpfter Salbei",
          hex: "#7a9878",
          textColor: DARK_TEXT,
        },
        {
          name: "Pale Gold",
          steinerName: "Blasses Gold",
          hex: "#e8d8b8",
          textColor: DARK_TEXT,
        },
      ],
      ground: [
        {
          name: "Twilight Ground",
          steinerName: "Dämmerungsgrund",
          hex: "#2a2845",
          textColor: LIGHT_TEXT,
        },
        {
          name: "Violet Dusk",
          steinerName: "Violette Dämmerung",
          hex: "#3d3060",
          textColor: LIGHT_TEXT,
        },
        {
          name: "Warm Dark",
          steinerName: "Warmes Dunkel",
          hex: "#4a3858",
          textColor: LIGHT_TEXT,
        },
        {
          name: "Night Aubergine",
          steinerName: "Nacht-Aubergine",
          hex: "#1e1c35",
          textColor: LIGHT_TEXT,
        },
      ],
    },
  },

  forest: {
    id: "forest",
    label: "Forest-Soul",
    sublabel: "Affiliate Sites",
    tagline: "Life breathing between earth and spirit",
    description:
      "The Affiliate Member palette — a forest-soul harmony of soft sage, living green, and warm peach; grounded in earth yet alive with soul-warmth.",
    heroSubtitle:
      "Where the life-forces of nature meet the warmth of the human soul — green as the mediator between cool spirit and warm feeling.",

    cssVars: {
      "--theme-glow": "rgba(90,136,104,0.3)",
      "--theme-card-tint": "rgba(232,240,228,0.72)",
      "--theme-text-primary": "#2e3828",
      "--theme-text-muted": "#6a7860",
      "--theme-accent-warm": "#d89880",
      "--theme-accent-cool": "#78a890",
    },

    groundGradient:
      "linear-gradient(160deg, #e8f0e4 0%, #d4e8cc 40%, #e8f0e4 60%, #f0ddd0 100%)",
    heroGradient:
      "linear-gradient(160deg, #f0ece4 0%, #e8f0e4 30%, #d4e8cc 60%, #f0ddd0 100%)",
    footerGradient:
      "linear-gradient(135deg, #d4e8cc 0%, #c4d8bc 50%, #c8d8c8 100%)",

    blobs: [
      {
        gradient:
          "radial-gradient(ellipse 60% 55% at 20% 30%, rgba(154,184,154,0.45) 0%, transparent 70%)",
        style: {
          top: "-5%",
          left: "-10%",
          width: "70%",
          height: "80%",
          animationDelay: "0s",
          animationDuration: "10s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(216,152,128,0.38) 0%, transparent 65%)",
        style: {
          top: "-10%",
          right: "-5%",
          width: "60%",
          height: "70%",
          animationDelay: "3.5s",
          animationDuration: "13s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 55% 45% at 55% 80%, rgba(120,168,144,0.35) 0%, transparent 60%)",
        style: {
          bottom: "-10%",
          left: "15%",
          width: "65%",
          height: "60%",
          animationDelay: "6.5s",
          animationDuration: "11s",
        },
      },
      {
        gradient:
          "radial-gradient(ellipse 40% 50% at 70% 55%, rgba(200,176,144,0.32) 0%, transparent 65%)",
        style: {
          bottom: "5%",
          right: "5%",
          width: "50%",
          height: "58%",
          animationDelay: "2s",
          animationDuration: "15s",
        },
      },
    ],

    textPrimary: "#2e3828",
    textSecondary: "#334430",
    textMuted: "#6a7860",

    btnPrimary: "linear-gradient(135deg, #78a890, #5a8868)",
    btnPrimaryText: "#f5f0e8",
    btnSecondary: "rgba(232,240,228,0.65)",
    btnSecondaryText: "#2e3828",
    btnSecondaryBorder: "rgba(120,168,144,0.5)",

    cardTint: "rgba(232,240,228,0.72)",
    glow: "rgba(90,136,104,0.3)",

    palette: {
      warm: [
        {
          name: "Peach-Rose Soul",
          steinerName: "Pfirsichrose Seele",
          hex: "#d89880",
          textColor: DARK_TEXT,
        },
        {
          name: "Earth Amber",
          steinerName: "Erdiger Bernstein",
          hex: "#c89060",
          textColor: DARK_TEXT,
        },
        {
          name: "Warm Flesh",
          steinerName: "Warmes Fleisch",
          hex: "#e0b090",
          textColor: DARK_TEXT,
        },
        {
          name: "Pale Peach",
          steinerName: "Blasses Pfirsich",
          hex: "#f0ddd0",
          textColor: DARK_TEXT,
        },
      ],
      cool: [
        {
          name: "Forest Teal",
          steinerName: "Waldblaugrün",
          hex: "#78a890",
          textColor: DARK_TEXT,
        },
        {
          name: "Misty Blue-Grey",
          steinerName: "Nebliges Blaugrau",
          hex: "#8898a8",
          textColor: DARK_TEXT,
        },
        {
          name: "Soft Teal",
          steinerName: "Sanftes Blaugrün",
          hex: "#7aaa98",
          textColor: DARK_TEXT,
        },
        {
          name: "Sage Wash",
          steinerName: "Salbeiwaschung",
          hex: "#d4e8cc",
          textColor: DARK_TEXT,
        },
      ],
      life: [
        {
          name: "Forest Green",
          steinerName: "Waldgrün",
          hex: "#5a8868",
          textColor: "#f5f0e8",
        },
        {
          name: "Living Sage",
          steinerName: "Lebendiger Salbei",
          hex: "#9ab89a",
          textColor: DARK_TEXT,
        },
      ],
      ground: [
        {
          name: "Pale Sage Ground",
          steinerName: "Blassgrüner Grund",
          hex: "#e8f0e4",
          textColor: DARK_TEXT,
        },
        {
          name: "Forest Dark",
          steinerName: "Walddunkel",
          hex: "#2e3828",
          textColor: LIGHT_TEXT,
        },
        {
          name: "Deep Forest",
          steinerName: "Tiefes Waldgrün",
          hex: "#334430",
          textColor: LIGHT_TEXT,
        },
        {
          name: "Muted Forest",
          steinerName: "Gedämpfter Wald",
          hex: "#6a7860",
          textColor: LIGHT_TEXT,
        },
      ],
    },
  },
};
