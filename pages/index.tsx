import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../componets/Card";
import { PageLayout } from "../componets/common";
import { item } from "../types/item";

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

export default function Home() {
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json() as Promise<item[]>)
      .then((json) => setItems(json));
  }, []);

  return (
    <PageLayout>
      <Items>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Items>
    </PageLayout>
  );
}
