import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {

    if (req.isValidProduct) {
      return res.status(409).json({
        success: false,
        message: "duplicate product - " + req.body.codigoBarras,
        response: null,
      });
    }

    let newProduct = await Product.create(req.body)

    let productSend = await Product.findOne({ _id: newProduct._id }).select().populate("prices", "value currency _id");

    return res.status(201).json({
      success: true,
      message: "Client created",
      response: productSend,
    });
  } catch (error) {

    return next(error);
  }
};
