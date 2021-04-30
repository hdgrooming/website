import styled from "@emotion/styled";
import { theme } from "../../theme";
import { LOCATIONS } from "../../config/locations";
import { Section, SectionHeader } from "../Section";
import { QuestionForm } from "../QuestionForm";

const Container = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
  font-size: 31px;
  font-family: ${theme.font.sans};
`;

const SubHeader = styled.div`
  font-weight: 600;
  text-align: center;
  margin: 0;

  ${theme.media.tablet("font-size: 24px;")}
`;

const LocationContactItems = styled.div`
  padding: 36px 25%;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(${LOCATIONS.length}, 1fr);
  ${theme.media.tablet("font-size: 24px; padding: 36px 2.5%;")}
`;
const LocationContactItem = styled.div`
  text-align: center;
  font-weight: 300;

  p {
    margin: 0;
  }

  a {
    color: ${theme.color.white};
  }
`;

export const Contact = () => {
  return (
    <Container id="contact">
      <SectionHeader>Contact Us</SectionHeader>
      <SubHeader>Ready to Schedule an appointment for your pooch?</SubHeader>
      <LocationContactItems>
        {LOCATIONS.map((l) => (
          <LocationContactItem key={l.label}>
            <p>{l.label}</p>
            <a href={`tel:${l.phone}`}>{l.phone}</a>
          </LocationContactItem>
        ))}
      </LocationContactItems>

      <QuestionForm />
    </Container>
  );
};
