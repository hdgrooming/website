import styled from "@emotion/styled";
import { theme } from "../../theme";

export const Section = styled.section`
  padding: 80px 180px;

  ${theme.media.tablet("padding: 80px 100px;")}
  ${theme.media.phone("padding: 80px 10px;")}
`;

export const SectionHeader = styled.h2`
  margin-bottom: 80px;
  text-align: center;
  font-family: ${theme.font.serif};
  font-size: 64px;
  font-weight: 100;
`;
