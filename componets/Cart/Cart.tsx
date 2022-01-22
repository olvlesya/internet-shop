import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { store } from '../../types/store';
import { countSelector } from './selectors';

const CartCount = styled.span`
  font-size: 1rem;
  font-weight: 700;
  padding: 2px;
`;
const CartWrapper = styled.div`
  text-align: center;
  width: 200px;
  color: #ff7733;
  font-size: 2rem;
`;
const CardClickArea = styled.span`
  cursor: pointer;
  padding: 7px;
`;

export const Cart: React.FC = () => {
  const router = useRouter();
  const count = useSelector<store, number>(countSelector);
  return (
    <CartWrapper>
      <CardClickArea onClick={() => router.push('/cart')}>
        <i className="fas fa-shopping-cart" />
        <CartCount>{count}</CartCount>
      </CardClickArea>
    </CartWrapper>
  );
};
