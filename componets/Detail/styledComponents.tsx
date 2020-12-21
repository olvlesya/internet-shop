import styled from "styled-components";

export const DetailImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  transition: transform 500ms;
  border: 1px solid #00000033;
  background-color: #fff;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

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
