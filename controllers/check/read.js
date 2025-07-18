import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.client_id) {
      queries.client_id = new RegExp(req.query.client_id, "i");
    }
   
    const allCheck = await Check.find(queries, "-__v -createdAt -updatedAt")
      .populate("client_id")
      .populate({
        path: "products_id",
        populate: {
          path: "id_product", // Cambia 'category' por el campo que deseas poblar dentro de 'products_id'
        },
      });

    return res.status(200).json({
      success: true,
      message: "Checks found",
      response: allCheck,
    });
  } catch (error) {
    next(error);
  }
};
