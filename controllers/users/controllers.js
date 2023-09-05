import User from "../../models/Users.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const createUser = async (req, res) => {
  try {
    const salt = 10;

    const { username, password } = req.body;

    const passwordhas = await bcrypt.hash(password, salt);
    const newuser = new User({
      username,
      password: passwordhas
    });
    const usersave = await newuser.save();
    return res.json(usersave).status(200);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
