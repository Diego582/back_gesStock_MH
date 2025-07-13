import express from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";
import customerRouter from "./customer.js";
import productsRouter from "./products.js";
import groupingsRouter from "./groupings.js";
import productsBaseRouter from "./productsBase.js";
import pricesRouter from "./prices.js"
import checksRouter from "./checks.js"
import productsSalesRouter from "./productssales.js"

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/customers", customerRouter);
router.use("/products", productsRouter);
router.use("/groupings", groupingsRouter);
router.use("/productsbase", productsBaseRouter);
router.use("/prices", pricesRouter);
router.use("/checks", checksRouter);
router.use("/productssales", productsSalesRouter);




export default router;