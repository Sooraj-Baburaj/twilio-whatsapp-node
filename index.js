import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import messageRoutes from "./routes/message.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/message", messageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
