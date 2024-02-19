import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

const app = express();

dotenv.config();

// console.log(process.env);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });



const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port", port);
});

app.use("/api/user",userRoutes)