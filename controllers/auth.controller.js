import jwt from "jsonwebtoken";
import Sensors from "../models/sensors.model.js";
import { SECRET } from "../config.js";
export const signupController = async (req, res) => {
  try {
    // Receiving Data
    const {
      role,
      code
    } = req.body;

    // Creating a new User
    const sensor = new Sensors({
      iss: "watertank",
      role,
      code
    });
    await sensor.save();

    // Create a Token
    const token = jwt.sign({
      iss: sensor.iss,
      role,
      code
    }, SECRET);
    res.json({
      auth: true,
      token
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("There was a problem registering your sensor");
  }
};
export const getProfile = async (req, res) => {
  const sensor = await Sensors.findOne({
    code: req.sensorCode
  });
  if (!sensor) {
    return res.status(404).send("No sensor found.");
  }
  res.status(200).json(sensor);
};