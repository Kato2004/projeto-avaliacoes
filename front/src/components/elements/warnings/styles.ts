import styled from "styled-components";

export const Container = styled.div<{
  success?: boolean;
}>`
  position: fixed;
  top: 20px;
  z-index: 1000;
  width: 60vw;
  margin: 0 20vw;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => (props.success ? "#77dd77" : "#ff6961")};
`;

export const Title = styled.div`
  display: flex;
  h3 {
    border-bottom: 3px solid #111;
    padding: 0 10px;
    margin: 10px 30px;
    width: 100%;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  margin: 0 30px;
`;
