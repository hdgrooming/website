import styled from "@emotion/styled";
import Image from "next/image";

import { theme } from "../../theme";
import { Section, SectionHeader } from "../Section";

type TeamMember = {
  name: string;
  title: string;
  imageSrc?: string;
};
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Faith",
    title: "Frederick Groomer",
    imageSrc: "/images/team/faith.png",
  },
  {
    name: "Allie",
    title: "Frederick Manager",
    imageSrc: "/images/team/allie.png",
  },
  {
    name: "Devan",
    title: "Frederick Groomer",
    imageSrc: "/images/team/devan.png",
  },
  {
    name: "Emma",
    title: "Frederick Receptionist",
    imageSrc: "/images/team/emma.png",
  },
  {
    name: "Wes",
    title: "Frederick Bather",
    imageSrc: "/images/team/wes.png",
  },
  {
    name: "Holly",
    title: "Frederick Groomer",
    imageSrc: "/images/team/holly.png",
  },
];
const FALLBACK_IMAGE_SRC = "/images/placeholder_member.png";

const TeamMemberItemContainer = styled.div`
  font-family: ${theme.font.sans};
  font-size: 24px;

  h5 {
    font-weight: 700;
    margin: 18px 0 0;
  }
  h6 {
    margin: 6px 0 0;
    font-weight: 400;
  }
`;

const TeamMemberItem = ({
  imageSrc = FALLBACK_IMAGE_SRC,
  name,
  title,
}: TeamMember) => {
  return (
    <TeamMemberItemContainer>
      <Image src={imageSrc} width={329} height={400} />
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

  ${theme.media.phone("grid-template-columns: 1fr;")};
`;
export const Team = () => {
  return (
    <Section>
      <SectionHeader>Meet the Team</SectionHeader>
      <TeamGrid>
        {TEAM_MEMBERS.map((tm) => (
          <TeamMemberItem key={tm.name} {...tm} />
        ))}
      </TeamGrid>
    </Section>
  );
};
