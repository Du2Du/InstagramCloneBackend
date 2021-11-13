import jwt from "jsonwebtoken";
const authConfig = require("../../config/auth");

export const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
};
