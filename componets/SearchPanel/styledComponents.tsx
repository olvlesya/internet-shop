import styled from 'styled-components';
import { Button } from './../common/Button';

export const FindButton = styled(Button)`
  width: 75px;
`;

export const FindGoods = styled.input`
  flex-grow: 1;
  height: 30px;
  border: 1px solid #1f1d1d;
  padding: 2px 2px 1px 6px;
  box-sizing: border-box;
  width: 100%;
`;

export const Controls = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  flex-grow: 1;
`;

export const Find = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ControlWrapper = styled.section`
  width: 80%;
  display: flex;
  max-width: 540px;
`;

export const SideTitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.3px;
  width: 150px;
  margin-left: 50px;
`;

export const HomePageLink = styled.a`
  text-decoration: none;
  color: #292929;
  cursor: pointer;
`;

export const CategoryLinks = styled.section`
  display: none;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Header = styled.header`
  margin-bottom: 20px;
`;
