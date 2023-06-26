import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

console.log(`Backend Running on Port ${port}...`);
