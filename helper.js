import { client } from "./index.js";

export async function getAllMovies(req) {
  return await client
    .db("sourabh")
    .collection("movies")
    .find(req.query)
    .toArray();
}
export async function getMovieById(id) {
  return await client.db("sourabh").collection("movies").findOne({ id: id });
}
export async function deleteMoviesById(id) {
  return await client.db("sourabh").collection("movies").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
  return await client.db("sourabh").collection("movies").insertMany(newMovies);
}
export async function updateMovieById(id, updateMovie) {
  return await client
    .db("sourabh")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateMovie });
}
