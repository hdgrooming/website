import styled from "@emotion/styled";
import { theme } from "../../theme";
import { Section, Container, SectionHeader } from "../Section";

const StorySection = styled(Section)`
  background: ${theme.color.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    right: -100px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: rgba(171, 35, 40, 0.05);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(171, 35, 40, 0.05);
    z-index: 0;
  }
`;

const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
    text-align: center;
  }
`;

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-self: end;

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    bottom: 10%;
    right: -${theme.spacing.xl};
    width: 3px;
    background-color: ${theme.color.red};

    @media (max-width: 992px) {
      display: none;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    transition: ${theme.transition};

    &:hover {
      transform: scale(1.03);
    }
  }
`;

const AwardCaption = styled.h4`
  font-family: ${theme.font.serif};
  font-size: ${theme.font.size.lg};
  font-weight: 500;
  text-align: center;
  margin: ${theme.spacing.md} 0 0;
  color: ${theme.color.darkGray};
  padding: ${theme.spacing.md};
  border-radius: ${theme.radius.md};
  background-color: rgba(171, 35, 40, 0.05);

  @media (max-width: 992px) {
    font-size: ${theme.font.size.base};
    max-width: 80%;
  }
`;

const StoryText = styled.div`
  justify-self: start;

  h3 {
    font-family: ${theme.font.serif};
    font-size: ${theme.font.size.xxxl};
    font-weight: 400;
    margin: 0 0 ${theme.spacing.md} 0;
    color: ${theme.color.darkGray};
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: -${theme.spacing.xs};
      left: 0;
      width: 80px;
      height: 3px;
      background-color: ${theme.color.red};

      @media (max-width: 992px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 992px) {
      font-size: ${theme.font.size.xxl};
    }
  }

  p {
    font-family: ${theme.font.sans};
    font-size: ${theme.font.size.base};
    line-height: 1.7;
    margin: ${theme.spacing.lg} 0 0;
    color: ${theme.color.textLight};

    @media (max-width: 992px) {
      margin: ${theme.spacing.md} 0 0;
    }
  }
`;

const BestOfBest = () => (
  <AwardContainer>
    <img
      src="/images/best.png"
      alt="Best of the Best Award"
      width={400}
      height="auto"
    />
    <AwardCaption>
      Voted Frederick's Best of the Best 3 years in a row!
    </AwardCaption>
  </AwardContainer>
);

export const Story = () => {
  return (
    <StorySection id="story">
      <Container>
        <StoryContent>
          <BestOfBest />
          <StoryText>
            <h3>Our Story</h3>
            <p>
              Happy Dog Grooming opened its doors in the fall of 2012 with the
              goal of providing local dog owners with high quality grooming
              services. Operating in Mount Airy, Frederick, Brunswick, and
              Columbia, MD - Happy Dog was built on the foundation of creating a
              comfortable grooming environment for your furry companion,
              reducing stress, and establishing bath time as a positive
              experience for all dogs.
            </p>
          </StoryText>
        </StoryContent>
      </Container>
    </StorySection>
  );
};
