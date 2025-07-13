import express from "express";

import read from "../controllers/users/read.js";

const router = express.Router();

/* GET users listing. */

router.get("/", read);

export default router;
