const path = require('path')
const fs = require('fs-extra')

const dataJSON = path.resolve('data', 'data.json')

class DataService {
    readData = async () => {
        return await fs.readJSON(dataJSON) // Read all data from the JSON file.
    }
    writeData = async (body) => {
        const data = await fs.readJSON(dataJSON) // Read all data from the JSON file.
        data.push(body) // Push new body to data
        return await fs.writeJSON(dataJSON, data, {spaces: 2}) // Add all to JSON file
    }
}

module.exports = new DataService()
