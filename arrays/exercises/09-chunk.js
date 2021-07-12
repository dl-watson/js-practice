/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
export const chunk = (array, size) => {
  // initialize a buffer array
  const buffer = [];
  // track the index, starting at 0
  let index = 0;
  // loop over the input array, while the index is less than the length of the array
  while (index < array.length) {
    // a slice will return an array
    // so we'll take a slice from the current index to index + size and add this to our buffer
    buffer.push(array.slice(index, index + size));
    // increment the index by the size
    index += size;
  }

  return buffer;
};
