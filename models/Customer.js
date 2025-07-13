import { model, Schema, Types } from "mongoose";

let collection = "customers";

let schema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true },
    cuit: { type: String, required: true },
    condition: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);
let Customer = model(collection, schema);
export default Customer;
