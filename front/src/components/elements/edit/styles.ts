import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: #3282e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200%;
  border-radius: 5px;
  padding: 10px;
  top: 20px;
  left: 0;
  width: 80%;
  z-index: 2;
`;
export const Textarea = styled.textarea`
  background-color: #64b4e6;
  color: #fff;
  padding: 30px;
  width: calc(100% - 60px);
  border: none;
  resize: none;
  height: 400px;
  border-radius: 5px 5px 0 0;
  font-size: 24px;
  outline: none;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #64b4e6;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(10, 10, 150, 0.2);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #001e64;
  }
  @media (max-width: 768px) {
    /* height: 200px; */
  }
  @media (max-width: 380px) {
    height: 70vw;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #64b4e6;
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  pointer-events: visible;
`;

export const ContainerStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;
`;
