import express from "express";
import {
  getAllMovies,
  getMovieById,
  addMovies,
  deleteMoviesById,
  updateMovieById,
} from "../helper.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const newMovies = req.body;
  console.log(newMovies);
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  const result = await addMovies(newMovies);
  res.send(result);
});

export const usersRouter = router;
