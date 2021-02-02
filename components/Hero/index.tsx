import styled from "@emotion/styled";
import { theme } from "../../theme";

const Container = styled.div`
  /* width: 100vw */
  height: 636px;
  background-image: url("/images/hero1.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* Change background-size to contain on smaller screen sizes*/
  ${theme.media.tablet("background-size: contain;")}
`;

export const Hero = () => {
  return <Container />;
};
