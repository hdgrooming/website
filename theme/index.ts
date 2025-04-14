export const theme = {
  color: {
    black: "#000",
    darkGreen: "#1E3A2B",
    green: "#2D5741",
    lightGreen: "#EAEFEC",
    red: "#AB2328",
    darkRed: "#7A171B",
    white: "#fff",
    gray: "#F5F5F5",
    darkGray: "#333333",
    textLight: "#666666",
  },
  font: {
    sans: "'Alef', sans-serif",
    serif: "'Brim-Narrow', serif",
    size: {
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "22px",
      xl: "28px",
      xxl: "36px",
      xxxl: "48px",
      display: "64px",
    },
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
    xxxl: "80px",
  },
  shadow: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.05)",
    md: "0 4px 8px rgba(0, 0, 0, 0.1)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.15)",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    round: "50%",
  },
  transition: "all 0.3s ease",
  media: {
    desktop: (styles: string) => `
    @media (min-width: 1201px) {
      ${styles}
    }
    `,
    middleScreen: (styles: string) => `
    @media (max-width: 1200px) {
      ${styles}
    }
    `,
    tablet: (styles: string) => `
    @media (max-width: 992px) {
      ${styles}
    }
    `,
    phone: (styles: string) => `
    @media (max-width: 600px) {
      ${styles}
    }
    `,
  },
};
