import styled from "@emotion/styled";

import { theme } from "../../theme";

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

export const Section = styled.section`
  padding: 80px 24px;
`;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
