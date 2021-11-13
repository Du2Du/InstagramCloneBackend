import bcrypt from "bcryptjs";
import express from "express";
import { generateToken } from "src/help";
import { User } from "../../models/user";

const router = express.Router();

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const userCreate = await User.findOne({ email }).select("+password");

  if (!userCreate)
    return res.status(400).send({ error: "Usuário não encontrado!" });

  if (!(await bcrypt.compare(password, userCreate.password)))
    return res.status(400).send({ error: "Senha inválida!" });

  userCreate.password = undefined;

  res.send({ userCreate, token: generateToken({ id: userCreate.id }) });
});

export function initUserAuthenticate(app: any) {
  app.use("/api", router);
}
