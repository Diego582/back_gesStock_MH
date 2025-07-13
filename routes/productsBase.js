import express from "express";
import create from "../controllers/productBase/create.js";
import destroy from "../controllers/productBase/destroy.js";
import read from "../controllers/productBase/read.js";
import readOne from "../controllers/productBase/readOne.js";
import update from "../controllers/productBase/destroy.js";


import isValidProducBase from "../middlewares/isValidProducBase.js";

const router = express.Router();

/* GET users listing. */
router.post("/",isValidProducBase, create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
