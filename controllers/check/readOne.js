import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {

    let oneCheck = await Check.findOne({ _id: req.params._id })
      .populate('client_id')
      .populate({
        path: 'products_id',
        populate: {
          path: 'id_product',  // Cambia 'category' por el campo que deseas poblar dentro de 'products_id'
        }
      });

    return res.status(200).json({
      success: true,
      message: "Check found",
      response: oneCheck,
    });
  } catch (error) {
    next(error);
  }
};
