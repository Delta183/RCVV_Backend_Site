
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/userModel.js";

const secret = 'test';

// Signin only needs email and password as parameters
export const signin = async (req, res) => {

  const { email, password } = req.body;

  try {
    // Search if the user exists
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist." });

    // Check if the given password matches the found user
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // If both are found, the token can be made and used to sign in
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Sign up takes more information for the sake of creation
export const signup = async (req, res) => {
  console.log(req.body);
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // Check if the email is already used for a user making it invalid
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    if (password != confirmPassword) return res.status(400).json({ message: "Passwords do not match" });
    // Assuming the email is fine, the rest is fine to make the account with. Care to hash the password with n length of salt
    const hashedPassword = await bcrypt.hash(password, 12);

    
    const result = await UserModal.create({ email: email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong here" });
    
    console.log(error);
  }
};