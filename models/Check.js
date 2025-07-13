import { model, Schema, Types } from "mongoose";

let collection = "checks";

let schema = new Schema(
    {
        puntoSales: { type: Number, required: true },
        comprobante: { type: Number, required: true },
        fecha: { type: String, required: true },
        products_id: [{ type: Types.ObjectId, ref: 'productSales' }],
        client_id: { type: Types.ObjectId, ref: 'customers', required: true }
    },
    { timestamps: true }
);
let Check = model(collection, schema);
export default Check;