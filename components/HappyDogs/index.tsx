import styled from "@emotion/styled";
import { theme } from "../../theme";
import { Container, Section, SectionHeader } from "../Section";

const DogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 27px;
  grid-row-gap: 52px;
  justify-items: center;
  justify-content: center;
  padding: 0 180px;

  ${theme.media.middleScreen("padding: 0 40px;")}
  ${theme.media.tablet("padding: 0 10px;")}

  ${theme.media.middleScreen("grid-template-columns: 1fr 1fr;")}
  ${theme.media.tablet("grid-template-columns: 1fr;")}
`;
export const HappyDogs = () => {
  return (
    <Section id="happy-dogs">
      <Container>
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
      </Container>
    </Section>
  );
};
