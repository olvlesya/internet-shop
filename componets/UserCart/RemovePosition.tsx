import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { cartRemovePosition } from '../../store/cart/actions';
import { Button } from '../common';

const RemoveButton = styled(Button)`
  padding: 5px;
  height: auto;
  background: #ff0000;

  :hover {
    background-color: #bb0000;
  }
`;

type Props = {
  itemId: number;
};

export const RemovePosition: React.FC<Props> = ({ itemId }) => {
  const dispatch = useDispatch();

  return (
    <RemoveButton onClick={() => dispatch(cartRemovePosition(itemId))}>
      <i className="far fa-trash-alt" />
    </RemoveButton>
  );
};
