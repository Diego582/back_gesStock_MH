import express from "express";
import create from "../controllers/check/create.js";
import destroy from "../controllers/check/destroy.js";
import read from "../controllers/check/read.js";
import readLast from "../controllers/check/readLast.js";
import update from "../controllers/check/destroy.js";
import readOne from "../controllers/check/readOne.js";


const router = express.Router();

/* GET users listing. */
router.post("/", create);

//READ
router.get("/", read);
router.get("/last", readLast);


//READ ONE
router.get("/:_id", readOne);


//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
