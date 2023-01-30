import { Schema, model } from "mongoose";
const levelSchema = new Schema({
  code: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxLength: 9
  },
  level: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
export default model("WaterTankLevel", levelSchema);