import styled from "@emotion/styled";
// import { css } from "@emotion/css";
// import BG from "../public/assets/bg.jpg";

export const MainWrapper = styled.section<any>`
  background-image: url(/assets/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center center; */
`;

export const Text = styled.div<any>`
  height: 100vh;
  /*This part is important for centering*/
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    width: 15ch;
    animation: typing 2s steps(15) infinite alternate,
      blink 0.5s step-end 1s infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
