import joi from "joi";

let groupingSchema = joi.object({
  descripcion: joi.string().required().min(5).max(20).messages({
    "string.min": "descripcion must have at least 5 characters please!",
    "string.max": "descripcion must be less than 21 characters please!",
    "any.required": "descripcion is required",
    "string.empty": "descripcion is required",
  }),
  contacto: joi.string().required().min(3).max(20).messages({
    "string.min": "contacto must have at least 3 characters please!",
    "string.max": "contacto must be less than 21 characters please!",
    "any.required": "contacto is required",
    "string.empty": "contacto is required",
  }),
  telefono: joi.string().min(10).max(10).messages({
    "string.min": "telefono must have at least 10 characters please!",
    "string.max": "telefono must be less than 10 characters please!",
    "any.required": "telefono is required",
    "string.empty": "telefono is required",
  }),
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "MAIL_REQUIRED",
    "string.empty": "MAIL_REQUIRED",
    "string.email": "INVALID_MAIL",
  }),
});

export default groupingSchema;
