import Image from "next/image";
import styled from "@emotion/styled";

import { theme } from "../../theme";

const Container = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  padding: 30px 70px;
  text-align: center;
`;

const LinksContainer = styled.div`
  margin-top: 27px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans};
  font-size: 24px;
  font-weight: 400;
`;

/* Display none on smaller sizes*/
const Line = styled.div`
  width: 250px;
  height: 1px;
  background: ${theme.color.red};
`;

export const Navbar = () => {
  return (
    <Container>
      <Image src="/images/logo1.png" width={222} height={171} />
      <LinksContainer>
        <Line />
        <a>Home</a>
        <a>Meet the Team</a>
        <a>Services</a>
        <a>Happy Dogs</a>
        <a>Contact Us</a>
        <Line />
      </LinksContainer>
    </Container>
  );
};
