export const ErrorValue = (content: string, stars: number) => {
  if (content === "" && stars === 0) {
    return "Não há nenhum comentário nem avaliação, por favor preencha os campos";
  } else if (content === "") {
    return "Não há nenhum comentário por favor, insira algum comentário.";
  } else if (stars === 0) {
    return "Não há nenhuma nota por favor, insira alguma nota.";
  }
};
