import { model, Schema, Types } from "mongoose";

let collection = "grouping";

let schema = new Schema(
  {
    descripcion: { type: String, required: true },
    contacto: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);
let Customer = model(collection, schema);
export default Customer;
