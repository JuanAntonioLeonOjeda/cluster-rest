const router = require("express").Router()

const {
  getAllUsers,
  getOneUser,
  createUser,
  addPet,
  createAndAddPet,
  getOwnProfile
} = require("../controllers/user.controller")

const {
  checkAuth,
  checkAdmin
} = require('../middlewares')

router.get('/', checkAuth, getAllUsers)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/:id', checkAuth, checkAdmin, getOneUser)

router.post('/', createUser)
router.post("/:id/createPet", createAndAddPet)

router.put('/:id', (req, res) => {
  res.send(`User ${req.params.id} updated`)
})

router.put('/:userId/add/:petId', addPet)

router.delete('/:id', (req, res) => {
  res.send(`User ${req.params.id} deleted`);
})

module.exports = router
