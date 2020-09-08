const colors = require('colors');

/**
 * Formats and logs a string in the console
 * @param {String} error
 */
module.exports = (error) => {
    return console.log(`[ERROR] `.red + error.white); 
}