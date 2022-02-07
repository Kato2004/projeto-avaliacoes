import express from "express";
import mongoose from "mongoose";
import router from "./routes";
import cors from "cors";
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

const db = process.env.DB;
const databaseConnect = () => (db === undefined ? "" : db);

mongoose
  .connect(databaseConnect())
  .then(() => {
    console.log("Tudo certo!!");
    app.listen(3333);
  })
  .catch((err) => console.log(err));
