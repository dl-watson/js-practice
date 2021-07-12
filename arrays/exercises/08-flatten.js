/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
export const flatten = (array) => {
  // case for reduce
  // for each element, check whether it is an array or a number
  // if it is an array, we'll need to recursively repeat the same check
  // if it's a number, concat this value to our accumulator
  return array.reduce((acc, cur) => {
    return acc.concat(typeof cur === "object" ? flatten(cur) : cur);
  }, []);
};
