import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const PartStyle = css`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftPart = styled.div`
  ${PartStyle}
  background-color: #3282E1;
  box-shadow: 5px 0px 10px 1px rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HomeCard = styled.div`
  padding: 30px;
  width: calc(70% - 60px);
  height: calc(60% - 60px);
  background-color: #fff;
  box-shadow: 4px 0px 5px 1px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
      color: #3282e1;
      font-size: clamp(15px, 4vw, 28px);
    }
    p {
      color: #555;
      font-size: 1.5rem;
      font-size: clamp(15px, 4vw, 20px);
    }
    @media (max-width: 768px) {
      h2 {
        font-size: clamp(23px, 5.5vw, 32px);
      }
      p {
        font-size: clamp(18px, 5.5vw, 27px);
      }
    }
  }
`;

export const RightPart = styled.div`
  ${PartStyle}
  flex-direction: column;
  h3 {
    width: 90%;
    text-align: center;
    white-space: nowrap;
    font-size: 4.3vw;
    color: #3282e1;
    cursor: default;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImgCard = styled.img`
  margin-top: 20px;
  width: 80%;
`;
