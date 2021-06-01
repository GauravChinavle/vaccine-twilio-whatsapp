const Joi = require("joi");

const middleware = userSchema => {
  return (req, res, next) => {
    const options = {
      pin: "110001", // include all errors
      mob_no: "8693842216" // ignore unknown props
    };
    const { error, value } = userSchema.validate(req.body, options);
    const valid = error == null;
    if (valid) {
      
      return next();
    }
    const { details } = error;
    const message = details.map(i => i.path).join(",");
    console.log("error", details);
    res.status(422).json({ error: "Please check " + message });
  };
};
module.exports = middleware;
