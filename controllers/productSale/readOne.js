import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {
    let oneProductSale = await ProductSale.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "ProductSale found",
      response: oneProductSale,
    });
  } catch (error) {
    next(error);
  }
};
