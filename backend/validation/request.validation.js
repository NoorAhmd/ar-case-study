const Joi = require('joi')

const requestSourceValidation = (body) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        type: Joi.string().required(),
        url: Joi.string().required(),
        duration: Joi.number().required(),
    })
    return schema.validate(body)
}

module.exports = {
    requestSourceValidation,
}
