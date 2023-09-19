const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user'); // Assuming you have a user model defined

const app = express.Router();

// Registration API (/new)
app.post('/new', async (req, res) => {
  try {
    let check = await user.findOne({ name: req.body.name });
    if (check) {
      throw new Error("User already exists");
    }

    const password = await bcrypt.hash(req.body.password, 10); // Use a stronger salt value (e.g., 10)
    
    const newUser = new user({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      college: req.body.college,
      password: password,
    });

    await newUser.save();
    res.status(201).send({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Login API (/login)
app.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    
    const existingUser = await user.findOne({ name });
    if (!existingUser) {
      throw new Error("User not found");
    }
    
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }

    // Generate and send a JWT token as a response
    const token = jwt.sign({ userId: existingUser._id }, process.env.SECRETKEY); // Replace with a secure secret key

    res.status(200).send({ msg: "Login successful", token });
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
});

module.exports=app;