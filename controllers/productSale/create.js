import ProductSale from "../../models/ProductSale.js";

export default async (req, res, next) => {
  try {

    const { codigoBarras, descripcion, amount, price, id_product } = req.body
    let newProduct = { id_product: id_product, amount: amount, price }

    let newProductSale = await ProductSale.create(newProduct)

    if (newProductSale) {
      newProduct.codigoBarras = codigoBarras
      newProduct.descripcion = descripcion
      newProduct._id = newProductSale._id
      delete newProduct.id_product
      
    }



    return res.status(201).json({
      success: true,
      message: "ProductSale created",
      response: newProduct,
    });
  } catch (error) {

    return next(error);
  }
};
