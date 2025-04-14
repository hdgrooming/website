import styled from "@emotion/styled";
import { useCallback, useState, useEffect } from "react";
import { theme } from "../../theme";
import React from "react";

const Container = styled.nav`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: ${theme.color.white};
  box-shadow: ${theme.shadow.sm};
  z-index: 100;
  transition: ${theme.transition};
  padding: ${theme.spacing.sm};

  @media (max-width: 992px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 992px) {
    padding: 0 ${theme.spacing.md};
    flex-direction: row;
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  padding: ${theme.spacing.xs} 0;
  display: flex;
  justify-content: center;

  img {
    width: 140px;
    height: auto;
    transition: ${theme.transition};
  }

  @media (max-width: 992px) {
    padding: ${theme.spacing.xs} 0;
    img {
      width: 110px;
    }
  }
`;

const LinksContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.font.sans};
  font-size: ${theme.font.size.base};
  padding: ${theme.spacing.sm} 0;

  @media (max-width: 992px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${theme.color.white};
    box-shadow: ${theme.shadow.md};
    padding: ${(props) => (props.isOpen ? `${theme.spacing.sm} 0` : "0")};
    max-height: ${(props) => (props.isOpen ? "300px" : "0")};
    overflow: hidden;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    transition: all 0.3s ease-in-out;
  }
`;

const NavLink = styled.a`
  margin: 0 ${theme.spacing.md};
  cursor: pointer;
  transition: ${theme.transition};
  padding: ${theme.spacing.xs};
  color: ${theme.color.darkGray};
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.color.red};
    transition: ${theme.transition};
  }

  &:hover {
    color: ${theme.color.red};

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    margin: ${theme.spacing.xs} 0;
    width: 100%;
    text-align: center;
    padding: ${theme.spacing.md} ${theme.spacing.sm};

    &:after {
      display: none;
    }

    &:hover {
      background-color: ${theme.color.lightGreen};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.xs};
  position: absolute;
  right: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }

  @media (max-width: 600px) {
    right: ${theme.spacing.sm};
  }
`;

const MenuBar = styled.span<{ isOpen: boolean }>`
  display: block;
  height: 3px;
  width: 100%;
  background: ${theme.color.darkGray};
  border-radius: ${theme.radius.sm};
  transition: ${theme.transition};

  &:nth-of-type(1) {
    transform: ${(props) =>
      props.isOpen ? "rotate(45deg) translate(5px, 6px)" : "rotate(0)"};
  }

  &:nth-of-type(2) {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }

  &:nth-of-type(3) {
    transform: ${(props) =>
      props.isOpen ? "rotate(-45deg) translate(5px, -6px)" : "rotate(0)"};
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    console.log("Toggling menu from", isOpen, "to", !isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = useCallback<React.MouseEventHandler>((event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href");
    const element = document.querySelector(id!);
    if (!element) return;

    // Close the mobile menu when a link is clicked
    setIsOpen(false);

    const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <Container
      style={{
        padding: scrolled
          ? `${theme.spacing.xs} ${theme.spacing.md}`
          : `${theme.spacing.sm}`,
      }}
    >
      <NavbarContent ref={navRef}>
        <LogoContainer>
          <img
            src="/images/logo1.png"
            alt="HD Dog Grooming Logo"
            style={{
              width: scrolled ? "110px" : "140px",
            }}
          />
        </LogoContainer>

        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <MenuBar isOpen={isOpen} />
          <MenuBar isOpen={isOpen} />
          <MenuBar isOpen={isOpen} />
        </MobileMenuButton>

        <LinksContainer isOpen={isOpen}>
          <NavLink href="#services" onClick={handleLinkClick}>
            Services
          </NavLink>
          <NavLink href="#happy-dogs" onClick={handleLinkClick}>
            Gallery
          </NavLink>
          <NavLink href="#contact" onClick={handleLinkClick}>
            Contact Us
          </NavLink>
        </LinksContainer>
      </NavbarContent>
    </Container>
  );
};
