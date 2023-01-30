import { Schema, model } from "mongoose";
const sensorsSchema = new Schema({
  iss: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxLength: 9
  }
}, {
  timestamps: true
});
export default model("Sensors", sensorsSchema);