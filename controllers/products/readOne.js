import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    let oneProduct = await Product.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "Product found",
      response: oneProduct,
    });
  } catch (error) {
    next(error);
  }
};
