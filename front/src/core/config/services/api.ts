import axios from "axios";
import { Message } from "../../@types/message";
import { patchMessage, postMessage } from "../../@types/rest";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getMessages = (
  setApiResponse: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  api
    .get("/")
    .then((response) => setApiResponse(response.data))
    .catch((error) => console.log(error));
};

export const postMessages = ({ author, content, stars }: postMessage) => {
  api
    .post("/create", {
      author: author,
      content: content,
      stars: stars,
    })
    .catch((error) => console.log(error));
};

export const patchMessages = ({ _id, content, stars }: patchMessage) => {
  api
    .patch(`/${_id}`, {
      content: content,
      stars: stars,
    })
    .catch((error) => console.log(error));
};

export const deleteMessages = (_id: string) => {
  api.delete(_id).catch((error) => console.log(error));
};
