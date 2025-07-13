import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {
    let updatedCheck = await Check.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedCheck) {
      return res.status(200).json({
        success: true,
        message: "Check updated",
        response: updatedCheck,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "not updated",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
