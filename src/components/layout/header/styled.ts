import styled from "styled-components";
import ColorsPalette from "style/colorsPalette";

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  min-height: 40px;
  height: auto;
  background-color: ${ColorsPalette.midnightBlue};

  .menuButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 15;
    transition: all 0.3s linear;

    div {
      width: 1.5rem;
      height: 0.2rem;
      background: ${ColorsPalette.white};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

    ${({ isOpen }) =>
      isOpen &&
      `
          div:nth-child(1) {
              transform: rotate(45deg);
          }
          div:nth-child(2) {
              opacity: 0;
              transform: translateX(20px);
          }
          div:nth-child(3) {
              transform: rotate(-45deg);
          }
      `};
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40px;
    padding-top: 5px;
    width: 60%;
    height: calc(100vh - 40px);
    background-color: ${ColorsPalette.purple};
    transition: left 500ms;

    & > .link {
      padding: 5px 0 5px 10px;
      color: ${ColorsPalette.white};
      font-family: var(--secondary-font);
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
    }

    & > .activeLink {
      background-color: ${ColorsPalette.aquamarine};
    }

    ${({ isOpen }) =>
      isOpen
        ? `
        left: 0px;
      `
        : `
        left: -60%;
      `}
  }

  .siteName {
    font-family: var(--secondary-font);
    font-size: 15px;
    text-transform: uppercase;
    color: #e5d8c3;
    margin: 0 15px;
  }

  .rocketLogo {
    height: 28px;
  }

  .brandContainer {
    display: flex;
    align-items: center;
  }
`;

export default Container;
