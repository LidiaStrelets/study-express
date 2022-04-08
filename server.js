import express from "express";
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import router from "./router.js";

const DB_URL =
  "mongodb+srv://Lidiia:GoIT2020@cluster0.5ccwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}
startApp();

const app = express();
app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({ }))
app.use('/api', router)

