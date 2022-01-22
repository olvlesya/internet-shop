import styled from 'styled-components';

type Props = {
  size: string;
  scale?: number;
};

export const ImageWrapper = styled.img<Props>`
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  transition: transform 500ms;
  border: 1px solid #00000033;
  background-color: #fff;
  cursor: pointer;

  :hover {
    transform: scale(${(props) => props.scale ?? 1.05});
  }
`;
