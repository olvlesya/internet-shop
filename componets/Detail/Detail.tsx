import React from "react";
import { useDispatch } from "react-redux";
import { item } from "../../types/item";
import {
  DetailImage,
  DetailTitle,
  DetailWrapper,
  DetailInformation,
  DetailPrice,
  DetailContent,
  DetailImageWrapper,
  DetailAddCart,
} from "./styledComponents";
import { ThemeLink } from "../common/ThemeLink";
import { cartAdd } from "../../store";

export const Detail: React.FunctionComponent<item> = ({
  id,
  category,
  title,
  price,
  image,
  description,
}) => {
  const dispatch = useDispatch();
  return (
    <DetailWrapper>
      <DetailImageWrapper>
        <DetailImage src={image} />
      </DetailImageWrapper>
      <DetailContent>
        <DetailTitle>{title}</DetailTitle>
        <section>
          <ThemeLink href={`/category/${category}`}>{category}</ThemeLink>
        </section>
        <DetailPrice>${price}</DetailPrice>

        <DetailAddCart
          onClick={() => {
            dispatch(
              cartAdd({
                id,
                category,
                title,
                price,
                image,
                description,
              })
            );
          }}
        >
          Add to cart
        </DetailAddCart>
        <DetailInformation>
          <h3>Description</h3>
          {description}
        </DetailInformation>
      </DetailContent>
    </DetailWrapper>
  );
};
