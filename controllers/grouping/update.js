import Grouping from "../../models/Grouping.js";

export default async (req, res, next) => {
  try {
    let updatedGrouping = await Grouping.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).select();
    if (updatedGrouping) {
      return res.status(200).json({
        success: true,
        message: "Grouping updated",
        response: updatedGrouping,
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
