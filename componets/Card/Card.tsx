import React from "react";
import { useRouter } from "next/router";
import {
  CardImage,
  CardWrapper,
  MoreInfo,
  MoreInfoButton,
  CardImageWrapper,
  Price,
  ItemTitle,
  ItemDescription,
} from "./styledComponents";
import { MaxLinesText } from "../common/MaxLinesText";
import { item } from "../../types/item";

type Props = item;

export const Card: React.FunctionComponent<Props> = ({
  id,
  title,
  price,
  image,
  description,
}) => {
  const router = useRouter();

  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage src={image} alt={title} />
      </CardImageWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>
        <MaxLinesText lines={3}>{description}</MaxLinesText>
      </ItemDescription>
      <Price>${price}</Price>
      <MoreInfo>
        <MoreInfoButton
          role="link"
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
