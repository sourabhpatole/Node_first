import express from "express";
import {
  getAllMovies,
  getMovieById,
  addMovies,
  deleteMoviesById,
  updateMovieById,
} from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.get("/", async (req, res) => {
  // const { language, rating } = req.query;
  // console.log(req.query);
  // let filteredMovies = movies;
  // if (language) {
  //   filteredMovies = filteredMovies.filter((mv) => mv.language === language);
  // }
  // if (rating) {
  //   filteredMovies = filteredMovies.filter((mv) => mv.rating == rating);
  // }
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  console.log(req.query);
  const movies = await getAllMovies(req);

  res.send(movies);
});
// app.get("/movies", (req, res) => {
//   const { language, rating } = req.query;
//   console.log(req.query);
//   if (language && rating) {
//     console.log("lan and rating");
//     res.send(
//       movies.filter(
//         (mv) => mv.language === language && mv.rating === parseInt(rating)
//       )
//     );
//   } else if (language) {
//     console.log("language");
//     res.send(movies.filter((mv) => mv.language === language));
//   } else if (rating) {
//     console.log("rating");
//     res.send(movies.filter((mv) => mv.rating === parseInt(rating)));
//   } else {
//     req.send(movies);
//   }
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  const movie = await getMovieById(id);
  movie ? res.send(movie) : res.status(404).send("No movies found");
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateMovie = req.body;
  console.log(updateMovie);
  //db.movies.updateOne({id:'102'},{set:updateMovie})
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  const result = await updateMovieById(id, updateMovie);
  res.send(result);
});
router.post("/", async (req, res) => {
  const newMovies = req.body;
  console.log(newMovies);
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  const result = await addMovies(newMovies);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  const movie = await deleteMoviesById(id);
  res.send(movie);
});
export const moviesRouter = router;
