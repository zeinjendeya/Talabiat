const Joi = require("joi");

const validateSchema = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  name: Joi.string(),
  password: Joi.string().alphanum().min(8).required(),
  confirmedPassword: Joi.ref("password"),
});

module.exports = validateSchema;
