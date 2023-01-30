import express from "express";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";

// routes
import levelRoutes from "./routes/level.routes.js";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";

// Initialization
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use("/level", levelRoutes);
app.use(authRoutes);

// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});
export default app;