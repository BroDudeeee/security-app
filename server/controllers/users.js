import User from "../models/User.js";

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getUser, getUsers };
