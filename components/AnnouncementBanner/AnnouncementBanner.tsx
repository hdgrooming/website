import styled from "@emotion/styled";
import { ReactNode } from "react";

import { theme } from "../../theme";

interface AnnouncementBannerProps {
  message: ReactNode;
}

const S = {
  Wrapper: styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: calc(100% - 48px);
    background: ${theme.color.red};
    color: ${theme.color.white};
    font-family: ${theme.font.sans};
    padding: 12px 24px;
    text-align: center;

    a {
      color: white;
      text-decoration: none;
      opacity: 0.8;

      :hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  `,
};
export const AnnouncementBanner = ({ message }: AnnouncementBannerProps) => {
  return <S.Wrapper>{message}</S.Wrapper>;
};
