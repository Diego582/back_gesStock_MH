import express from "express";
import create from "../controllers/productSale/create.js";
import destroy from "../controllers/productSale/destroy.js";
import read from "../controllers/productSale/read.js";
import readOne from "../controllers/productSale/readOne.js";
import update from "../controllers/productSale/destroy.js";
import isValidProductSale from "../middlewares/isValidProductSale.js";


const router = express.Router();

/* GET users listing. */
router.post("/", isValidProductSale, create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:id", update);

//DESTROY
router.delete("/:id", destroy);

export default router;
