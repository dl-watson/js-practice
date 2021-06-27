/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

export const flatten = (array) => {
  return array.reduce((acc, cur) => {
    if (typeof cur == "number") {
      acc = acc.concat(cur)
    } else {
      acc = acc.concat(flatten(cur))
    }
    return acc
  }, [])

};

flatten([1, 2, [3, 4, [5]]]);
