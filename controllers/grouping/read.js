import Grouping from "../../models/Grouping.js";




export default async (req, res, next) => {
  try {
    let queries = {};
    /* if (req.query.lastName) {
      queries.lastName = new RegExp(req.query.lastName, "i");
    } */
    const allGrouping = await Grouping.find(
      queries,
      "-__v -createdAt -updatedAt"
    ).select("");

    return res.status(200).json({
      success: true,
      message: "Groupings found",
      response: allGrouping,
    });
  } catch (error) {
    next(error);
  }
};
