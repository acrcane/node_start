const path = require('path');
const fs = require('fs').promises;
const dataValidate = require('./helpers/dataValidate')
const checkExtention = require('./helpers/checkExtention')

const createFile = async (fileName, content) => {
    const file = {fileName, content}
    const isValid = dataValidate(file);
    if (isValid.error) {
        console.log(`Please, specify ${isValid.error.details[0].path[0]} param`);
        return;
    }
    const checkRes = checkExtention(fileName)
    if (!checkRes.result) {
        console.log(`Files with ${checkRes.extention} are not supported`)
        return;
    }
    const filePath = path.join(__dirname, 'files', fileName);
    try {
        await fs.writeFile(filePath, content, 'utf-8');
        console.log('File was created successfully')
    } catch (e) {
        console.log('e', e)
    }
}

module.exports = { createFile }