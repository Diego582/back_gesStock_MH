import joi from "joi";

let customerSchema = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.min": "name must have at least 3 characters please!",
    "string.max": "name must be less than 21 characters please!",
    "any.required": "name is required",
    "string.empty": "name is required",
  }),
  lastName: joi.string().required().min(3).max(20).messages({
    "string.min": "lastName must have at least 3 characters please!",
    "string.max": "lastName must be less than 21 characters please!",
    "any.required": "lastName is required",
    "string.empty": "lastName is required",
  }),
  dni: joi.string().required().min(8).max(8).messages({
    "string.min": "dni must have at least 8 characters please!",
    "string.max": "dni must be less than 8 characters please!",
    "any.required": "dni is required",
    "string.empty": "dni is required",
  }),
  cuit: joi.string().required().messages({
    "any.required": "cuit is required",
    "string.empty": "cuit is required",
  }),

  condition: joi.string().required().messages({
    "any.required": "condition is required",
    "string.empty": "condition is required",
  }),
  address: joi.string().required().messages({
    "any.required": "address is required",
    "string.empty": "address is required",
  }),
});

export default customerSchema;
