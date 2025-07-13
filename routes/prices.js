import express from "express";
import create from "../controllers/prices/create.js";
import destroy from "../controllers/prices/destroy.js";
import read from "../controllers/prices/read.js";
import readOne from "../controllers/prices/readOne.js";
import update from "../controllers/prices/update.js";


const router = express.Router();

/* GET users listing. */
router.post("/", create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
