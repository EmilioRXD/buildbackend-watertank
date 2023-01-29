import { Router } from "express";
import { getSensors, createSensor, deleteSensor, getLevel, updateLevel } from "../controllers/level.controller.js";
const router = Router();
router.get("/", getSensors);
router.post("/", createSensor);
router.delete("/:id", deleteSensor);
router.get("/:id", getLevel);
router.put("/:id", updateLevel);
export default router;