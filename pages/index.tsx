import styled from "@emotion/styled";

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Story } from "../components/Story";
import { Locations } from "../components/Locations";
import { Team } from "../components/Team";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { HappyDogs } from "../components/HappyDogs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Container = styled.main``;
const Index = () => {
  return (
    <Container id="top">
      <Navbar />
      <Hero />
      <Story />
      <Locations />
      {/* <Team /> */}
      <Services />
      <Testimonials />
      <HappyDogs />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Index;
