/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
export const without = (array, ...args) => {
  // // sort the input array
  // const sorted = array.sort((a, b) => a - b);
  // // sort the args array
  // const sortargs = args.sort((a, b) => a - b);

  // let idx = 0;
  // for (let arg of sortargs) {
  //   console.log("arg", arg);

  //   while (idx < sorted.length - 1) {
  //     if (sorted[idx] === arg) {
  //       console.log("equivalence");
  //       sorted[idx] = null;
  //       idx++;
  //     } else if (sorted[idx] < arg) {
  //       console.log("less than");
  //       idx++;
  //     } else if (sorted[idx] > arg) {
  //       console.log("greater than");
  //       break;
  //     }
  //   }
  // }

  // console.log("sorted", sorted);

  // return sorted.filter((x) => x);

  return array
    .map((arr) => {
      args.map((arg) => {
        if (arg === arr) {
          arr = null;
        }
        return arg;
      });
      return arr;
    })
    .filter((x) => x);
};

without([1, 2, 3, 1, 2], 1, 2);
