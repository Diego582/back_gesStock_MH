import express from "express";
import read from "../controllers/archivo/read.js";

const router = express.Router();

/* GET users listing. */
router.get("/", read);

export default router;
