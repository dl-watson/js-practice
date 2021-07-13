/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEmpty = (object) => {
  // check the object's keys
  // if the object has no keys, it is empty
  if (Object.keys(object).length === 0) return true;

  // this one feels like cheating
  return !Object.keys(object).filter(
    (key) => object[key] || object[key] === 0 || object[key] === false
  ).length;
};

// should return false, objects has primitive values
// should return false, shallow check, so [] and {} counts as not empty
// should return true, objects with null, NaN, undefined, empty string, [], {}
