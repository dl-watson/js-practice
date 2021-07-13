/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstObj, secondObj) => {
  // note that JSON.stringify shouldn't be used in all cases (it can ignore keys whose value is undefined, and is appropriate for a shallow compare only)
  return JSON.stringify(firstObj) == JSON.stringify(secondObj);
};
