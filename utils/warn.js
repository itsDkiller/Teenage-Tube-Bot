const colors = require('colors');

/**
 * Formats and logs a string in the console
 * @param {String} warn
 */
module.exports = (warn) => {
    return console.log(`[WARN] `.yellow + warn.white); 
}