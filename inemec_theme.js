/**
 * INEMEC Brand Identity Theme Configuration
 * Based on: Manual de Identidad Visual INEMEC (2012)
 * 
 * Compatible with:
 * - React / Next.js
 * - Vue / Nuxt
 * - Svelte / SvelteKit
 * - Tailwind CSS
 * - Styled Components
 * - Emotion
 */

export const inemecTheme = {
  brand: {
    name: 'INEMEC',
    fullName: 'Ingeniería ElectroMecánica - Inemec Ltda.',
    tagline: 'Ingeniería ElectroMecánica',
  },

  colors: {
    // Primary Colors - Colores Corporativos
    primary: {
      main: '#D52B1E',
      hover: '#B22318',
      active: '#8A1C13',
      light: 'rgba(213, 43, 30, 0.2)',
      lighter: 'rgba(213, 43, 30, 0.1)',
      rgb: { r: 213, g: 43, b: 30 },
      pantone: '485 C',
      cmyk: { c: 0, m: 90, y: 100, k: 0 },
    },
    secondary: {
      main: '#939598',
      hover: '#75767A',
      active: '#5C5D5F',
      light: 'rgba(147, 149, 152, 0.2)',
      lighter: 'rgba(147, 149, 152, 0.1)',
      rgb: { r: 147, g: 149, b: 152 },
      pantone: 'Cool Gray 8 C',
      cmyk: { c: 0, m: 0, y: 0, k: 60 },
    },

    // Neutral Colors
    white: '#FFFFFF',
    black: '#000000',

    // Background Colors
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#FAFBFC',
    },

    // Text Colors
    text: {
      primary: '#333333',
      secondary: '#666666',
      tertiary: '#939598',
      light: '#999999',
      white: '#FFFFFF',
    },

    // Border Colors
    border: {
      main: '#E0E0E0',
      light: '#F0F0F0',
      dark: '#CCCCCC',
    },

    // Status Colors
    status: {
      success: '#D52B1E',
      successLight: 'rgba(213, 43, 30, 0.1)',
      info: '#939598',
      infoLight: 'rgba(147, 149, 152, 0.1)',
      warning: '#FFC107',
      warningLight: 'rgba(255, 193, 7, 0.1)',
      error: '#DC3545',
      errorLight: 'rgba(220, 53, 69, 0.1)',
    },
  },

  typography: {
    // Font Families
    fontFamily: {
      base: "'Helvetica Neue', 'Arial', 'Roboto', sans-serif",
      condensed: "'Arial Narrow', 'Helvetica Neue Condensed', sans-serif",
      // Original corporate font (if available)
      corporate: "'Swis 721 LtCn BT', 'Helvetica Neue', 'Arial', sans-serif",
    },

    // Font Sizes
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '2rem',    // 32px
      '4xl': '2.5rem',  // 40px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },

    // Font Weights
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    // Line Heights
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },

    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  spacing: {
    // Spacing Scale - Based on 8px
    0: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
    '6xl': '128px',
  },

  borderRadius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },

  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(147, 149, 152, 0.1)',
    sm: '0 2px 8px rgba(147, 149, 152, 0.15)',
    md: '0 4px 16px rgba(147, 149, 152, 0.25)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },

  transitions: {
    fast: '0.15s ease',
    base: '0.3s ease',
    slow: '0.5s ease',
    all: 'all 0.3s ease',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  logo: {
    // Logo Proportions
    proportions: {
      vertical: {
        symbol: { width: '33X', height: '20X' },
        logotype: { width: '37X', height: '6X' },
        total: { width: '37X', height: '29X' },
      },
      horizontal: {
        total: { width: '60X', height: '8X' },
      },
    },

    // Minimum Sizes
    minimumSize: {
      vertical: { width: '8.3mm', height: '5.0mm', widthPx: 32, heightPx: 19 },
      horizontal: { width: '17.8mm', height: '5.0mm', widthPx: 67, heightPx: 19 },
    },

    // Clear Space (12.5% of total height)
    clearSpace: '12.5%',
  },
};

// Export individual theme sections for convenience
export const colors = inemecTheme.colors;
export const typography = inemecTheme.typography;
export const spacing = inemecTheme.spacing;
export const borderRadius = inemecTheme.borderRadius;
export const shadows = inemecTheme.shadows;
export const transitions = inemecTheme.transitions;
export const breakpoints = inemecTheme.breakpoints;
export const zIndex = inemecTheme.zIndex;

// Tailwind CSS Configuration
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        'inemec-red': {
          DEFAULT: colors.primary.main,
          light: colors.primary.light,
          lighter: colors.primary.lighter,
          hover: colors.primary.hover,
          active: colors.primary.active,
        },
        'inemec-gray': {
          DEFAULT: colors.secondary.main,
          light: colors.secondary.light,
          lighter: colors.secondary.lighter,
          hover: colors.secondary.hover,
          active: colors.secondary.active,
        },
        'inemec-text': {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          tertiary: colors.text.tertiary,
          light: colors.text.light,
        },
      },
      fontFamily: {
        sans: typography.fontFamily.base.split(',').map(f => f.trim()),
        condensed: typography.fontFamily.condensed.split(',').map(f => f.trim()),
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      spacing: spacing,
      borderRadius: borderRadius,
      boxShadow: shadows,
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
};

