import styled from "@emotion/styled";
import { theme } from "../../theme";
import { Container, Section, SectionHeader } from "../Section";
import { useState, useCallback } from "react";

const HappyDogsSection = styled(Section)`
  background-color: ${theme.color.lightGreen};
  padding: ${theme.spacing.xxxl} 0;

  @media (max-width: 992px) {
    padding: ${theme.spacing.xxl} 0;
  }

  @media (max-width: 600px) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const GalleryDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.lg};
  line-height: 1.5;
  color: ${theme.color.darkGray};

  @media (max-width: 992px) {
    font-size: ${theme.font.size.base};
    margin-bottom: ${theme.spacing.lg};
    padding: 0 ${theme.spacing.md};
  }
`;

const DogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const DogImageContainer = styled.div<{ isHovered: boolean }>`
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* Creates a square aspect ratio */
  position: relative;
  border-radius: ${theme.radius.md};
  overflow: hidden;
  box-shadow: ${theme.shadow.md};
  transition: ${theme.transition};
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${theme.shadow.lg};
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none; /* Disable hover scale on mobile */
    }
  }
`;

const DogImage = styled.img<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.isHovered ? "scale(1.1)" : "scale(1)")};
`;

const ImageOverlay = styled.div<{ isHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: ${theme.spacing.md};
  box-sizing: border-box;

  @media (max-width: 600px) {
    opacity: 1; /* Always show overlay on mobile */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const ImageCaption = styled.span`
  color: white;
  font-family: ${theme.font.sans};
  font-weight: bold;
  font-size: ${theme.font.size.base};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
`;

// Array of dog breeds for more descriptive captions
const dogBreeds = [
  "Golden Retriever",
  "Labrador",
  "Poodle",
  "Shih Tzu",
  "Yorkshire Terrier",
  "Husky",
  "Cocker Spaniel",
  "Schnauzer",
  "Bichon Frise",
  "Border Collie",
  "German Shepherd",
  "Beagle",
  "Dachshund",
  "Pomeranian",
  "Maltese",
];

export const HappyDogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const handleTouchStart = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  return (
    <HappyDogsSection id="happy-dogs">
      <Container>
        <SectionHeader>Gallery</SectionHeader>
        <GalleryDescription>
          Our furry clients leave with wagging tails and fresh coats. Browse
          through our gallery of happy dogs who've enjoyed our grooming
          services!
        </GalleryDescription>
        <DogGrid>
          {new Array(15).fill(".").map((_, index) => (
            <DogImageContainer
              key={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => handleTouchStart(index)}
              role="button"
              aria-label={`View ${dogBreeds[index % dogBreeds.length]} image`}
            >
              <DogImage
                src={`/images/happy_dogs/${index}.png`}
                alt={`Happy ${dogBreeds[index % dogBreeds.length]}`}
                loading="lazy"
                isHovered={hoveredIndex === index}
              />
            </DogImageContainer>
          ))}
        </DogGrid>
      </Container>
    </HappyDogsSection>
  );
};
