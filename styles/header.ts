import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  justify-content: space-between;
  width: 100%;
  /* padding: 1rem 10rem; */
  /* padding-left: 4rem; */
  color: white;

  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .links {
    display: flex;
    /* flex: 1; */
    /* margin-left: auto; */
    /* padding-left: -4rem;
    padding-right: 4rem; */

    & > a:not(last-of-type),
    a:link,
    a:visited {
      color: inherit;
      margin-right: 1rem;
      text-decoration: none;
    }
  }
`;
