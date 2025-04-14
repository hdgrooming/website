import styled from "@emotion/styled";

import { theme } from "../../theme";

export const SectionHeader = styled.h2`
  margin-bottom: ${theme.spacing.xxxl};
  text-align: center;
  font-family: ${theme.font.serif};
  font-size: ${theme.font.size.display};
  font-weight: 400;
  color: inherit;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${theme.color.red};
    margin: ${theme.spacing.sm} auto 0;
  }

  @media (max-width: 992px) {
    font-size: ${theme.font.size.xxxl};
    margin-bottom: ${theme.spacing.xxl};
  }

  @media (max-width: 600px) {
    font-size: ${theme.font.size.xxl};
    margin-bottom: ${theme.spacing.xl};

    &:after {
      width: 60px;
    }
  }
`;

export const Section = styled.section`
  padding: ${theme.spacing.xxxl} 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 992px) {
    padding: ${theme.spacing.xxl} 0;
  }

  @media (max-width: 600px) {
    padding: ${theme.spacing.xl} 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  box-sizing: border-box;

  @media (max-width: 992px) {
    padding: 0 ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    padding: 0 ${theme.spacing.sm};
  }
`;
