import styled from "@emotion/styled";

import { Container, Section, SectionHeader } from "../Section";
import { theme } from "../../theme";

const ServicesSection = styled(Section)`
  position: relative;
  background: ${theme.color.darkGreen};
  color: ${theme.color.white};
  font-family: ${theme.font.sans};
  font-size: 18px;
  text-align: center;
  overflow: hidden;

  img {
    position: absolute;
    max-width: 100%;
  }

  img:first-of-type {
    left: -24px;
    top: 6px;
  }
  img:last-of-type {
    right: -24px;
    bottom: -80px;

    ${theme.media.tablet("display: none;")}
  }
`;

const Blurb = styled.p`
  width: 80%;
  margin: 0 auto;
  line-height: 1.5;
  ${theme.media.phone("width: 90%;")}
`;

const BottomBlurb = styled(Blurb)`
  margin-top: 200px;

  ${theme.media.tablet("margin-top: 80px;")}
`;

export const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>Services</SectionHeader>
        <img src="/images/left_prints.png" />
        <img src="/images/right_prints.png" />
        <Blurb>
          Nose to tail, we've got you covered. From nail trims, baths and teeth
          brushing to fully groomed haircuts, we'll have your pup feeling fresh.
          Appointments for all services can be booked over the phone.
        </Blurb>
        <BottomBlurb>
          We recommend booking grooming appointments at least one week in
          advance to secure the appointment times that are most convenient for
          you.
        </BottomBlurb>
      </Container>
    </ServicesSection>
  );
};
