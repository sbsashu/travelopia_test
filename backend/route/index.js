const express = require("express");
const router = express.Router();
const {addDetail, getDetails} = require("../controller");


router.post("/add/form/details",  addDetail)
router.get("/get/details", getDetails)

module.exports = router;