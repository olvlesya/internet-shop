import React from "react";
import { useRouter } from "next/router";
import {
  CardImage,
  CardWrapper,
  MoreInfo,
  MoreInfoButton,
  Price,
} from "./styledComponents";

type Props = {
  id: number;
  price: number;
};

export const Card: React.FunctionComponent<Props> = ({ id, price }) => {
  const router = useRouter();

  return (
    <CardWrapper>
      <section>
        <CardImage src="https://2.bp.blogspot.com/-TX7GCa1Br_s/U5Ve9OyP-9I/AAAAAAAABiw/ACF-nTxmWVw/s1600/6780154.png" />
      </section>
      <section>title</section>
      <section>description</section>
      <Price>
        <p>{price}</p>
      </Price>
      <MoreInfo>
        <MoreInfoButton
          onClick={() => {
            router.push(`/details/${id}`);
          }}
        >
          More info
        </MoreInfoButton>
      </MoreInfo>
    </CardWrapper>
  );
};
