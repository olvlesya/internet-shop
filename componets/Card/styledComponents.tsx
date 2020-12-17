import styled from "styled-components";
import { Button } from "../common/Button";

const buttonHeight = 50;

export const CardWrapper = styled.article`
  text-align: center;
  box-shadow: 1px 1px 2px 2px #00000033;
  position: relative;
  background-color: #fff;
`;

export const CardImage = styled.img`
  max-width: 200px;
  max-height: 200px;
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
  margin-bottom: ${buttonHeight + 10}px;
`;
