import Customer from "../../models/Customer.js";

export default async (req, res, next) => {
  try {
    if (req.isValidCustomer) {
      return res.status(409).json({
        success: false,
        message: "duplicate client - " + req.body.dni,
        response: null,
      });
    }

    let newCustomer = await Customer.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Client created",
      response: newCustomer,
    });
  } catch (error) {
    return next(error);
  }
};
