import express from "express";
import mongoose from "mongoose";
import { initUserAuthenticate, initUserController } from "./controllers";

mongoose.connect(
  "mongodb+srv://Du2Du:1234561@cluster0.ttxfr.mongodb.net/instagramclone?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("Bon jur");
});
mongoose.connection.on("error", () => {
  console.log("Boa noia");
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

app.listen(port, () => {
  console.log("Funcionando na porta ", port);
});
