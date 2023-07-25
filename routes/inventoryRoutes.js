const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS  || GET
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET RECENT BLOOD RECORDS  || GET
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET HOSPITAL BLOOD RECORDS  || POST
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

//GET DONAR RECORDS  || GET
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS  || GET
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET ORGRANISATION RECORDS  || GET
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

//GET ORGRANISATION RECORDS  || GET
router.get("/get-organisation-for-hospital", authMiddleware, getOrgnaisationForHospitalController);

module.exports = router;
