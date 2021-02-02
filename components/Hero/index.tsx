import styled from "@emotion/styled";
import { theme } from "../../theme";

const Container = styled.div`
  height: 636px;
  background-image: url("/images/hero1.png");
  background-repeat: no-repeat;
  background-size: cover;
  ${theme.media.tablet("background-size: contain;height: 50vw;width: 100%")}
`;

export const Hero = () => {
  return <Container />;
};
