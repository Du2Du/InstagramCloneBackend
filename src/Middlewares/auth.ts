import jwt from "jsonwebtoken";
const authConfig = require("../config/auth.json");

export function tokenValidation(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(400).send({
      error: "Token não informado",
    });

  const parts = authHeader.split(" ");

  if (parts.length !== 2)
    return res.status(401).send({ error: "Erro no Token" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).sned({ error: "Token inválido" });

    req.userId = decoded.id;
    return next();
  });
}
