import styled from "@emotion/styled";
import { theme } from "../../theme";
import { useEffect, useState } from "react";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 600px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 80vh;
  }

  @media (max-width: 600px) {
    height: 70vh;
    min-height: 500px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/hero1.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
  transform: scale(1.03);
  transition: transform 10s ease-out;

  &.loaded {
    transform: scale(1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 30%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  z-index: 2;
  position: relative;

  @media (max-width: 992px) {
    padding: 0 ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    padding: 0 ${theme.spacing.sm};
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${theme.color.white};
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s forwards 0.5s;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-family: ${theme.font.serif};
  font-size: ${theme.font.size.display};
  font-weight: 500;
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${theme.color.red};
    margin: ${theme.spacing.sm} auto 0;
  }

  @media (max-width: 992px) {
    font-size: ${theme.font.size.xxxl};
    margin-bottom: ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    font-size: ${theme.font.size.xxl};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const HeroTagline = styled.p`
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.xl};
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: ${theme.spacing.xl};
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 992px) {
    font-size: ${theme.font.size.lg};
    margin-bottom: ${theme.spacing.lg};
  }

  @media (max-width: 600px) {
    font-size: ${theme.font.size.base};
    margin-bottom: ${theme.spacing.md};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  @media (max-width: 992px) {
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.lg};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.md};
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${theme.color.red};
  color: ${theme.color.white};
  border-radius: ${theme.radius.md};
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.base};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: ${theme.transition};
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${theme.color.darkRed};
    color: ${theme.color.white};
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: ${theme.spacing.md};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${theme.color.white};
  box-shadow: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const DecorativeShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${theme.color.red};
  opacity: 0.1;
  z-index: 1;

  &.shape1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }

  &.shape2 {
    width: 200px;
    height: 200px;
    bottom: -100px;
    left: -50px;
  }

  @media (max-width: 992px) {
    &.shape1,
    &.shape2 {
      width: 150px;
      height: 150px;
    }
  }
`;

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero1.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <HeroSection id="hero">
      <BackgroundImage className={imageLoaded ? "loaded" : ""} />
      <DecorativeShape className="shape1" />
      <DecorativeShape className="shape2" />

      <HeroContainer>
        <HeroContent>
          <HeroTitle>Professional Dog Grooming</HeroTitle>
          <HeroTagline>
            Pampering your pup with expert care and love at Happy Dog Grooming
          </HeroTagline>
          <ButtonContainer>
            <Button href="#contact">Book Appointment</Button>
            <SecondaryButton href="#services">Our Services</SecondaryButton>
          </ButtonContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};
