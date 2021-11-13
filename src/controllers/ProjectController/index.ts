import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

export function initProjectController(app: any) {
  app.use("/projects", router);
}
