import express from "express";
import { tokenValidation } from "../../Middlewares/auth";
declare global {
  namespace Express {
    export interface Request {
      userId?: string;
    }
  }
}

const router = express.Router();

router.use(tokenValidation);

router.get("/", (req, res) => {
  res.send({ ok: true, user: req.userId });
});

export function initProjectController(app: any) {
  app.use("/projects", router);
}
