import Customer from "../models/Customer.js";

export default async (req, res, next) => {
  let one = await Customer.findOne({ dni: req.body.dni });

  if (one) {
    req.isValidCustomer = true;
  } else {
    req.isValidCustomer = false;
  }

  return next();
};
