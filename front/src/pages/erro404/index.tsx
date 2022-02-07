import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const PageNotExists = () => {
  return (
    <>
      <Helmet>
        <title>{"Página não existe - Error 404"}</title>
      </Helmet>
      <Container>
        <h2> Erro 404 - Página não existe</h2>
        <p>Por favor retorne a página inicial</p>
        <Link to="/">Clique aqui para retornar</Link>
      </Container>
    </>
  );
};
