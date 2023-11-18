const checkExtention = (fileName) => {
    const EXTENTIONS = ['txt', 'js', 'html', 'css', 'json'];
    const extArr = fileName.split('.')
    const extention = extArr[extArr.length - 1]
    const result = EXTENTIONS.indexOf(extention) !== -1;
    return {
        extention,
        result,
    }
}

module.exports = checkExtention