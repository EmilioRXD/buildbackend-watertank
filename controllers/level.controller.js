import WaterTankLevel from "../models/level.model.js";
export const getSensors = async (req, res) => {
  try {
    const sensors = await WaterTankLevel.find();
    res.json(sensors);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const createSensor = async (req, res) => {
  try {
    const {
      code,
      level
    } = req.body;
    const sensor = new WaterTankLevel({
      code,
      level
    });
    await sensor.save();
    return res.json(sensor);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const getLevel = async (req, res) => {
  try {
    const code = await WaterTankLevel.findOne({
      code: req.params.id
    });
    if (!code) return res.satus(404).json({
      message: "Element does not exists"
    });
    return res.json(code);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const updateLevel = async (req, res) => {
  try {
    const query = {
      code: req.params.id
    };
    const levelUpdate = await WaterTankLevel.findOneAndUpdate(query, req.body, {
      new: true
    });
    return res.json(levelUpdate);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};
export const deleteSensor = async (req, res) => {
  try {
    const sensor = await WaterTankLevel.findOneAndDelete({
      code: req.params.id
    });
    if (!sensor) return res.satus(404).json({
      message: "Element does not exists"
    });
    return res.json(sensor);
  } catch (error) {
    return res.status(500).json({
      mesagge: error.mesagge
    });
  }
};