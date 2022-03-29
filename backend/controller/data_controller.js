const dataService = require('../services/data.services')
const validation = require('../validation/request.validation')
const customError = require('../utils/customError')

const getAllData = async (req, res, next) => {
    try {
        const data = await dataService.readData()
        console.log(data)
        res.status(200).json({
            success: true,
            data,
        })
    } catch (error) {
        next(error)
    }
}

const addData = async (req, res, next) => {
    // body sent to Api
    const requestBody = req.body
    // Joi validation
    const {error} = validation.requestSourceValidation(requestBody)
    if (error) {
        const err = new customError.bodyValidationError(error) // error come from the Joi validation package
        return next(err) // show the error and return
    }
    try {
        await dataService.writeData(requestBody) // push new body to array of JSON
        res.status(201).json({
            success: true,
            msg: 'Data added',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllData, addData}
