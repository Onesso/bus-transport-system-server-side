import express from "express";
// import Formidable from "express-formidable";
// this allows me to work with the form data i.e. be able to upload image to the server and database

const router = express.Router(); //the capital r is very important

//middleware
import { isAdmin, requireSignin } from "../middleware/auth.js";

import { create, list, update,remove,single } from "../Controllers/route.js";


router.post("/travel", requireSignin, isAdmin, create); //ku upload
router.get("/travelroutes", list);
router.get("/onetravelroutes/:routeID", single);
router.put("/travel/:travelId",requireSignin, isAdmin,  update);
router.delete("/travel/:travelId",requireSignin, isAdmin, remove);

// router.delete("/category/:categoryId", requireSignin, isAdmin, remove);

export default router;
