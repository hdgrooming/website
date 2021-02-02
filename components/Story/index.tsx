import styled from "@emotion/styled";
import Image from "next/image";
import { theme } from "../../theme";

const Container = styled.section`
  display: flex;
  padding: 60px 0;
  justify-content: center;

  ${theme.media.tablet("padding-top: 30px;")}
  ${theme.media.phone("padding-top: 0;")}
`;

const BoBContainer = styled.div`
  flex: 1;
  border-right: 3px solid ${theme.color.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 60px;

  ${theme.media.tablet("display: none;")}

  h4 {
    font-family: ${theme.font.serif};
    font-size: 30px;
    text-align: center;
    font-weight: 100;
  }
`;

const BestOfBest = () => (
  <BoBContainer>
    <Image src="/images/best.png" width={488} height={452} />
    <h4>Voted frederick's best of the best 3 years in a row!</h4>
  </BoBContainer>
);

const StoryBlurb = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;

  h3 {
    font-family: ${theme.font.serif};
    font-size: 48px;
    font-weight: 100;
    margin: 0;
  }

  p {
    font-family: ${theme.font.sans};
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    margin-top: 30px;
  }
`;

export const Story = () => {
  return (
    <Container>
      <BestOfBest />
      <StoryBlurb>
        <h3>Our story</h3>
        <p>
          Happy Dog Grooming opened its doors in the fall of 2012 with the goal
          of providing local dog owners with high quality grooming services.
          Operating in both Mount Airy and Frederick, MD - Happy Dog was built
          on the foundation of creating a comfortable grooming environment for
          your furry companion, reducing stress, and establishing bath time as a
          positive experience for all dogs.
        </p>
      </StoryBlurb>
    </Container>
  );
};
