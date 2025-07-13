import { model, Schema, Types } from "mongoose";

let collection = "products";

let schema = new Schema(
  {
    codigoBarras: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    agrupamiento: { type: String, required: true },
    prices: [{ type: Types.ObjectId, ref: 'prices' }]
  },
  { timestamps: true }
);
let Product = model(collection, schema);
export default Product;

