import React from "react";
import { PageLayout } from "../componets/common";
import styled from "styled-components";

export const ErrorPage = styled.section`
  text-align: center;
`;

export const ErrorPageTitle = styled.h1`
  font-size: 10rem;
  margin: 10px 0;
`;

export const ErrorPageText = styled.p`
  font-size: 1.5rem;
`;

export default function Details() {
  return (
    <PageLayout>
      <ErrorPage>
        <ErrorPageTitle>404</ErrorPageTitle>
        <ErrorPageText>Whoops... No such a page</ErrorPageText>
      </ErrorPage>
    </PageLayout>
  );
}
