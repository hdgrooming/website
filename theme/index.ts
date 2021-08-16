export const theme = {
  color: {
    black: "#000",
    darkGreen: "#212D21",
    red: "#950000",
    darkRed: "#540000",
    white: "#fff",
  },
  font: {
    sans: "Alef, sans-serif",
    serif: "Brim-Narrow",
  },
  shadow: "0 0 4px 2px rgba(50, 50, 50, 0.4)",
  media: {
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
