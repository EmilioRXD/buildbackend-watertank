import mongoose from "mongoose";
const levelSchema = new mongoose.Schema({
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
export default mongoose.model("WaterTankLevel", levelSchema);