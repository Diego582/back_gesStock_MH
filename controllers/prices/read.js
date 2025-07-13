import Price from "../../models/Price.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    const allPrice = await Price.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("").populate("id_product");

    return res.status(200).json({
      success: true,
      message: "Prices found",
      response: allPrice,
    });
  } catch (error) {
    next(error);
  }
};
