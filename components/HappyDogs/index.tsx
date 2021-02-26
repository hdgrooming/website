import styled from "@emotion/styled";
import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";

const DogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 27px;
  grid-row-gap: 52px;
  justify-items: center;
  justify-content: center;
  padding: 0 180px;

  ${theme.media.middleScreen("grid-template-columns: 1fr 1fr;")}
  ${theme.media.tablet("grid-template-columns: 1fr;")}
`;
export const HappyDogs = () => {
  return (
    <Section paddedSides={false} id="happy-dogs">
      <SectionHeader>Happy Dogs</SectionHeader>
      <DogGrid>
        {new Array(15).fill(".").map((_, index) => (
          <img
            key={index}
            src={`/images/happy_dogs/${index}.png`}
            alt={`Happy Dog ${index}`}
          />
        ))}
      </DogGrid>
    </Section>
  );
};
