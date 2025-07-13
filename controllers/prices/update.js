import Price from "../../models/Price.js";
import Product from "../../models/Product.js";


export default async (req, res, next) => {
  try {
    const { currency, value, id } = req.body
    let updatePrice = await Price.findByIdAndUpdate(
      req.params.id,
      { currency, value },
      { new: true }
    ).select();


    let oneProduct = await Product.findOne({ _id: id }).select().populate("prices", "value currency _id");;


    if (oneProduct) {

      return res.status(200).json({
        success: true,
        message: "Price updated",
        response: oneProduct,
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
