import Customer from "../../models/Customer.js";

export default async (req, res, next) => {
  try {
    let oneCustomer = await Customer.findOne({ _id: req.params.id }).select();
    return res.status(200).json({
      success: true,
      message: "Customer found",
      response: oneCustomer,
    });
  } catch (error) {
    next(error);
  }
};
