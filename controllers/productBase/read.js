import ProductBase from "../../models/ProductBase.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.codigoBarras) {
      queries.codigoBarras = new RegExp(req.query.codigoBarras, "i");
    }
    const productGenerico = {
      descripcion: 'Producto No cargado',
      categoria: "Sin Categoria"
    }
    const productBase = await ProductBase.findOne(
      {
        codigoBarras: req.query.codigoBarras,
      },
      "-__v -createdAt -updatedAt -_id"
    ).select("");
    if (productBase) {
      return res.status(200).json({
        success: true,
        message: "ProductBases found",
        response: productBase,
      });
    }
    return res.status(200).json({
      success: true,
      message: "product not found",
      response: "",
    });
  } catch (error) {
    next(error);
  }
};
