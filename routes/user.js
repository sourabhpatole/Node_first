import express from "express";
import { genPassword, createUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // const movie = movies.find((mv) => mv.id === id);
  // if (!movie) res.status(404).send("Requested movie is not found");
  // const result = await addMovies(newMovies);
  // res.send(result);
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);

  if (isUserExist) {
    res.status(404).send({ message: "user already taken" });
    return;
  }
  if (
    !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/g.test(password)
  ) {
    res.status(400).send({ message: "Password pattern does not match" });
    return;
  }
  const hashPassword = await genPassword(password);
  const result = await createUser(username, hashPassword);
  res.send(result);
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const isUserFromDb = await getUserByName(username);
  console.log(isUserFromDb);

  if (!isUserFromDb) {
    res.status(404).send({ message: "Invalid Credentials" });
    return;
  }
  const storedPassword = isUserFromDb.password;
  const isPasswordMatch = await bcrypt.compare(password, storedPassword);
  if (!isPasswordMatch) {
    res.status(404).send({ message: "Invalid Credentials" });
    return;
  }
  res.send(isPasswordMatch);
});

export const userRouter = router;
