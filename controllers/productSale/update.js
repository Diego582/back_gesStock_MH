import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {
    let updatedProductSale = await ProductSale.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedProductSale) {
      return res.status(200).json({
        success: true,
        message: "ProductSale updated",
        response: updatedProductSale,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not updated",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
