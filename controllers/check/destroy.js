import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {
    let deletedCheck = await Check.findByIdAndDelete(req.params.id);

    if (deletedCheck) {
      return res.status(200).json({
        success: true,
        message: "Check deleted",
        response: deletedCheck._id,
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
