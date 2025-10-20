import express from "express";
import { router } from "./routes/users";
import mongoose from "mongoose";

const app = express();
const PORT = 1000;

router.use(express.json());

app.use("/users", router);

mongoose.connect(
  "mongodb+srv://<db_username>:<db_password>@food.n4cxbog.mongodb.net"
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
