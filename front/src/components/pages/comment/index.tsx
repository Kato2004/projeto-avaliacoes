import { useState, useContext } from "react";
import { deleteMessages } from "../../../core/config/services/api";
import { ContextAssessments } from "../../../core/context";
import { EditComment } from "../../elements/edit";
import {
  Container,
  Author,
  Content,
  InterativeArea,
  ContainerButton,
  ButtonsConfig,
  Stars,
  StarIcon,
} from "./styles";

interface CommentProps {
  authorLocal: string;
  content: string;
  stars: number;
  _id: string;
  controler: number;
  setControler: React.Dispatch<React.SetStateAction<number>>;
}

export const Comment = ({
  authorLocal,
  content,
  stars,
  _id,
  controler,
  setControler,
}: CommentProps) => {
  const { author } = useContext(ContextAssessments);

  const [visibleContainer, setVisibleContainer] = useState(false);

  const deleteComment = () => {
    deleteMessages(_id);
    setControler(controler - 1);
  };
  const editComment = () => setVisibleContainer(true);

  return (
    <Container>
      <Author>{authorLocal}</Author>
      <Content>{content}</Content>
      <InterativeArea>
        <ContainerButton>
          {authorLocal === author && (
            <>
              <ButtonsConfig onClick={() => deleteComment()}>
                Excluir
              </ButtonsConfig>
              <ButtonsConfig edit onClick={() => editComment()}>
                Editar
              </ButtonsConfig>
            </>
          )}
        </ContainerButton>
        <Stars>
          {stars}
          <StarIcon />
        </Stars>
      </InterativeArea>
      {visibleContainer && (
        <EditComment
          id={_id}
          stars={stars}
          content={content}
          controler={controler}
          setControler={setControler}
          visible={setVisibleContainer}
        />
      )}
    </Container>
  );
};
