import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  getAllMovies,
  getMovieById,
  addMovies,
  deleteMoviesById,
} from "./helper.js";
import { moviesRouter } from "./routes/movies.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";

dotenv.config();
// console.log(process.env);
const app = express();
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://0.0.0.0:27017/";
// mongodb+srv://sourabh:<password>@cluster0.jluxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// const MONGO_URL = "mongodb://0.0.0.0:27017/";
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
app.use(cors());
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected");
  return client;
}
export const client = await createConnection();
// const client = CreateConnection();
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/movies", moviesRouter);
app.use("/user", userRouter);
app.listen(PORT, () => console.log("server is started", PORT));

// mongodb+srv://sourabh:sourabh123@cluster0.jluxa.mongodb.net/sourabh?retryWrites=true&w=majority
