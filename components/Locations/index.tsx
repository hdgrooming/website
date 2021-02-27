import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";

type LocationItemProps = {
  imageSrc: string;
  label: string;
  address: string;
};
const LOCATIONS: LocationItemProps[] = [
  {
    imageSrc: "/images/frederick.png",
    label: "Frederick",
    address: "5733 Buckeystown Pike Frederick, MD 21704",
  },
  {
    imageSrc: "/images/mt_airy.png",
    label: "Mount Airy",
    address: "203 E Ridgeville Blvd, Mt Airy, MD 21771",
  },
];

const LocationItemContainer = styled.div`
  font-family: ${theme.font.sans};
  font-size: 18px;

  &:nth-child(2) {
    justify-self: end;
  }

  h5 {
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    font-weight: 400;
  }
`;

const LocationImage = styled.img`
  border: 6px solid #e5e5e5;
  width: 100%;
`;

const LocationItem = ({ label, imageSrc, address }: LocationItemProps) => {
  return (
    <LocationItemContainer>
      <LocationImage src={imageSrc} />
      <h5>{label}</h5>
      <div>{address}</div>
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
