import styled from "@emotion/styled";

import { theme } from "../../theme";
import { SectionHeader, Section, Container } from "../Section";
import { LOCATIONS, Location } from "../../config/locations";

const LocationCard = styled.div`
  font-family: ${theme.font.sans};
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border-radius: ${theme.radius.md};
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: ${theme.transition};
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadow.lg};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: ${theme.font.size.base};
  font-weight: 400;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.sm};
  flex-grow: 1;

  h5 {
    font-family: ${theme.font.serif};
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${theme.font.size.xl};
    margin: 0 0 ${theme.spacing.xs} 0;

    @media (max-width: 992px) {
      font-size: ${theme.font.size.lg};
    }
  }

  a {
    color: ${theme.color.white};
    text-decoration: none;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border: 2px solid ${theme.color.white};
    border-radius: ${theme.radius.md};
    transition: ${theme.transition};
    margin-top: ${theme.spacing.sm};
    display: inline-block;
    align-self: center;

    &:hover {
      background: ${theme.color.white};
      color: ${theme.color.red};
    }

    @media (max-width: 992px) {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
    }
  }
`;

const LocationImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.color.white};
    opacity: 0.4;
  }
`;

const LocationItem = ({ label, imageSrc, address, phone }: Location) => {
  return (
    <LocationCard>
      <LocationImage style={{ backgroundImage: `url(${imageSrc})` }} />
      <LocationInfo>
        <h5>{label}</h5>
        <div>{address}</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </LocationInfo>
    </LocationCard>
  );
};

const LocationsSection = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Locations = () => {
  return (
    <LocationsSection id="locations">
      <Container>
        <SectionHeader>Our Locations</SectionHeader>

        <LocationsGrid>
          {LOCATIONS.map((l) => (
            <LocationItem key={l.label} {...l} />
          ))}
        </LocationsGrid>
      </Container>
    </LocationsSection>
  );
};