// Styled Components / Emotion Theme
export const styledTheme = {
  colors: {
    primary: colors.primary.main,
    primaryHover: colors.primary.hover,
    primaryActive: colors.primary.active,
    primaryLight: colors.primary.light,
    secondary: colors.secondary.main,
    secondaryHover: colors.secondary.hover,
    secondaryActive: colors.secondary.active,
    secondaryLight: colors.secondary.light,
    white: colors.white,
    black: colors.black,
    text: colors.text,
    background: colors.background,
    border: colors.border,
    status: colors.status,
  },
  fonts: typography.fontFamily,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeight,
  lineHeights: typography.lineHeight,
  space: spacing,
  radii: borderRadius,
  shadows: shadows,
  transitions: transitions,
  breakpoints: Object.values(breakpoints),
  zIndices: zIndex,
};

// CSS Variables Generator
export const generateCSSVariables = () => {
  return `
:root {
  /* Primary Colors */
  --inemec-red: ${colors.primary.main};
  --inemec-red-hover: ${colors.primary.hover};
  --inemec-red-active: ${colors.primary.active};
  --inemec-red-light: ${colors.primary.light};
  --inemec-red-lighter: ${colors.primary.lighter};
  
  --inemec-gray: ${colors.secondary.main};
  --inemec-gray-hover: ${colors.secondary.hover};
  --inemec-gray-active: ${colors.secondary.active};
  --inemec-gray-light: ${colors.secondary.light};
  --inemec-gray-lighter: ${colors.secondary.lighter};
  
  /* Neutral Colors */
  --inemec-white: ${colors.white};
  --inemec-black: ${colors.black};
  
  /* Background Colors */
  --inemec-bg-primary: ${colors.background.primary};
  --inemec-bg-secondary: ${colors.background.secondary};
  --inemec-bg-tertiary: ${colors.background.tertiary};
  
  /* Text Colors */
  --inemec-text-primary: ${colors.text.primary};
  --inemec-text-secondary: ${colors.text.secondary};
  --inemec-text-tertiary: ${colors.text.tertiary};
  --inemec-text-light: ${colors.text.light};
  
  /* Border Colors */
  --inemec-border: ${colors.border.main};
  --inemec-border-light: ${colors.border.light};
  --inemec-border-dark: ${colors.border.dark};
  
  /* Typography */
  --font-family-base: ${typography.fontFamily.base};
  --font-family-condensed: ${typography.fontFamily.condensed};
  
  /* Spacing */
  --spacing-xs: ${spacing.xs};
  --spacing-sm: ${spacing.sm};
  --spacing-md: ${spacing.md};
  --spacing-lg: ${spacing.lg};
  --spacing-xl: ${spacing.xl};
  --spacing-2xl: ${spacing['2xl']};
  --spacing-3xl: ${spacing['3xl']};
  
  /* Border Radius */
  --radius-sm: ${borderRadius.sm};
  --radius-md: ${borderRadius.md};
  --radius-lg: ${borderRadius.lg};
  --radius-xl: ${borderRadius.xl};
  --radius-full: ${borderRadius.full};
  
  /* Shadows */
  --shadow-sm: ${shadows.sm};
  --shadow-md: ${shadows.md};
  --shadow-lg: ${shadows.lg};
  
  /* Transitions */
  --transition-fast: ${transitions.fast};
  --transition-base: ${transitions.base};
  --transition-slow: ${transitions.slow};
}
  `.trim();
};

// Component Style Presets
export const componentStyles = {
  button: {
    primary: {
      backgroundColor: colors.primary.main,
      color: colors.white,
      padding: `${spacing.md} ${spacing.lg}`,
      borderRadius: borderRadius.md,
      fontWeight: typography.fontWeight.semibold,
      transition: transitions.all,
      '&:hover': {
        backgroundColor: colors.primary.hover,
        transform: 'translateY(-2px)',
        boxShadow: shadows.md,
      },
      '&:active': {
        backgroundColor: colors.primary.active,
        transform: 'translateY(0)',
      },
    },
    secondary: {
      backgroundColor: colors.secondary.main,
      color: colors.white,
      padding: `${spacing.md} ${spacing.lg}`,
      borderRadius: borderRadius.md,
      fontWeight: typography.fontWeight.semibold,
      transition: transitions.all,
      '&:hover': {
        backgroundColor: colors.secondary.hover,
        transform: 'translateY(-2px)',
        boxShadow: shadows.md,
      },
    },
  },
  card: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.secondary.main}`,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.sm,
    padding: spacing.lg,
    transition: transitions.all,
    '&:hover': {
      boxShadow: shadows.md,
      transform: 'translateY(-4px)',
    },
  },
  input: {
    padding: `${spacing.md} ${spacing.md}`,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.base,
    color: colors.text.primary,
    backgroundColor: colors.white,
    border: `2px solid ${colors.secondary.main}`,
    borderRadius: borderRadius.sm,
    transition: transitions.fast,
    '&:focus': {
      outline: 'none',
      borderColor: colors.primary.main,
      boxShadow: `0 0 0 3px ${colors.primary.lighter}`,
    },
  },
  navbar: {
    backgroundColor: colors.primary.main,
    color: colors.white,
    padding: `${spacing.md} ${spacing.xl}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

// Export default
export default inemecTheme;