import React from "react";
import { item } from "../../types/item";
import {
  DetailImage,
  DetailTitle,
  DetailWrapper,
  DetailInformation,
  DetailPrice,
  DetailContent,
} from "./styledComponents";
import { ThemeLink } from "../common/ThemeLink";

export const Detail: React.FunctionComponent<item> = ({
  category,
  title,
  price,
  image,
  description,
}) => {
  return (
    <DetailWrapper>
      <div>
        <DetailImage src={image} />
      </div>
      <DetailContent>
        <DetailTitle>{title}</DetailTitle>
        <section>
          <ThemeLink href={`/category/${category}`}>{category}</ThemeLink>
        </section>
        <DetailPrice>${price}</DetailPrice>
        <DetailInformation>
          <h3>Description</h3>
          {description}
        </DetailInformation>
      </DetailContent>
    </DetailWrapper>
  );
};
