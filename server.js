import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./router.js";
import { MongoClient } from "mongodb";

const DB_URL =
  "mongodb+srv://Lidiia:GoIT2020@cluster0.5ccwd.mongodb.net/mongo?retryWrites=true&w=majority";
const PORT = 5000;
const client = new MongoClient(DB_URL);

async function startApp() {
  try {
    // await mongoose.connect(DB_URL, {
    //   useUnifiedTopology: true,
    // });
    await client.connect();
    console.log('database connected');
    await client.db().createCollection('posts')
    const posts = client.db().collection("posts");
    await posts.insertOne({
      title: "New age",
      text: "jhnnb jh iub b iub b jk",
    });

    // app.listen(PORT, () => {
    //   console.log(`server is running on port ${PORT}`);
    // });
  } catch (e) {
    console.log(e.message);
  }
}
startApp();

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);
