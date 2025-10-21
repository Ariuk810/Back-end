import express from "express";
import { router } from "./routes/users.js";
import mongoose from "mongoose";

const app = express();
const PORT = 1000;

app.use(express.json());

app.use("/users", router);

mongoose
  .connect("mongodb+srv://Aabii:Aabii081010@aabii.lorchjo.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
