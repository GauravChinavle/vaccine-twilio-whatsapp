const Joi = require("joi");

const schemas = {
  userSchema: Joi.object().keys({
    pin: Joi.string().regex(/^\d{6}$/),
    mobile: Joi.string().regex(/^\d{10}$/)
  })
};
module.exports = schemas;
