import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100vw;
        /* font-family: Helvetica, Arial, sans-serif; */
        /* font-size: 24px; */
      }
    `}
  />
);
