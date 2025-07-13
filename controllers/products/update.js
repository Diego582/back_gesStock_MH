import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    let updatedProduct = await Product.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product updated",
        response: updatedProduct,
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
