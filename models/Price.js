import { model, Schema } from "mongoose";

let collection = "prices";

let schema = new Schema(
    {
        value: { type: Number, required: true },
        currency: { type: String, required: true }
    },
    { timestamps: true }
);
let Price = model(collection, schema);
export default Price;