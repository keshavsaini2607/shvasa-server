import * as dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/index.js";
import supportAgentRoutes from "./routes/supportAgent.route.js";

dotenv.config();

const app = express();
app.use(express.json());
// Database connection
connectDB();

//api routes
app.use("/api/supportAgent", supportAgentRoutes);

const PORT = process.env.PORT;

// Error handler middleware
app.use((err, req, res, next) => {
   console.error(err.stack);

   res.status(500).json({
      error: err?.message,
      message: "Something went wrong!",
   });
});

app.listen(PORT, () => {
   console.log(`Server started on PORT: ${PORT}`);
});
