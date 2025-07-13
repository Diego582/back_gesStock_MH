import Check from "../../models/Check.js";

export default async (req, res, next) => {
  try {

    let newCheck = await Check.create(req.body)

    
    return res.status(201).json({
      success: true,
      message: "Check created",
      response: newCheck,
    });
  } catch (error) {

    return next(error);
  }
};
