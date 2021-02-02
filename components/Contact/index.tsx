import styled from "@emotion/styled";
import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";

const Container = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
`;
export const Contact = () => {
  return (
    <Container>
      <SectionHeader>Contact Us</SectionHeader>
    </Container>
  );
};
