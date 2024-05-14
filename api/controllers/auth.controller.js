const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  try {

    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.json({
        message: "Email or password incorrect",
      })
    }

    const result = bcrypt.compareSync(req.body.password, user.password)

    if (!result) {
      return res.send('Email or password incorrect')
    }
    
    const payload = { email: user.email }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d'
    })

    res.json({
      message: "Login Succesful",
      result: token,
    });
  } catch (error) {
    res.json(error);
  }
}

const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const user = await User.create(req.body)

    const payload = { email: user.email }
    const token = jwt.sign(payload, process.env.JWT_SECRET)

    res.json({
      message: "Signup Succesful",
      result: token,
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  login,
  signup
}