import { Request, Response, Router } from "express";
import Message from "./models/Message";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const reqMessages = await Message.find();

    res.status(200).json(reqMessages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const reqMessages = await Message.findOne({ _id: id });

    if (!reqMessages) {
      res.status(422).json({ message: "Usuário não foi encontrado" });
      return;
    }

    res.status(200).json(reqMessages);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/create", async (req: Request, res: Response) => {
  const { author, content, stars } = req.body;

  try {
    await Message.create({ author, content, stars });
    res.status(201).json({ messageDone: "Mensagem criada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const { content, stars } = req.body;

  const reqMessage = {
    content: content,
    stars: stars,
  };

  try {
    const updateMessage = await Message.updateOne({ _id: id }, reqMessage);

    if (updateMessage.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado" });
      return;
    }

    res.status(200).json(reqMessage);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const reqMessage = await Message.findOne({ _id: id });
  if (!reqMessage) {
    res.status(422).json({ message: "Usuário não foi encontrado" });
    return;
  }

  try {
    await Message.deleteOne({ _id: id });

    res.status(200).json({ message: "usuário excluido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
  Message.deleteMany();
});

export default router;
