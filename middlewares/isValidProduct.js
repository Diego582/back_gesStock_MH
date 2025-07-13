import Product from "../models/Product.js";

export default async (req, res, next) => {
  let one = await Product.findOne({ codigoBarras: req.body.codigoBarras });

  if (one) {
    req.isValidProduct = true;
  } else {
    req.isValidProduct = false;
  }

  return next();
};
