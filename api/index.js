import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
// console.log("MONGO",process.env.MONGO)
// console.log(process.env);
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected");
    const app = express();

    const port = 3000;
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  
  