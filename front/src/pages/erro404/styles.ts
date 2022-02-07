import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: #3282e1;
    font-size: clamp(15px, 6vw, 60px);
  }
  p {
    font-size: clamp(20px, 3vw, 50px);
  }
  a {
    font-size: clamp(10px, 3vw, 30px);
    margin-top: 15px;
  }
`;
