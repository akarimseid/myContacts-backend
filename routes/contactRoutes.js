const express = require("express");

const router = express.Router();

const {
  getContacts,
  getContact,
  deleteContact,
  updateContact,
  createContact,
} = require("../controllers/contactController.js");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route("/").post(createContact);

// router.route("/:id")

// router.route("/:id")

module.exports = router;
