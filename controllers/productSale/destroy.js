import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {
    let deletedProductSale = await ProductSale.findByIdAndDelete(req.params.id);

    if (deletedProductSale) {
      return res.status(200).json({
        success: true,
        message: "ProductSale deleted",
        response: deletedProductSale._id,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not deleted",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
