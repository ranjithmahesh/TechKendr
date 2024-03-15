// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/email.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
// Connect to MongoDB

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
