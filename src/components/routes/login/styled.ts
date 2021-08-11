import styled from "styled-components";
import ColorsPalette from "style/colorsPalette";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: -webkit-linear-gradient(to bottom, #232526, #0d0d0d);
  background: linear-gradient(to bottom, #232526, #0d0d0d);

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .logo {
      margin-top: 25%;
      width: 150px;
      animation: rotating 10s linear infinite;
  }

  .loginForm {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding-top: 18%;

      & > input[type=text], input[type=password] {
          background-color: #333333;
          height: 60px;
          width: 85%;
          margin-top: 20px;
          border: none;
          border-radius: 20px;
          padding-left: 5%;
          font-family: "Roboto-light";
          font-size: 16px;
          color: ${ColorsPalette.white};

          :focus {
            outline: none;
          };
      };

      & > input[type=submit] {
        margin-top: 80px;
        padding: 20px 60px;
        font-size: 22px;
        font-family: var(--secondary-font);
        color: ${ColorsPalette.white};
        background-color: #60c67c;
        border: none;
        border-radius: 20px;
      };

      .inputError {
        border: 1px solid red !important;
      }
  };
`;

export default Container;
