import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { cartAdd, cartRemove } from '../../store';
import { cartItem } from '../../types/cartItem';
import { Button } from '../common';

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CountButton = styled(Button)`
  padding: 5px;
  height: auto;
`;

const CountNumber = styled.div`
  width: 30px;
  text-align: center;
`;

export const ItemCount: React.FC<cartItem> = ({ item, count }) => {
  const dispatch = useDispatch();

  return (
    <CountWrapper>
      <CountButton onClick={() => dispatch(cartRemove(item.id))}>
        <i className="far fa-minus-square" />
      </CountButton>
      <CountNumber>{count}</CountNumber>
      <CountButton onClick={() => dispatch(cartAdd(item))}>
        <i className="far fa-plus-square" />
      </CountButton>
    </CountWrapper>
  );
};
