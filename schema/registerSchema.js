import joi from "joi";

let registerSchema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.min": "name must have at least 3 characters please!",
    "string.max": "name must be less than 21 characters please!",
    "any.required": "name is required",
    "string.empty": "name is required",
  }),
  lastName: joi.string().min(3).max(20).empty("").messages({
    "string.min": "last name must have at least 3 characters please!",
    "string.max": "last name must be less than 21 characters please!",
  }),
  mail: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "MAIL_REQUIRED",
    "string.empty": "MAIL_REQUIRED",
    "string.email": "INVALID_MAIL",
  }),
  password: joi.string().required().min(6).alphanum().messages({
    "string.min": "password must have at least 6 characters please!",
    "string.alphanum": "password must be alphanumeric please!",
  }),
});

export default registerSchema;
