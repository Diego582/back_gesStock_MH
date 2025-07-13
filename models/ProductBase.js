import { model, Schema, Types } from "mongoose";

let collection = "productBase";

let schema = new Schema(
  {
    codigoBarras: { type: String, required: true },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
  },
  { timestamps: true }
);
let Customer = model(collection, schema);
export default Customer;
