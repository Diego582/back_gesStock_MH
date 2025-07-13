import Grouping from "../../models/Grouping.js";

export default async (req, res, next) => {
  try {
    let deletedGrouping = await Grouping.findByIdAndDelete(
      req.params.id
    );

    if (deletedGrouping) {
      return res.status(200).json({
        success: true,
        message: "Grouping deleted",
        response: deletedGrouping._id,
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
