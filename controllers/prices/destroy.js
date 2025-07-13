import Price from "../../models/Price.js";

export default async (req, res, next) => {
  try {
    let deletedPrice = await Price.findByIdAndDelete(req.params.id);

    if (deletedPrice) {
      return res.status(200).json({
        success: true,
        message: "Price deleted",
        response: deletedPrice._id,
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
