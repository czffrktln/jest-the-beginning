const findUnique = require('./findUnique')

it("should return the first if that's the odd one", () => {
  // given
  const array = [9, 20, 20, 20];

  // when
  const result = findUnique(array)

  // then
  expect(result).toBe(array[0])
})

it("should return the second element it that's the odd one", () => {
  // given
  const array = [100, 5, 100, 100];

  // when
  const result = findUnique(array)

  // then
  expect(result).toBe(5)
})

it("should return the odd one, which is not the first or the second element in the array", () => {
  // given
  const array = [-33, -33, -33, -66, -33, -33];

  // when
  const result = findUnique(array)

  // then
  expect(result).toBe(-66)
})

it("should throw an error message, if there's an invalid input", () => {
  // given
  const array = [undefined, 4, 7];

  // when
  const result = () => findUnique(array)

  // then
  expect(result).toThrow('Invalid input')
})


// const array1 = [9, 20, 20, 20];
// const array2 = [100, 5, 100, 100];
// const array3 = [-33, -33, -33, -66, -33, -33];
// const array4 = [undefined, 4, 7];

// test("the first number of the array is the odd one", () => {
//   expect(findUnique(array1)).toBe(9)
// })

// test("the second number of the array is the odd one", () => {
//   expect(findUnique(array2)).toBe(5)
// })

// test("the odd one is not the first or second number of the array", () => {
//   expect(findUnique(array3)).toBe(-66)
// })

// test('invalid input expecting an error message', () => {
//   expect(() => findUnique(array4)).toThrow('Invalid input');
// });