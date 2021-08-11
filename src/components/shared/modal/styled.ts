import styled from "styled-components";
import ColorsPalette from "style/colorsPalette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  & > .modalContent {
    margin-top: 15%;
    padding: 15px;
    border-radius: 10px;
    width: 80%;
    background-color: ${ColorsPalette.white};
  }
`;

export default Container;
