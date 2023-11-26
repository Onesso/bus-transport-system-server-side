import express from "express";

const router = express.Router();

import { isAdmin, requireSignin } from "../middleware/auth.js";

import { enquiryy, allenquiries } from "../Controllers/enquiry.js";

router.post("/enquiry", requireSignin, enquiryy);
router.get("/enquiry", requireSignin, allenquiries);

export default router;
