import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let updatedProductBase = await ProductBase.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedProductBase) {
      return res.status(200).json({
        success: true,
        message: "ProductBase updated",
        response: updatedProductBase,
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
