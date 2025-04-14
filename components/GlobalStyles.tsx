import { css, Global } from "@emotion/react";
import { theme } from "../theme";

export const GlobalStyles = () => (
  <Global
    styles={css`
      /* CSS Reset */
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1.5;
        font-family: ${theme.font.sans};
        color: ${theme.color.darkGray};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      /* Custom Global Styles */
      html {
        scroll-behavior: smooth;
        box-sizing: border-box;
        font-size: 16px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.font.serif};
        font-weight: 400;
        line-height: 1.2;
        margin-bottom: ${theme.spacing.md};
      }

      h1 {
        font-size: ${theme.font.size.display};
        ${theme.media.tablet(`font-size: ${theme.font.size.xxxl};`)}
        ${theme.media.phone(`font-size: ${theme.font.size.xxl};`)}
      }

      h2 {
        font-size: ${theme.font.size.xxxl};
        ${theme.media.tablet(`font-size: ${theme.font.size.xxl};`)}
        ${theme.media.phone(`font-size: ${theme.font.size.xl};`)}
      }

      h3 {
        font-size: ${theme.font.size.xxl};
        ${theme.media.tablet(`font-size: ${theme.font.size.xl};`)}
        ${theme.media.phone(`font-size: ${theme.font.size.lg};`)}
      }

      p {
        margin-bottom: ${theme.spacing.md};
      }

      a {
        color: ${theme.color.red};
        text-decoration: none;
        transition: ${theme.transition};

        &:hover {
          color: ${theme.color.darkRed};
        }
      }

      button,
      .button {
        display: inline-block;
        background-color: ${theme.color.red};
        color: ${theme.color.white};
        border: none;
        border-radius: ${theme.radius.md};
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        font-family: ${theme.font.sans};
        font-size: ${theme.font.size.base};
        cursor: pointer;
        transition: ${theme.transition};
        text-align: center;

        &:hover {
          background-color: ${theme.color.darkRed};
        }
      }

      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${theme.spacing.md};
      }

      .text-center {
        text-align: center;
      }

      @media (max-width: 600px) {
        html {
          font-size: 14px;
        }
      }
    `}
  />
);
