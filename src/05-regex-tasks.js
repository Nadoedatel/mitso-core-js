/**
 * Returns the regexp that matches a GUID string representation
 * '{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}',
 * where X is a hexadecimal digit (0-9, A-F, a-f)
 *
 * @return {RegExp}
 */
function getRegexForGuid() {
  // Регулярное выражение для GUID, заключенного в фигурные скобки
  return /^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$/;
}

/**
 * Returns the regexp that matches all the strings from first column
 * but none of them from the second
 *
 * Match :                 Do not match:
 * -----------             --------------
 *  'pit'                     ' pt'
 *  'spot'                    'Pot'
 *  'spate'                   'peat'
 *  'slap two'                'part'
 *  'respite'
 *
 * NOTE : the regex length should be < 13
 *
 * @return {RegExp}
 */
function getRegexForPitSpot() {
  // Регулярное выражение для строк, содержащих 'pit', 'spot', 'spate', 'slap two', 'respite'
  // и не содержащих строки из второго столбца
  return /p.t|res/;
}

/**
 * Returns the password validator regex.
 * Regex will validate a password to make sure it meets the following criteria:
 *  - At least specified characters long (argument minLength)
 *  - Contains a lowercase letter
 *  - Contains an uppercase letter
 *  - Contains a number
 *  - Valid passwords will only be alphanumeric characters (+ underscore).
 *
 * @param {number} minLength
 * @return {RegExp}
 */
function getPasswordValidator(minLength) {
  return new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{${minLength},}$`, '');
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
