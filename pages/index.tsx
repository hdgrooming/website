import styled from "@emotion/styled";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Story } from "../components/Story";
import { Locations } from "../components/Locations";

const Container = styled.main``;
const Index = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Story />
      <Locations />
    </Container>
  );
};

export default Index;
