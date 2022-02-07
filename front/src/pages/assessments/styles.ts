import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 30%;
  background-color: #3282e1;
  position: sticky;
  position: -webkit-sticky;
  padding: 20px 0;
  min-height: calc(100vh - 40px);
  max-height: calc(100vh - 40px);
  top: 0;
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    position: relative;
    min-height: calc(80vh - 40px);
    max-height: calc(80vh - 40px);
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 500px;
  width: 90%;
  height: 100%;
`;

export const Button = styled.button<{
  blockButton: number;
}>`
  width: 100%;
  background-color: ${(props) =>
    props.blockButton > 0 ? "rgb( 50, 50, 200)" : "#64b4e6"};
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  pointer-events: ${(props) => (props.blockButton > 0 ? "none" : "visible")};
`;
export const Textarea = styled.textarea`
  background-color: #64b4e6;
  color: #fff;
  padding: 30px;
  width: calc(100% - 60px);
  border: none;
  resize: none;
  height: 100%;
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
    height: 200px;
  }
  @media (max-width: 380px) {
    height: 70vw;
  }
`;
export const RightPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PublicComment = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
