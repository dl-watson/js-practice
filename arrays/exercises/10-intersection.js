/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
export const intersection = (...arrays) => {
  const result = arrays[0].filter((elem) => {
    const index = arrays[1].indexOf(elem);
    if (index >= 0) return elem;
    else return null;
  });

  if (result != null && arrays.length > 2) {
    intersection(result, ...arrays.slice(2, arrays.length));
  }

  return Array.from(new Set(result));
};
