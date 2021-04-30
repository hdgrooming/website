import styled from "@emotion/styled";
import { theme } from "../../theme";

export const Section = styled.section<{ paddedSides?: boolean }>`
  padding: 80px ${({ paddedSides = true }) => (paddedSides ? "180px" : "0px")};

  ${({ paddedSides = true }) =>
    paddedSides && theme.media.tablet("padding: 48px 100px;")}
  ${({ paddedSides = true }) =>
    paddedSides && theme.media.phone("padding: 48px 40px;")}
`;

export const SectionHeader = styled.h2`
  margin-bottom: 80px;
  margin-top: 0px;
  text-align: center;
  font-family: ${theme.font.serif};
  font-size: 64px;
  font-weight: 100;

  ${theme.media.tablet("font-size: 48px;")}
  ${theme.media.phone("font-size: 36px; margin-bottom: 48px")}
`;
