import { useState, useContext } from "react";
import { ContextAssessments } from "../../../core/context";
import { Container, ContainerCenter, FormText } from "./styles";
import { WarningError } from "../../elements/warnings/index";
import { Button } from "../../elements/button";

export const LoginAuthor = () => {
  const { setAuthor } = useContext(ContextAssessments);

  const [error, setError] = useState(false);
  const [authorLocal, setAuthorLocal] = useState("");

  const VerifyAuthor = () => {
    if (authorLocal === "") {
      setError(true);
      setInterval(() => setError(false), 5000);
    } else {
      setAuthor(authorLocal);
    }
  };

  return (
    <>
      {error && (
        <WarningError>
          Autor do comentário não foi preenchido, para avançar insira o seu nome
        </WarningError>
      )}
      <Container>
        <ContainerCenter>
          <FormText>
            <span>Óla bem vindo a central de avaliação!</span>
            <h2>Insira seu nome para continuar</h2>
          </FormText>
          <input
            type="text"
            autoFocus
            onChange={(e) => setAuthorLocal(e.target.value)}
          />
          <Button login onClick={() => VerifyAuthor()}>
            Enviar
          </Button>
        </ContainerCenter>
      </Container>
    </>
  );
};
