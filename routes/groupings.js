import express from "express";
import create from "../controllers/grouping/create.js";
import destroy from "../controllers/grouping/destroy.js";
import read from "../controllers/grouping/read.js";
import readOne from "../controllers/grouping/readOne.js";
import update from "../controllers/grouping/destroy.js";

import validator from "../middlewares/validator.js";
import isValidGrouping from "../middlewares/isValidGrouping.js";

import groupingSchema from "../schema/groupingSchema.js";

const router = express.Router();

/* GET users listing. */
router.post("/", isValidGrouping, validator(groupingSchema), create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
