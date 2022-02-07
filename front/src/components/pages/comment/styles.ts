import styled from "styled-components";
import { BsStarFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
  margin: 30px 0;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Author = styled.div`
  padding-left: 30px;
  display: flex;
  font-size: 24px;
  font-weight: 600;
`;

export const Content = styled.div`
  margin: 15px 0 30px;
  display: flex;
  font-size: 20px;
`;

export const InterativeArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsConfig = styled.button<{
  edit?: boolean;
}>`
  padding: 7px 15px;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  color: ${(props) => (props.edit ? "#808080" : "#ff6961")};
  border: 2px solid ${(props) => (props.edit ? "#808080" : "#ff6961")};
  margin-right: 10px;
  border-radius: 5px;
  :hover {
    background-color: ${(props) => (props.edit ? "#808080" : "#ff6961")};
    color: #fff;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: default;
`;

export const StarIcon = styled(BsStarFill)`
  fill: #ffd700;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
