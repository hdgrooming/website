import styled from "@emotion/styled";

import { theme } from "../../theme";
import { SectionHeader, Section, Container } from "../Section";
import { LOCATIONS, Location } from "../../config/locations";

const LocationItemContainer = styled.div`
  font-family: ${theme.font.sans};
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
  justify-items: center;
  max-width: 350px;
`;

const LocationInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  grid-gap: 12px;
  width: 50%;
  ${theme.media.phone("width: 90%;")}

  h5 {
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }

  a {
    color: white;
  }
`;

const LocationImage = styled.img`
  border: 6px solid #e5e5e5;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const LocationItem = ({ label, imageSrc, address, phone }: Location) => {
  return (
    <LocationItemContainer>
      <LocationImage src={imageSrc} />
      <LocationInfo>
        <h5>{label}</h5>
        <div>{address}</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </LocationInfo>
    </LocationItemContainer>
  );
};

const LocationsSection = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
`;

const LocationsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;

  ${theme.media.tablet("grid-template-columns: 1fr;")}
`;

export const Locations = () => {
  return (
    <LocationsSection>
      <Container>
        <SectionHeader>Locations</SectionHeader>

        <LocationsGrid>
          {LOCATIONS.map((l) => (
            <LocationItem key={l.label} {...l} />
          ))}
        </LocationsGrid>
      </Container>
    </LocationsSection>
  );
};
