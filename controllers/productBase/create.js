import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {

    if (req.isValidProductBase) {
      return res.status(409).json({
        success: false,
        message: "duplicate product en BBDD - " + req.body.codigoBarras,
        response: null,
      });
    }


    let newProduct = await ProductBase.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Product created",
      response: newProduct,
    });
  } catch (error) {
    return next(error);
  }
};
