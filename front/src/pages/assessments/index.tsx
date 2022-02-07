import { useContext, useEffect, useState } from "react";
import {
  WarningError,
  WarningSuccess,
} from "../../components/elements/warnings";
import { ContextAssessments } from "../../core/context";
import { Comment } from "../../components/pages/comment";
import {
  Container,
  LeftPart,
  ContainerInput,
  Textarea,
  RightPart,
  PublicComment,
  Button,
} from "./styles";
import { getMessages, postMessages } from "../../core/config/services/api";
import { Message } from "../../core/@types/message";
import { ErrorValue } from "../../core/helpers/errorValue";
import { InputStars } from "../../components/elements/input-stars";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Assessments = () => {
  const { author, content, stars, setStars, setContent } =
    useContext(ContextAssessments);
  const navigate = useNavigate();

  const [errorValue, setErrorValue] = useState(false);
  const [successValue, setSuccessValue] = useState(false);
  const [apiResponse, setApiResponse] = useState<Array<Message>>([]);
  const [controler, setControler] = useState(0);

  useEffect(() => {
    if (author === "") {
      return navigate("/");
    }
  });
  useEffect(() => getMessages(setApiResponse), [controler]);

  const takeMessage = () => {
    if (content === "" || stars === 0) {
      setErrorValue(true);
      setInterval(() => setErrorValue(false), 5000);
      return;
    }
    postMessages({ author, content, stars });
    setControler(controler + 1);
    setSuccessValue(true);
    setInterval(() => setSuccessValue(false), 5000);
    setStars(0);
    setContent("");
  };

  return (
    <>
      <Helmet>
        <title>{"Avaliações - BestAnswer"}</title>
      </Helmet>
      {errorValue && (
        <WarningError> {ErrorValue(content, stars)} </WarningError>
      )}
      {successValue && <WarningSuccess />}
      <Container>
        <LeftPart>
          <InputStars setStars={setStars} />
          <ContainerInput>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button blockButton={controler} onClick={() => takeMessage()}>
              Enviar
            </Button>
          </ContainerInput>
        </LeftPart>
        <RightPart>
          <PublicComment>
            {apiResponse.map((value) => {
              return (
                <Comment
                  key={value._id}
                  authorLocal={value.author}
                  content={value.content}
                  stars={value.stars}
                  _id={value._id}
                  controler={controler}
                  setControler={setControler}
                />
              );
            })}
          </PublicComment>
        </RightPart>
      </Container>
    </>
  );
};
