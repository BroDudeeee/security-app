import jwt from "jsonwebtoken";

const Auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json("User's not authorized");
    token = token.split(" ")[1];

    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json("Authentication Failed!!!");
  }
};

export default Auth;
