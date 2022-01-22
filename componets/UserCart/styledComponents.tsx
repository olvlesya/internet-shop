import styled from 'styled-components';

export const CartWrapper = styled.article`
  width: 80%;
`;

export const EmptyCart = styled.section`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const CartItemWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 80px 120px 130px;
  gap: 20px;
  margin-bottom: 15px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ItemInfoFlex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`;

export const ItemTitle = styled.div`
  font-size: 18px;
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

export const CartTotal = styled.section`
  background-color: #ff7733;
  text-align: right;
  padding: 5px;
  color: #fff;
  font-size: 18px;
`;
