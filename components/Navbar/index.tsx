import styled from "@emotion/styled";
import { useCallback } from "react";

import { theme } from "../../theme";

const Container = styled.nav`
  box-sizing: border-box;
  height: 300px;
  padding: 30px 70px;
  text-align: center;
  position: sticky;
  top: -201px;
  background: ${theme.color.white};
  box-shadow: ${theme.shadow};
  z-index: 2;

  ${theme.media.tablet("padding: 30px 30px")}
  ${theme.media.phone("padding: 30px 10px")}
`;

const LinksContainer = styled.div`
  margin-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${theme.font.sans};
  font-size: 18px;
  font-weight: 400;

  ${theme.media.tablet("font-size: 18px;")}
  ${theme.media.phone("font-size: 16px;")}
`;

const NavLink = styled.a`
  flex: 0 auto;
  width: 150px;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  padding: 8px;
  color: black;
  text-decoration: none;

  &:hover {
    color: ${theme.color.red};
  }
`;

/* Display none on smaller sizes*/
const Line = styled.div`
  flex: auto;
  height: 1px;
  background: ${theme.color.red};

  ${theme.media.phone(`display: none;`)}
`;

export const Navbar = () => {
  const handleLinkClick = useCallback<React.MouseEventHandler>((event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href");
    const element = document.querySelector(id!);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.pageYOffset - 40;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <img src="/images/logo1.png" width={222} height={171} />
      <LinksContainer>
        <Line />
        <NavLink href="#team" onClick={handleLinkClick}>
          Team
        </NavLink>
        <NavLink href="#services" onClick={handleLinkClick}>
          Services
        </NavLink>
        <NavLink href="#happy-dogs" onClick={handleLinkClick}>
          Gallery
        </NavLink>
        <NavLink href="#contact" onClick={handleLinkClick}>
          Contact Us
        </NavLink>
        <Line />
      </LinksContainer>
    </Container>
  );
};
