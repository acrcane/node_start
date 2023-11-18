const Joi = require('joi');
const dataValidate = (param) => {
    const schema = Joi.object({
        fileName: Joi.string().required(),
        content: Joi.string().required(),
    });
    return schema.validate(param);
}

module.exports = dataValidate;