const Joi = require("joi");

const validateSchema = joi.object().keys({
  username: Joi.string().alphanum().required(),
  name: Joi.string(),
  password: Joi.string().alphanum().min(8).required(),
  confirmedPassword: joi.ref("password"),
});

module.exports = validateSchema;
