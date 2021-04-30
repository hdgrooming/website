import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";
import { LOCATIONS, Location } from "../../config/locations";

const LocationItemContainer = styled.div`
  font-family: ${theme.font.sans};
  display: grid;
  grid-template-columns: auto;
  grid-gap: 50px;
  justify-items: center;

  &:nth-of-type(2) {
    justify-self: end;
  }
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

const Container = styled(Section)`
  background: ${theme.color.red};
  color: ${theme.color.white};
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 66px;
  justify-items: center;

  ${theme.media.phone("grid-template-columns: 1fr;")}
`;

export const Locations = () => {
  return (
    <Container>
      <SectionHeader>Locations</SectionHeader>

      <LocationsGrid>
        {LOCATIONS.map((l) => (
          <LocationItem key={l.label} {...l} />
        ))}
      </LocationsGrid>
    </Container>
  );
};
