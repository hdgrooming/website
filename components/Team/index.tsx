import styled from "@emotion/styled";

import { theme } from "../../theme";
import { Container, Section, SectionHeader } from "../Section";

type TeamMember = {
  name: string;
  title: string;
  imageSrc?: string;
};
const FALLBACK_IMAGE_SRC = "/images/placeholder_member.png";
const TEAM_MEMBERS: TeamMember[] = [
  { name: "Kelly", title: "Manager", imageSrc: "/images/team/kelly.jpg" },
  { name: "April", title: "Groomer", imageSrc: "/images/team/april.jpg" },
  { name: "Toni", title: "Groomer", imageSrc: "/images/team/toni.jpg" },
  { name: "Erika", title: "Groomer", imageSrc: "/images/team/erika.jpg" },
  { name: "Taylor", title: "Bather", imageSrc: "/images/team/taylor.jpeg" },
  { name: "Alicia", title: "Bather", imageSrc: "/images/team/alicia.jpg" },
  { name: "Hannah", title: "Bather", imageSrc: "/images/team/hannah.jpeg" },
  { name: "Frankie", title: "Groomer", imageSrc: "/images/team/frankie.jpeg" },
  { name: "Dan", title: "Bather" },
  {
    name: "Shalon",
    title: "Receptionist",
    imageSrc: "/images/team/shalon.jpg",
  },
  {
    name: "Faith",
    title: "Groomer",
    imageSrc: "/images/team/faith.png",
  },
  {
    name: "Allie",
    title: "Manager",
    imageSrc: "/images/team/allie.jpeg",
  },
  {
    name: "Devan",
    title: "Groomer",
    imageSrc: "/images/team/devan.png",
  },
  {
    name: "Emma",
    title: "Receptionist",
    imageSrc: "/images/team/emma.jpg",
  },
  {
    name: "Holly",
    title: "Groomer",
    imageSrc: "/images/team/holly.png",
  },
];

const TeamMemberItemContainer = styled.div`
  font-family: ${theme.font.sans};
  font-size: 18px;
  text-align: center;

  h5 {
    font-weight: 700;
    margin: 18px 0 0;
  }
  h6 {
    margin: 6px 0 0;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const TeamMemberItem = ({
  imageSrc = FALLBACK_IMAGE_SRC,
  name,
  title,
}: TeamMember) => {
  return (
    <TeamMemberItemContainer>
      <img src={imageSrc} />
      <h5> - {name} - </h5>
      <h6>{title}</h6>
    </TeamMemberItemContainer>
  );
};

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 46px;
  ${theme.media.tablet("grid-template-columns: 1fr 1fr;")}

  ${theme.media.phone("grid-template-columns: 1fr; justify-items: center;")};
`;
export const Team = () => {
  return (
    <Section id="team">
      <Container>
        <SectionHeader>Meet the Team</SectionHeader>
        <TeamGrid>
          {TEAM_MEMBERS.map((tm) => (
            <TeamMemberItem key={tm.name} {...tm} />
          ))}
        </TeamGrid>
      </Container>
    </Section>
  );
};
