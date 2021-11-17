import express from "express";
import mongoose from "mongoose";
import {
  initProjectController,
  initUserAuthenticate,
  initUserController,
} from "./controllers";
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://Du2Du:${process.env.BANK_PASSWORD}@cluster0.ttxfr.mongodb.net/instagramclone?retryWrites=true&w=majority`
);

mongoose.connection.on("connected", () => {
  console.log("Conectado com sucesso!");
});
mongoose.connection.on("error", () => {
  console.log("Desconectado!");
});

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Dale");
});

initUserController(app);
initUserAuthenticate(app);
initProjectController(app);

app.listen(port, () => {
  console.log("Funcionando na porta", port);
});
