import { Container, Title, Content } from "./styles";

export const WarningError: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>
        <h3>Erro encontrado!</h3>
      </Title>
      <Content>{children}</Content>
    </Container>
  );
};

export const WarningSuccess: React.FC = ({ children }) => {
  return (
    <Container success>
      <Title>
        <h3>Sucesso!</h3>
      </Title>
      <Content>Comentário enviado, obrigado pela sua avaliação!</Content>
    </Container>
  );
};
