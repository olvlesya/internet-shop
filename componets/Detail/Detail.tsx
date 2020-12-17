import React from "react";
import styled from "styled-components";

const DetailImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  transition: 0.5s;
  border: 3px solid #cc9a12;
  box-shadow: 0 0 7px #666;
  background-color: #fff;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const DetailTitle = styled.h1`
  font-size: 40px;
  display: block;
  margin-top: 2px;
  margin-bottom: 2px;
  color: #121314;
  letter-spacing: 0.3px;
`;

const DetailWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 60vw;
  margin: auto;
`;

const DetailInformation = styled.article`
  font-size: 18px;
  color: #c2c0cf;
`;

const DetailPrice = styled.h2`
  font-family: "NotoSansJP-Regular";
  font-size: 30px;
  color: #121314;
  letter-spacing: 0.3px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Detail = () => {
  return (
    <DetailWrapper>
      <div>
        <DetailImage src="https://2.bp.blogspot.com/-TX7GCa1Br_s/U5Ve9OyP-9I/AAAAAAAABiw/ACF-nTxmWVw/s1600/6780154.png" />
      </div>
      <DetailContent>
        <DetailTitle>title</DetailTitle>
        <DetailInformation>description</DetailInformation>
        <DetailPrice>1753.89</DetailPrice>
      </DetailContent>
    </DetailWrapper>
  );
};
