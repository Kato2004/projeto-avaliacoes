import { useState } from "react";
import { patchMessages } from "../../../core/config/services/api";
import { InputStars } from "../input-stars";
import { Container, Textarea, ContainerStars } from "./styles";
import { Button } from "../button";

interface EditCommentProps {
  id: string;
  stars: number;
  content: string;
  visible: React.Dispatch<React.SetStateAction<boolean>>;
  controler: number;
  setControler: React.Dispatch<React.SetStateAction<number>>;
}

export const EditComment = ({
  id,
  stars,
  content,
  visible,
  controler,
  setControler,
}: EditCommentProps) => {
  const [starsEdit, setStarsEdit] = useState(stars);
  const [contentEdit, setContentEdit] = useState("");

  const patchComplete = () => {
    patchMessages({ _id: id, content: contentEdit, stars: starsEdit });
    setControler(controler + 1);
    visible(false);
  };

  return (
    <Container>
      <ContainerStars>
        <InputStars setStars={setStarsEdit} />
      </ContainerStars>
      <Textarea
        defaultValue={content}
        onChange={(e) => setContentEdit(e.target.value)}
      />
      <Button login={false} onClick={() => patchComplete()}>
        Trocar
      </Button>
      <Button login onClick={() => visible(false)}>
        Sair
      </Button>
    </Container>
  );
};
