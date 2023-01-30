import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";
export async function verifyToken(req, res, next) {
  // Get the token from the headers
  const bearerHeader = req.headers["authorization"];
  const bearerToken = bearerHeader.split(" ")[1];

  // if does not exists a token
  if (!bearerToken) {
    return res.status(401).send({
      auth: false,
      message: "No Token aws Provided"
    });
  }

  // decode the token
  const decoded = await jwt.verify(bearerToken, SECRET);

  // save the token on request object to using on routes
  req.sensorCode = decoded.code;

  // continue with the next function
  next();
}