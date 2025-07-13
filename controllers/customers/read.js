import Customer from "../../models/Customer.js";

export default async (req, res, next) => {
  try {
    let queries = {};
    if (req.query.lastName) {
      queries.lastName = new RegExp(req.query.lastName, "i");
    }
    const allCustomer = await Customer.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("");

    return res.status(200).json({
      success: true,
      message: "Customers found",
      response: allCustomer,
    });
  } catch (error) {
    next(error);
  }
};
