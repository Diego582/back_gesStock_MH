import Grouping from "../models/Grouping.js";

export default async (req, res, next) => {
  let one = await Grouping.findOne({ email: req.body.email });

  if (one) {
    req.isValidGrouping = true;
  } else {
    req.isValidGrouping = false;
  }

  return next();
};
