import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {

    let oneCheck = await Check.findOne({}, {}, { sort: { createdAt: -1 } })


    return res.status(200).json({
      success: true,
      message: "Check found",
      response: oneCheck,
    });
  } catch (error) {
    next(error);
  }
};
