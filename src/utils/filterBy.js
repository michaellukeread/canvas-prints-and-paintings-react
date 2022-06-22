/**
 * @param {array} items - Array of objects
 * @param {string} key - Key in object to filter by
 * @param {function} func - Callback function to be ran with item
 * @returns {array} An array of filtered items
 */
const filterBy = (items, key, func) => items.filter(item => func(item, key))

export default filterBy
