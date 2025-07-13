import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let deletedProductBase = await ProductBase.findByIdAndDelete(req.params.id);

    if (deletedProductBase) {
      return res.status(200).json({
        success: true,
        message: "ProductBase deleted",
        response: deletedProductBase._id,
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
