import Price from "../../models/Price.js";

export default async (req, res, next) => {
  try {
    let onePrice = await Price.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "Price found",
      response: onePrice,
    });
  } catch (error) {
    next(error);
  }
};
