import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.js";
import connectDB from "./database/connectDB.js";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Backend Running on Port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
