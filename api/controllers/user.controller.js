const User = require('../models/user.model')
const Pet = require('../models/pet.model')

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
    //EAGER LOADING
    // const user = await User.findByPk(req.params.id, {
    //   include: Pet
    // })

    //LAZY LOADING
    const user = await User.findByPk(req.params.id)
    const pets = await user.getPets()

    res.json({
      message: "User fetched",
      result: {
        user,
        pets
      },
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

const addPet = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId)
    const pet = await Pet.findByPk(req.params.petId)

    await user.addPet(pet)

    res.json({
      message: "Pet Created",
      result: user,
    });

    user.set
  } catch (error) {
    res.json(error);
  }
}

const createAndAddPet = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    await user.createPet(req.body)

    res.json({
      message: "Pet Created and added",
      result: user,
    });
  } catch (error) {
    res.json(error)
  }
}

const getOwnProfile = async (req, res) => {
  try {

    const user = await User.findByPk(res.locals.user.id)

    if (!user) {
      return res.send('User not found')
    }

    res.json({
      message: "Profile fetched",
      result: user,
    });
  } catch (error) {
     res.json(error);
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  addPet,
  createAndAddPet,
  getOwnProfile
};