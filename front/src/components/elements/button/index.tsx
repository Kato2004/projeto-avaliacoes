import { ReactNode } from "react";
import { Container, Element } from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  login: boolean;
}

export const Button = ({ children, onClick, login }: ButtonProps) => {
  return (
    <Container>
      <Element styleLogin={login} onClick={onClick}>
        {children}
      </Element>
    </Container>
  );
};
