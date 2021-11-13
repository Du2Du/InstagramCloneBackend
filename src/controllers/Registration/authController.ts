import express from "express";
import { User } from "../../models";
import { generateToken } from "../../help";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { user, email } = req.body;

  if (await User.findOne({ user, email })) {
    return res.status(400).send({ error: "Email ou Usuário já utilizados." });
  }
  const userCreate = await User.create(req.body);
  userCreate.password = undefined;

  return res.json({ userCreate, token: generateToken({ id: userCreate.id }) });
});

export function initUserController(app: any) {
  app.use("/api", router);
}
