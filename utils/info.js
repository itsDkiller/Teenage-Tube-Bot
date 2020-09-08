const colors = require('colors');

/**
 * Formats and logs a string in the console
 * @param {String} info
 */
module.exports = (info) => {
    return console.log(`[INFO] `.green + info.white); 
}