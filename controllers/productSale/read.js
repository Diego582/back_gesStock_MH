import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {

    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp(req.query.codigoBarras, "i");
    }
    const allProductSale = await ProductSale.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("").populate("products");

    return res.status(200).json({
      success: true,
      message: "ProductSales found",
      response: allProductSale,
    });
  } catch (error) {
    next(error);
  }
};
