
// bard
import express from "express";
import Formidable from "express-formidable";

const router = express.Router();

// signin middleware
import { requireSignin, isAdmin } from "../middleware/auth.js";

// import from controller function
import { create, allVehicles, photo, searched } from "../Controllers/vehicle.js";

router.post(
  "/vehicle",
  requireSignin,
  isAdmin,
  Formidable(), // Place Formidable middleware inside parentheses
  create
);

router.get("/fleet", allVehicles); //get all veicles

//get photo
router.get("/vehicle/photo/:vehicleId", photo);

//filter by id

router.post("/filter", searched)


export default router;