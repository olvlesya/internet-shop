import React from "react";
import styled from "styled-components";
import { Card } from "../componets/Card";
import { PageLayout } from "../componets/common";

const Items = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 40px;
  padding: 0 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const items = [...new Array(13)].map((_c, ind) => (
  <Card key={ind} id={ind} price={1000} />
));

export default function Home() {
  return (
    <PageLayout>
      <Items>{items}</Items>
    </PageLayout>
  );
}
