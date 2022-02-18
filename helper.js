import { client } from "./index.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

export async function getAllMovies(req) {
  return await client
    .db("sourabh")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export async function getMovieById(id) {
  return await client
    .db("sourabh")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
export async function deleteMoviesById(id) {
  return await client
    .db("sourabh")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
export async function addMovies(newMovies) {
  return await client.db("sourabh").collection("movies").insertMany(newMovies);
}
export async function updateMovieById(id, updateMovie) {
  return await client
    .db("sourabh")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: updateMovie });
}
export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
}
export async function createUser(username, hashPassword) {
  return await client
    .db("sourabh")
    .collection("user")
    .insertOne({ username: username, password: hashPassword });
}
export async function getUserByName(username) {
  return await client
    .db("sourabh")
    .collection("user")
    .findOne({ username: username });
}
