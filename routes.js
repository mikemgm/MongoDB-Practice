const express = require("express");
const router = express.Router(); 
const ContactController = require("./controllers/contact_controllers")

router.get("/", ContactController.newResource); 
 
 router.get("/contacts", ContactController.index);
 
 router.post("/contacts", ContactController.create);

 module.exports = router; 