import Customer from "../../models/Customer.js";

export default async (req, res, next) => {
  try {
    let deletedCustomer = await Customer.findByIdAndDelete(req.params.id);

    if (deletedCustomer) {
      return res.status(200).json({
        success: true,
        message: "Customer deleted",
        response: deletedCustomer._id,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not deleted",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
