import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {

    let queries = {};
    if (req.query.descripcion) {
      queries.descripcion = new RegExp(req.query.descripcion, "i");
    }
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp(req.query.codigoBarras, "i");
    }
    const allCheck = await Check.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("").populate("products");

    return res.status(200).json({
      success: true,
      message: "Checks found",
      response: allCheck,
    });
  } catch (error) {
    next(error);
  }
};
