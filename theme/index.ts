export const theme = {
  color: {
    black: "#000",
    darkGreen: "#212D21",
    red: "#950000",
    darkRed: "#540000",
    white: "#fff",
  },
  font: {
    sans: "Alef",
    serif: "Brim-Narrow",
  },
  media: {
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
