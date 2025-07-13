import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let oneProductBase = await ProductBase.findOne({
      _id: req.params._id,
    }).select();
    return res.status(200).json({
      success: true,
      message: "ProductBase found",
      response: oneProductBase,
    });
  } catch (error) {
    next(error);
  }
};
