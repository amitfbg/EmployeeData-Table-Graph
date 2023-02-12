import React from "react";
import styled from "styled-components";
import HourglassEmptySharpIcon from "@mui/icons-material/HourglassEmptySharp";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SpeakerNotesOff from "@mui/icons-material/SpeakerNotesOff";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiSvgIcon-root {
    height: 2rem;
    width: 2rem;
  }
`;

const Error = styled(ErrorOutlineIcon)``;

const EmptyData = styled(SpeakerNotesOff)``;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.div`
  font-size: 1.6rem;
  color: #bfc1c7;
  font-weight: 400;
  margin-left: 0.5rem;
`;

const ButtonWrap = styled.div``;

const Loader = styled(HourglassEmptySharpIcon)`
  @keyframes pulse {
    0% {
      transform: rotate(0deg);
      transform-origin: center center;
    }
    100% {
      transform: rotate(360deg);
      transform-origin: center center;
    }
  }
  animation: pulse 1.1s ease infinite;
`;

const GeneralComponent = ({ val, btnTxt }) => {
  const getContent = () => {
    if (val === "Loading") return <Loader />;
    if (val === "Error")
      return (
        <ButtonWrap>
          <Wrap>
            <Error />
            <Label>Uh-oh ! Something not right.</Label>
          </Wrap>
        </ButtonWrap>
      );
    if (val === "NoData")
      return (
        <ButtonWrap>
          <Wrap>
            <EmptyData />
            <Label>No Data Available</Label>
          </Wrap>
        </ButtonWrap>
      );
  };

  return <Container>{getContent()}</Container>;
};

export default GeneralComponent;
