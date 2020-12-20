import styled from "styled-components";
import { Button } from "../common/Button";

const buttonHeight = 50;
const imageSize = 200;

export const CardWrapper = styled.article`
  text-align: center;
  box-shadow: 1px 1px 2px 2px #00000033;
  position: relative;
  background-color: #fff;
  padding: 10px;
  transition: box-shadow 200ms;

  :hover {
    box-shadow: 0 0 2px 2px #00000055;
  }
`;

export const CardImageWrapper = styled.section`
  height: ${imageSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  max-width: ${imageSize}px;
  max-height: ${imageSize}px;
`;

export const MoreInfo = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MoreInfoButton = styled(Button)`
  width: 100%;
  height: ${buttonHeight}px;
  font-size: 1.5rem;
`;

export const Price = styled.section`
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const ItemTitle = styled.section`
  font-size: 1.1rem;
  margin: 10px 0 5px;
`;

export const ItemDescription = styled.section`
  margin-bottom: ${buttonHeight + 30}px;
  font-size: 0.8rem;
`;
