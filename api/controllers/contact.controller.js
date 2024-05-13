const Contact = require('../models/contact.model')

const getAllContacts = async (req, res) => {
  try {
   const contacts = await Contact.findAll()

   res.json({
     message: "Contacts fetched",
     result: contacts,
   });
  } catch (error) {
    res.json(error);
  }
}

const getOneContact = async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id)

    res.json({
      message: "Contact fetched",
      result: contact,
    });
  } catch (error) {
    res.json(error);
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body)
    res.json({
      message: 'Contact created',
      result: contact
    })
  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  getAllContacts,
  getOneContact,
  createContact
}