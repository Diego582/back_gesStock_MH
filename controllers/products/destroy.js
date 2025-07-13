import Product from "../../models/Product.js";

export default async (req, res, next) => {
  try {
    let deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (deletedProduct) {
      return res.status(200).json({
        success: true,
        message: "Product deleted",
        response: deletedProduct._id,
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
