import express, { Router } from "express";

const router = express.Router();

//middlewares

import { isAdmin, requireSignin } from "../middleware/auth.js";
import { booked, singlebooking, allbooking } from "../Controllers/booking.js";

router.post("/book", requireSignin, booked);

router.get("/booking", requireSignin, isAdmin, allbooking);

router.get("/book", requireSignin, singlebooking);

export default router;
