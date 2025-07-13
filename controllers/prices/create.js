import Price from "../../models/Price.js";

export default async (req, res, next) => {
  try {

    let newPrice = await Price.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Price created",
      response: newPrice,
    });
  } catch (error) {
    return next(error);
  }
};
