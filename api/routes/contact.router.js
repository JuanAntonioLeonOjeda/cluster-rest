const router = require("express").Router()

const {
  getAllContacts,
  getOneContact,
  createContact
} = require('../controllers/contact.controller')

router.get('/', getAllContacts)

router.get('/:id', getOneContact)

router.post('/', createContact)

router.put('/:id', (req, res) => {
  res.send(`Contact ${req.params.id} updated`)
})

router.delete('/:id', (req, res) => {
  res.send(`Contact ${req.params.id} deleted`);
})

module.exports = router
