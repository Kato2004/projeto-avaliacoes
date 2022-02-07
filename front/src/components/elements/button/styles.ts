import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`

export const Element = styled.button<{
  styleLogin: boolean;
}>`
  background-color: ${(props) =>
    props.styleLogin ? "transparent" : "#3282e1"};
  border: ${(props) => (props.styleLogin ? "3px solid #fff" : "3px solid #3282e1")};
  color: #fff;
  padding: 7px 0;
  border-radius: 5px;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  transition: ease-in 0.2s;
  :hover {
    filter: brightness(60%);
    ${(props) =>
      props.styleLogin
        ? "color: #3282e1; border: 3px solid transparent; background-color: #fff; filter: brightness(100%);"
        : ""}
  }
`;
