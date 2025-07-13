import Grouping from "../../models/Grouping.js";

export default async (req, res, next) => {
  try {

    if (req.isValidGrouping) {
      return res.status(409).json({
        success: false,
        message: "duplicate grouping - " + req.body.email,
        response: null,
      });
    }


    let newGrouping = await Grouping.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Category created",
      response: newGrouping,
    });
  } catch (error) {
    return next(error);
  }
};
