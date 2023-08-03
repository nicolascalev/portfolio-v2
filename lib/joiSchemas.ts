import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  message: Joi.string().required(),
});
