import styled from 'styled-components';

export const DetailTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 2px;
  margin-bottom: 2px;
  color: #0a0d0f;
  letter-spacing: 0.3px;
`;

export const DetailWrapper = styled.article`
  display: flex;
  width: 80%;
  margin: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const DetailImageWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-bottom: 40px;
  }
`;
export const DetailInformation = styled.section`
  font-size: 18px;
`;

export const DetailPrice = styled.h2`
  font-size: 1.5rem;
  color: #0a0d0f;
  letter-spacing: 0.3px;
`;

export const DetailContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 40px;
  @media (max-width: 1024px) {
  }
`;
export const DetailAddCart = styled.button`
  width: 400px;
  height: 40px;
  cursor: pointer;
  color: #fff;
  background-color: #292929;
  border: none;
  border-radius: 0;
  font-size: 1rem;
  transition: background-color 300ms;

  :hover {
    background-color: #ff5d0d;
  }
`;
