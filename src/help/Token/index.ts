import jwt from "jsonwebtoken";
const authConfig = require("../../config/auth");

export const generateToken = (userCreate = {}) => {
  return jwt.sign({ userCreate }, authConfig.secret, {
    expiresIn: 86400,
  });
};
