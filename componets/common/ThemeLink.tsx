import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledLink = styled.a`
  color: #ff7733;
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

type Props = {
  href: string;
};

export const ThemeLink: React.FunctionComponent<Props> = ({
  href,
  children,
}) => {
  const router = useRouter();
  return (
    <StyledLink
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </StyledLink>
  );
};
