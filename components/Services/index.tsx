import styled from "@emotion/styled";

import { Section, SectionHeader } from "../Section";
import { theme } from "../../theme";

const Container = styled(Section)`
  position: relative;
  background: ${theme.color.darkGreen};
  color: ${theme.color.white};
  font-family: ${theme.font.sans};
  font-size: 24px;
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

const Blurb = styled.div`
  padding: 0 80px;
`;

const BottomBlurb = styled(Blurb)`
  margin-top: 200px;

  ${theme.media.tablet("margin-top: 80px;")}
`;

export const Services = () => {
  return (
    <Container paddedSides={false} id="services">
      <SectionHeader>Services</SectionHeader>
      <img src="/images/left_prints.png" />
      <img src="/images/right_prints.png" />
      <Blurb>
        Quick services such as nail trimming, teeth brushing, and ear cleaning
        are available to walk-in Clients. Appointments for grooming and bath
        services can be booked over the phone. We cannot guarentee availability
        for bath or grooming service packages to clients without appointments.
      </Blurb>
      <BottomBlurb>
        We recommend booking grooming appointments at least one week in advance
        to secure the appointment times that are most convenient for you.
      </BottomBlurb>
    </Container>
  );
};
