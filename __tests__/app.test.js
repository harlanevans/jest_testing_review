import {
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
} from "../app";
// hint of look in before_each before_all

// describe("originalArray Test", () => {
//   test("originalArray should return it self", () => {
//     expect(originalArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
//   });
// });

// describe("doubleArray function", () => {
//   test("it should double values in array", () => {
//     expect(doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
//   });
// });


// describe("evensOnlyArray", () => {
//   test("it should return only even numbers", () => {
//     expect(evensOnlyArray([10, 12, 11, 15])).toEqual([10, 12]);
//   })
// })

// describe("arraySum", () => {
//   test("it should return a sum off numbers in array", () => {
//     expect(arraySum([5, 10, 15])).toEqual(30)
//   })
// })

// describe("allNumbersGreaterThanZero", () => {
//   test("it should return true if all numbers are greater than zero", () => {
//     expect(allNumbersGreaterThanZero([1, 5, 9, 81, 12])).toEqual(true)
//   })
// })

// describe("someNumbersAreOdd function", () => {
//   test("it should return false if there is not a single odd in array", () => {
//     expect(someNumbersAreOdd([6, 4 , 8 , 8])).toEqual(false)
//   })
// })

describe("evensOnlyAndDoubleArray", () => {
  test("it should return evens only and double numbers", () => {
    expect(evensOnlyAndDoubleArray([1, 2, 3, 4])).toEqual([4, 8]);
  })
});