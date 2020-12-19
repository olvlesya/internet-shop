import styled from "styled-components";
import ClipLoader from "react-spinners/BeatLoader";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner: React.FunctionComponent = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader size={20} color="#292929" />
    </SpinnerWrapper>
  );
};
