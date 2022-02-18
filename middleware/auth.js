import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
  try {
    const token = req.header("X-auth-token");
    jwt.verify(token, process.env.SECRET_KEY);
    console.log(token);
    next();
  } catch (err) {
    res.send({ error: err.message });
  }
};
