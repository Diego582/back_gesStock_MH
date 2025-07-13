import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {

    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp("^" + req.query.codigoBarras + "$", "i");
    }
    const allProduct = await Product.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("").populate("prices", "value currency _id");
    if (!allProduct) {
      return res.status(404).json({
        success: true,
        message: "Products not found",
        response: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Products found",
      response: allProduct,
    });
  } catch (error) {
    next(error);
  }
};
