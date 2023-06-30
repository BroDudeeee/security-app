import UserSchema from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email } = req.body;
  try {
    // Check if username already exists
    const userExists = await UserSchema.findOne({ username });
    if (userExists)
      return res.status(403).json("There is a user with that name");

    // Check if email already exists
    const emailExists = await UserSchema.findOne({ email });
    if (emailExists)
      return res.status(403).json("There is a user with that email");

    // Hash the Password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // Get the plain password out of the body
    const { password, ...others } = req.body;

    // Register the User with the hashed password
    await UserSchema.create({
      ...others,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "User Created Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find User with the email
    const user = await UserSchema.findOne({ email });
    // Check if the user exists
    if (!user) return res.status(400).json({ msg: "No User with this email" });

    // Compare the password user entered to the right password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword)
      return res.status(400).json({ msg: "Wrong Password...!" });

    // Create Token for the user
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    console.log(token);
    res.status(200).json({
      msg: "Loggedin Successfully",
      username: user.username,
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { register, login };
