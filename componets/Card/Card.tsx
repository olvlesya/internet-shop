import React from "react";
import { useRouter } from "next/router";
import {
  CardImage,
  CardWrapper,
  MoreInfo,
  MoreInfoButton,
  Price,
} from "./styledComponents";
import { item } from "../../types/item";

type Props = item;

export const Card: React.FunctionComponent<Props> = ({
  id,
  title,
  category,
  price,
  image,
  description,
}) => {
  const router = useRouter();

  return (
    <CardWrapper>
      <section>
        <CardImage src={image} />
      </section>
      <section>{title}</section>
      <section>{description}</section>
      <Price>${price}</Price>
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
