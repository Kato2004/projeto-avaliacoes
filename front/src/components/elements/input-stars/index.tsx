import ReactStars from "react-stars";
import { Container } from "./styles";

interface InputStarsProps {
  setStars: React.Dispatch<React.SetStateAction<number>>;
}

export const InputStars = ({ setStars }: InputStarsProps) => {
  return (
    <Container>
      <h3>Notas</h3>
      <ReactStars count={5} onChange={(e) => setStars(e)} size={50} />
    </Container>
  );
};
