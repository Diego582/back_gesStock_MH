import ProductBase from "../models/ProductBase.js";

export default async (req, res, next) => {
  let one = await ProductBase.findOne({ codigoBarras: req.body.codigoBarras });

  if (one) {
    req.isValidProductBase = true;
  } else {
    req.isValidProductBase = false;
  }

  return next();
};
