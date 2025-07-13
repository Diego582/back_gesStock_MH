import Product from "../models/Product.js";

export default async (req, res, next) => {
    let one = await Product.findOne({ codigoBarras: req.body.codigoBarras });

    if (one) {
        req.isValidProduct = true;
        req.body.id_product = one._id
    } else {
        req.isValidProduct = false;
    }

    return next();
};