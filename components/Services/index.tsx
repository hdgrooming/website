import styled from "@emotion/styled";

import { Container, Section, SectionHeader } from "../Section";
import { theme } from "../../theme";

const ServicesSection = styled(Section)`
  position: relative;
  background: ${theme.color.darkGreen};
  color: ${theme.color.white};
  font-family: ${theme.font.sans};
  overflow: hidden;
  padding: ${theme.spacing.xxxl} ${theme.spacing.md};

  ${theme.media.tablet(`
    padding: ${theme.spacing.xxl} ${theme.spacing.md};
  `)}

  ${theme.media.phone(`
    padding: ${theme.spacing.xl} ${theme.spacing.sm};
  `)}
`;

const BackgroundImage = styled.img`
  position: absolute;
  max-width: 200px;
  opacity: 0.2;

  &.left {
    left: -50px;
    top: 50px;
  }

  &.right {
    right: -50px;
    bottom: 50px;

    ${theme.media.tablet(`
      display: none;
    `)}
  }
`;

const Blurb = styled.p`
  width: 80%;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
  text-align: center;
  font-size: ${theme.font.size.lg};

  ${theme.media.tablet(`
    width: 90%;
    font-size: ${theme.font.size.base};
  `)}

  ${theme.media.phone(`
    width: 100%;
  `)}
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};

  ${theme.media.phone(`
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  `)}
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.radius.md};
  padding: ${theme.spacing.lg};
  transition: ${theme.transition};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadow.md};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${theme.radius.round};
  background: ${theme.color.red};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.md};

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

const ServiceTitle = styled.h3`
  font-size: ${theme.font.size.xl};
  margin-bottom: ${theme.spacing.sm};
  font-family: ${theme.font.serif};
  font-weight: 400;
`;

const ServiceDescription = styled.p`
  font-size: ${theme.font.size.base};
  line-height: 1.6;
`;

const BottomBlurb = styled(Blurb)`
  margin-top: ${theme.spacing.xxxl};
  font-style: italic;

  ${theme.media.tablet(`
    margin-top: ${theme.spacing.xl};
  `)}
`;

const SpecialServicesSection = styled.div`
  margin-top: ${theme.spacing.xxl};
  padding: ${theme.spacing.xl};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${theme.radius.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${theme.color.red};
    border-radius: ${theme.radius.sm};
  }

  @media (max-width: 992px) {
    padding: ${theme.spacing.lg};
    margin-top: ${theme.spacing.xl};
  }

  @media (max-width: 600px) {
    padding: ${theme.spacing.md};
  }
`;

const SpecialServicesTitle = styled.h3`
  font-size: ${theme.font.size.xl};
  font-family: ${theme.font.serif};
  font-weight: 400;
  margin-bottom: ${theme.spacing.md};
  color: ${theme.color.white};
  text-align: center;

  @media (max-width: 600px) {
    font-size: ${theme.font.size.lg};
  }
`;

const SpecialServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};

  @media (max-width: 992px) {
    gap: ${theme.spacing.md};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SpecialServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &::before {
    content: "✦";
    color: ${theme.color.red};
    font-size: ${theme.font.size.lg};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transform: translateY(-1px);
  }
`;

const SpecialServiceName = styled.p`
  font-size: ${theme.font.size.base};
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
`;

const SpecialServicesNote = styled.p`
  font-size: ${theme.font.size.base};
  font-style: italic;
  text-align: center;
  margin-top: ${theme.spacing.lg};
  opacity: 0.8;
`;

export const Services = () => {
  const services = [
    {
      icon: "/images/scissors.svg",
      title: "Full Dog Grooming",
      description:
        "Complete grooming service including bath, blow dry, nail trim, ear cleaning, and a breed-specific haircut for your canine companion.",
    },
    {
      icon: "/images/bath.svg",
      title: "Bath & Tidy",
      description:
        "A refreshing bath with premium shampoo, blow dry, nail trim, and light trimming around face, feet, and tail.",
    },
    {
      icon: "/images/cat.svg",
      title: "Cat Grooming",
      description:
        "Specialized grooming services for cats including bath, brushing, nail trim, and lion cuts. Performed in a calm, cat-friendly environment.",
    },
    {
      icon: "/images/nail.svg",
      title: "Nail Trims",
      description:
        "Quick and careful nail trims to keep your dog or cat comfortable and prevent health issues.",
    },
  ];

  const specialServices = [
    "Private Grooming Suites",
    "Pet Safe Coloring",
    "Hydro Ozone Massage Baths",
    "Mud Baths",
    "Relaxation Treatments",
    "Sensitive Skin Care",
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader>Services</SectionHeader>
        <BackgroundImage src="/images/left_prints.png" className="left" />
        <BackgroundImage src="/images/right_prints.png" className="right" />

        <Blurb>
          Nose to tail, we've got you covered. From nail trims and baths to
          fully groomed haircuts for both dogs and cats, we'll have your furry
          friend feeling fresh. Appointments for all services can be booked over
          the phone.
        </Blurb>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              {/* <ServiceIcon>
                <img src={service.icon} alt={service.title} />
              </ServiceIcon> */}
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <SpecialServicesSection>
          <SpecialServicesTitle>
            Premium & Specialty Services
          </SpecialServicesTitle>
          <p>
            Select Happy Dog Grooming locations offer premium and specialty
            services to give your pet an extra special grooming experience.
            These luxury treatments are designed to enhance your pet's comfort,
            address specific needs, and provide a more personalized experience.
          </p>

          <SpecialServicesList>
            {specialServices.map((service, index) => (
              <SpecialServiceItem key={index}>
                <SpecialServiceName>{service}</SpecialServiceName>
              </SpecialServiceItem>
            ))}
          </SpecialServicesList>

          <SpecialServicesNote>
            Availability varies by location. Please call your preferred location
            to inquire about these specialty services.
          </SpecialServicesNote>
        </SpecialServicesSection>

        <BottomBlurb>
          We recommend booking grooming appointments at least one week in
          advance to secure the appointment times that are most convenient for
          you.
        </BottomBlurb>
      </Container>
    </ServicesSection>
  );
};
