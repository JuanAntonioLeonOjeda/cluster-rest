const User = require('../models/user.model')

const getAllUsers = async (req, res) => {
  try {
   const users = await User.findAll()

   res.json({
     message: "Users fetched",
     result: users,
   });
  } catch (error) {
    res.json(error);
  }
}

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    res.json({
      message: "User fetched",
      result: user,
    });
  } catch (error) {
    res.json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({
      message: 'User created',
      result: user
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser
}