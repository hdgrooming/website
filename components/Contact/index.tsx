import styled from "@emotion/styled";
import { theme } from "../../theme";
import { LOCATIONS } from "../../config/locations";
import { Section, SectionHeader, Container } from "../Section";

const ContactSection = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
  padding: ${theme.spacing.xxxl} ${theme.spacing.md};
  overflow: hidden;

  @media (max-width: 992px) {
    padding: ${theme.spacing.xxl} ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    padding: ${theme.spacing.xl} ${theme.spacing.sm};
  }
`;

const SubHeader = styled.div`
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.xl};
  font-weight: 600;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 992px) {
    font-size: ${theme.font.size.lg};
    margin-bottom: ${theme.spacing.lg};
  }

  @media (max-width: 600px) {
    font-size: ${theme.font.size.base};
    margin-bottom: ${theme.spacing.md};
  }
`;

const LocationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 992px) {
    gap: ${theme.spacing.lg};
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const LocationCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: ${theme.transition};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 992px) {
    padding: ${theme.spacing.lg};
  }
`;

const LocationName = styled.h3`
  font-family: ${theme.font.serif};
  font-size: ${theme.font.size.xl};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: 992px) {
    font-size: ${theme.font.size.lg};
  }
`;

const PhoneLink = styled.a`
  display: inline-block;
  color: ${theme.color.white};
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.lg};
  text-decoration: none;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: 2px solid ${theme.color.white};
  border-radius: ${theme.radius.md};
  transition: ${theme.transition};
  word-break: keep-all;
  white-space: nowrap;

  &:hover {
    background: ${theme.color.white};
    color: ${theme.color.red};
  }

  @media (max-width: 992px) {
    font-size: ${theme.font.size.base};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;

const InfoText = styled.p`
  text-align: center;
  margin-top: ${theme.spacing.xxl};
  font-size: ${theme.font.size.base};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    margin-top: ${theme.spacing.xl};
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container style={{ overflowX: "hidden" }}>
        <SectionHeader>Contact Us</SectionHeader>
        <SubHeader>Ready to Schedule an appointment for your pooch?</SubHeader>

        <LocationsContainer>
          {LOCATIONS.map((location) => (
            <LocationCard key={location.label}>
              <LocationName>{location.label}</LocationName>
              <PhoneLink href={`tel:${location.phone}`}>
                {location.phone}
              </PhoneLink>
            </LocationCard>
          ))}
        </LocationsContainer>

        <InfoText>
          Our friendly staff is ready to help you schedule the perfect grooming
          experience for your dog. Don't hesitate to call with any questions
          about our services.
        </InfoText>
      </Container>
    </ContactSection>
  );
};
