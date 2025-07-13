import Grouping from "../../models/Grouping.js";



export default async (req, res, next) => {
  try {
    let oneGrouping = await Grouping.findOne({ _id: req.params._id }).select();
    return res.status(200).json({
      success: true,
      message: "Grouping found",
      response: oneGrouping,
    });
  } catch (error) {
    next(error);
  }
};
