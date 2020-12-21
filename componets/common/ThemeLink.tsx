import React from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

type LinkProps = {
  active?: boolean;
};

const StyledLink = styled.a<LinkProps>`
  color: #ff7733;
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 10px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      font-weight: 700;
    `};

  :hover {
    text-decoration: underline;
  }
`;

type Props = {
  href: string;
  active?: boolean;
};

export const ThemeLink: React.FunctionComponent<Props> = ({
  href,
  active,
  children,
}) => {
  const router = useRouter();
  return (
    <StyledLink
      active={active}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </StyledLink>
  );
};
