import { model, Schema, Types } from "mongoose";

let collection = "productSales";

let schema = new Schema(
    {
        id_product: { type: Types.ObjectId, ref: 'products', required: true },
        amount: { type: Number, required: true },
        price: { type: String, required: true },
    },
);
let ProductSale = model(collection, schema);
export default ProductSale;