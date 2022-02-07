import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container, LeftPart, HomeCard, RightPart, ImgCard } from "./styles";
import ImgHome from "../../assets/ImgHome.svg";
import { LoginAuthor } from "../../components/pages/LoginAuthor";
import { ContextAssessments } from "../../core/context";
import { Button } from "../../components/elements/button";

export const Home = () => {
  const navigate = useNavigate();
  const { author } = useContext(ContextAssessments);

  const getAuthor = () => {
    if (author === "") {
      return <LoginAuthor />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{"Home - BestAnswer"}</title>
      </Helmet>
      {getAuthor()}
      <Container>
        <LeftPart>
          <HomeCard>
            <div>
              <h2>Avalie nossos serviços</h2>
              <p>
                Precisamos da sua opinião para que o serviço que prestamos seja
                cada vez melhor, faça isso atravez de um comentário e estrelas
                (de um a cinco).
              </p>
            </div>
            <Button login={false} onClick={() => navigate("/avaliacoes")}>
              Avançar
            </Button>
          </HomeCard>
        </LeftPart>
        <RightPart>
          <h3>Sua opinião importa</h3>
          <ImgCard src={ImgHome} />
        </RightPart>
      </Container>
    </>
  );
};
