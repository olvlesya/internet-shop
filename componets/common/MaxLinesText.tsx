import styled from "styled-components";

type Props = {
  lines: number;
};

export const MaxLinesText = styled.p<Props>`
  margin: 0;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${(props) => `-webkit-line-clamp: ${props.lines};`}
`;
