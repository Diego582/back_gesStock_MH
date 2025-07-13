import joi from "joi";

let signinSchema = joi.object({
  mail: joi
    .string()
    .required()
    .min(8)
    .max(20)
    .email({ minDomainSegments: 2 })
    .messages({
      "any.required": "mail is required",
      "string.empty": "mail is required",
      "string.email": "mail is invalid",
      "string.min": "mail must have at least 8 characters please!",
      "string.max": "mail must be less than 21 characters please!",
    }),
  password: joi.string().required().min(6).max(20).alphanum().messages({
    "any.required": "password is required",
    "string.empty": "password is required",
    "string.min": "password must have at least 6 characters please!",
    "string.max": "password must be less than 21 characters please!",
    "string.alphanum": "password must be alphanumeric please!",
  }),
});

export default signinSchema;