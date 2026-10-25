/**
 * SkyKloud - Cloud Convergence Design System
 * Tailored for Antigravity IDE / Modern Web & React / Tailwind Ecosystems
 */

export const skyKloudTheme = {
  name: "Cloud Convergence",
  brand: "SkyKloud",
  typography: {
    fontFamily: {
      sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
    },
    googleFontsImport: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },
  colors: {
    brand: {
      primary: "#0284c7",       // Electric Sky Blue
      primaryHover: "#0369a1",
      primaryLight: "#38bdf8",
      primaryMuted: "rgba(2, 132, 199, 0.15)",
      accent: "#f59e0b",        // Radiant Gold / Amber
      accentHover: "#d97706",
      accentLight: "#fbbf24",
      accentMuted: "rgba(245, 158, 11, 0.15)",
    },
    surface: {
      base: "#0b1326",          // Main page background
      containerLowest: "#060e20",// Deepest contrast (cards, recessed panels)
      containerLow: "#131b2e",   // Standard card & container background
      containerMedium: "#1a243b",// Elevated hover / interactive surfaces
      containerHigh: "#232e48",  // Modals, tooltips, active badges
      containerBright: "#31394d",// High-contrast border highlights
    },
    text: {
      primary: "#f8fafc",        // Titles & high-emphasis headings
      secondary: "#cbd5e1",      // Body copy & readable text
      muted: "#94a3b8",          // Subtitles, metadata, form labels
      subtle: "#64748b",         // Footnotes, inactive tabs, dividers
      inverse: "#0f172a",        // For amber/gold filled CTA buttons
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.08)",
      glass: "rgba(255, 255, 255, 0.12)",
      focus: "#0284c7",
      accent: "rgba(245, 158, 11, 0.3)",
    },
    status: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#38bdf8",
    }
  },
  borderRadius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    full: "9999px",
  },
  shadows: {
    glowBlue: "0 0 35px -5px rgba(2, 132, 199, 0.25)",
    glowAmber: "0 0 30px -5px rgba(245, 158, 11, 0.22)",
    cardGlass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
  }
};

export default skyKloudTheme;
