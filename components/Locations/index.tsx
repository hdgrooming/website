import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "../../theme";

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
  font-size: 24px;

  h5 {
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    font-weight: 400;
  }
`;

const LocationImage = styled(Image)`
  border: 6px solid #e5e5e5;
`;

const LocationItem = ({ label, imageSrc, address }: LocationItemProps) => {
  return (
    <LocationItemContainer>
      <LocationImage src={imageSrc} width={507} height={307} />
      <h5>{label}</h5>
      <div>{address}</div>
    </LocationItemContainer>
  );
};

const Container = styled.section`
  background: ${theme.color.red};
  padding: 60px 10%;
  text-align: center;
  color: ${theme.color.white};

  ${theme.media.tablet("padding: 30px 60px;")}

  h2 {
    font-family: ${theme.font.serif};
    font-size: 64px;
    font-weight: 100;
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  ${theme.media.phone("grid-template-columns: 1fr;")}
`;

export const Locations = () => {
  return (
    <Container>
      <h2>Locations</h2>

      <LocationsGrid>
        {LOCATIONS.map((l) => (
          <LocationItem key={l.label} {...l} />
        ))}
      </LocationsGrid>
    </Container>
  );
};
