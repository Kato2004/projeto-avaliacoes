import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
`;
export const ContainerCenter = styled.div`
  background-color: #3282e1;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 70%;
    padding: 15px;
  }

  input {
    width: calc(100% - 40px);
    padding: 10px 20px;
    height: clamp(12px, 3vw, 30px);
    border-radius: 5px;
    margin: 10px 0;
    font-size: 26px;
    @media (max-width: 768px) {
      margin-top: 5px 0;
      font-size: 18px;
    }
  }
`;

export const FormText = styled.div`
  text-align: center;
  span {
    font-weight: 400;
    font-size: 26px;
    @media (max-width: 1080px) {
      font-size: 2vw;
    }
    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
  }
  h2 {
    font-weight: 800;
    font-size: 26px;
    @media (max-width: 1080px) {
      font-size: 2.7vw;
    }
    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }
`